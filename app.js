import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://kcjjdcpcivyeohapnmeu.snapcloud.dev";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjampkY3BjaXZ5ZW9oYXBubWV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1OTcxODksImV4cCI6MjA4NDE3MzE4OX0." +
  "19Bpd23C_CEItmUHzA6jFQyWW5ZiQTGGFSWJ-1CTRwM";

const BUCKET = "specs-captures";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const gallery = document.getElementById("gallery");
const status = document.getElementById("status");
const template = document.getElementById("card-template");

function setStatus(text, state) {
  status.textContent = text;
  status.className = `status status-${state}`;
}

function imageUrl(filePath) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function shortSession(id) {
  if (!id) return "";
  return id.length > 8 ? id.slice(0, 8) : id;
}

function renderCard(capture) {
  const clone = template.content.cloneNode(true);

  const img = clone.querySelector(".card-image");
  img.src = imageUrl(capture.file_path);
  img.alt = capture.title || "capture";

  clone.querySelector(".card-title").textContent =
    capture.title || "Untitled capture";

  clone.querySelector(".card-session").textContent =
    shortSession(capture.session_id);

  const time = clone.querySelector(".card-time");
  time.textContent = formatTime(capture.created_at);
  time.setAttribute("datetime", capture.created_at);

  return clone;
}

function showEmpty() {
  gallery.innerHTML = "";
  const p = document.createElement("p");
  p.className = "gallery-empty";
  p.textContent = "No captures yet. Use PinPoint on Spectacles to add some.";
  gallery.appendChild(p);
}

async function loadCaptures() {
  setStatus("loading\u2026", "pending");

  const { data, error } = await supabase
    .from("captures")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase query error:", error);
    setStatus("error", "error");
    return;
  }

  if (!data || data.length === 0) {
    setStatus("0 captures", "ok");
    showEmpty();
    return;
  }

  gallery.innerHTML = "";
  for (const capture of data) {
    gallery.appendChild(renderCard(capture));
  }

  setStatus(`${data.length} capture${data.length === 1 ? "" : "s"}`, "ok");
}

function subscribeToInserts() {
  supabase
    .channel("captures-realtime")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "captures" },
      (payload) => {
        const existing = gallery.querySelector(".gallery-empty");
        if (existing) existing.remove();

        gallery.prepend(renderCard(payload.new));

        const count = gallery.querySelectorAll(".card").length;
        setStatus(`${count} capture${count === 1 ? "" : "s"}`, "ok");
      }
    )
    .subscribe();
}

loadCaptures().then(subscribeToInserts);
