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
   - In summary mode, click **Send recap to customer** or **Open Customer Profile** for the next-step actions.

2. **Customer Profiles** — Catalog of customers with search and a sticky list. Sylvan's full lifetime profile is wired up; other customers show a placeholder toast on click.

3. **Showroom Insights** — Aggregated reactions for one product (Nobilia Senso) across the showroom: themes, sentiment, reaction stream.

4. **Consent Settings** (System) — Privacy consent form and registry table. Click **+ New consent form** for a walk-in customer, or select an existing row. Check consent, sign, and **Save consent**. Use **Delete consent** to remove a saved form or walk-in entry. Saved email flows into **Send recap** on the session summary.

## Design system

Built on the Kitchen Precision design system — Navy Slate primary (#131b2e), Vibrant Teal accent (#006a61) on a cool gray canvas. Manrope for headlines, Inter for body. Designed for iPad landscape use with 44pt minimum touch targets and no hover-only affordances.

## Stack notes

- Single HTML file. No build, no framework.
- All interactions are vanilla JS.
- All product/capture imagery is inline SVG (no image fetches).
