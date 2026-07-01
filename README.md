# PinPoint Portal — Showroom Sales Intelligence

Web portal demo for the PinPoint AR showroom tool.

## Running it

Double-click `index.html` to open it in your browser. That's it — no build step, no server, no dependencies.

The file is fully self-contained (HTML + CSS + JS inline). Internet is needed once on first load to fetch the Google Fonts (Manrope, Inter, JetBrains Mono); the page works without them too, falling back to system sans-serif.

## Demo flow

The portal has three tabs in the left sidebar:

1. **Showroom Floor** — Live session view (default landing). Shows Sylvan Marchetti's in-progress session.
   - Click **End session** (top-right of the toggle bar) to flip to the Session Summary mode.
   - In the live feed, click **See N matches** on any note to expand catalog matches.
   - Click **Spawn in AR** on a match card to simulate spawning a 3D model in the customer's AR view (shows a toast).
   - In summary mode, click **Export PDF** to download the visit recap, or **Send recap to customer** to open the email composer (edit To, subject, and message, then **Send email**).

2. **Customer Profiles** — Catalog of customers with search and a sticky list. Sylvan's full lifetime profile is wired up; other customers show a placeholder toast on click.

3. **Showroom Insights** — Aggregated reactions for one product (Nobilia Senso) across the showroom: themes, sentiment, reaction stream.

4. **Consent Settings** (System) — Privacy consent form and registry table. Click **+ New consent form** for a walk-in customer, or select an existing row. Check consent, sign, and **Save consent**. Use **Delete consent** to remove a saved form or walk-in entry. Saved email flows into **Send recap** on the session summary.

## Session summary: Export PDF & Send recap

### Export PDF (works immediately)

**Export PDF** generates and downloads a vector PDF directly (pdfmake) — sharp text, proper margins, no screenshot blur. If the library fails to load from `file://`, run `python3 -m http.server 8080` and open `http://localhost:8080`.

### Send recap email (composer + backend)

**Send recap to customer** opens a composer modal:

1. **To** — pre-filled from Consent Settings if the customer left an email; otherwise enter it manually (fully editable).
2. **Subject** and **Message** — pre-written sales recap based on the session; edit freely before sending.
3. **Send email** — dispatches via the Snap Cloud edge function (see below).

Browsers cannot send email on their own. One-time setup:

| Item | Purpose |
|------|---------|
| **Customer email** | Collected in **Consent Settings** (recap opt-in checkbox + email field) |
| **Resend account** | Free tier works for demos — sign up at [resend.com](https://resend.com) |
| **Resend API key** | Dashboard → API Keys → create key |
| **Sender address** | A verified domain email, e.g. `PinPoint <recap@yourshowroom.com>` |

**Resend testing without a custom domain:** Resend provides `onboarding@resend.dev` as the default sender, but on the free tier it only delivers to the email address on your Resend account. To email real customers, verify your showroom domain in Resend.

**Deploy the edge function to Snap Cloud:**

```bash
cd PinPoint_Web

# Set secrets on your Snap Cloud / Supabase project
supabase secrets set RESEND_API_KEY=re_xxxxxxxx
supabase secrets set RECAP_FROM_EMAIL="PinPoint <recap@yourdomain.com>"

# Deploy
supabase functions deploy send-session-recap
```

The function lives at [`supabase/functions/send-session-recap/index.ts`](supabase/functions/send-session-recap/index.ts).

**Send recap to customer** opens a short cover-note composer. The full visit recap is attached as a PDF (same file as **Export PDF**). Deploy the edge function to deliver email + attachment.

## Design system

Built on the Kitchen Precision design system — Navy Slate primary (#131b2e), Vibrant Teal accent (#006a61) on a cool gray canvas. Manrope for headlines, Inter for body. Designed for iPad landscape use with 44pt minimum touch targets and no hover-only affordances.

## Stack notes

- Single HTML file. No build, no framework.
- All interactions are vanilla JS.
- All product/capture imagery is inline SVG (no image fetches).
