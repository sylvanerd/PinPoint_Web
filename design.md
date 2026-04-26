---
name: Kitchen Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1440px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for the high-stakes environment of luxury kitchen showrooms, where tactile materiality meets digital precision. The brand personality is authoritative yet transparent, functioning as a sophisticated silent partner to the salesperson. 

The visual style follows a **Modern/Minimalist** approach with subtle **Corporate** influences. It prioritizes high-density information display without overwhelming the user, utilizing generous white space to allow high-resolution kitchen photography to serve as the primary visual anchor. The interface recedes to ensure that the client’s vision and the salesperson’s data remain the focal points.

## Colors
The palette is built on a foundation of high-contrast "Ink and Ice." The primary color is a deep, architectural **Navy Slate**, used for structural elements, primary navigation, and heavy typography to convey stability and permanence. 

The secondary color is a **Vibrant Teal**, used sparingly as a functional accent for calls-to-action, status indicators, and interactive highlights. This color was chosen for its association with modern precision and cleanliness. The background utilizes a very light cool gray to reduce screen glare during long consultation sessions, while pure white is reserved for high-priority data containers.

## Typography
This design system utilizes a dual-font strategy to balance character with utility. **Manrope** is used for headlines to provide a modern, geometric, and slightly architectural feel that aligns with kitchen design. 

**Inter** is utilized for all body copy, data points, and interface labels. Its neutral, systematic nature ensures maximum legibility in complex spreadsheets and technical specification lists. Letter spacing is tightened slightly for large headlines to maintain a "locked-in" professional look, while labels use slightly increased tracking for clarity at small sizes.

## Layout & Spacing
The layout employs a **Fixed Grid** model for the main dashboard content to ensure consistency across different laptop displays used in showrooms. It centers on a 12-column system with a 24px gutter, providing a structured framework for mixing wide-format image galleries with dense technical data.

Vertical rhythm is strictly maintained using a 4px baseline shift. Large margins (32px) are used around the primary viewport to create a "gallery" effect, preventing the UI from feeling cramped or cluttered during client presentations.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This maintains the "minimalist" aesthetic and keeps the focus on the product images.

1.  **Base Layer:** The light gray canvas (#F8FAFC).
2.  **Surface Layer:** White cards (#FFFFFF) with a 1px border (#E2E8F0).
3.  **Active State:** Subtle, extra-diffused shadows (0px 4px 12px rgba(15, 23, 42, 0.05)) are used only for floating elements like dropdowns or active modals to suggest they are temporarily "hovering" over the workspace.

## Shapes
The shape language is **Soft (Level 1)**. This subtle rounding (4px for standard components) mirrors the precision edges of high-end cabinetry and stone countertops—not sharp enough to be aggressive, but not rounded enough to feel consumer-grade or playful. 

Buttons and input fields follow this 4px standard, while larger "Project Cards" may use an 8px radius (rounded-lg) to provide a gentle container for photography.

## Components
- **Buttons:** Primary buttons use the Navy Slate background with white text for maximum authority. Secondary actions use the Teal accent for high-visibility interactive paths.
- **Chips:** Used for "Material Status" or "Stock Level." These use a light tint of the accent color with bold label-sm typography.
- **Lists:** Data-heavy lists use alternating row highlights (Zebra striping) in the neutral background color to guide the eye across technical specifications.
- **Input Fields:** Minimalist design with a 1px Slate border that thickens and changes to Teal on focus. Labels are always positioned above the field for clarity.
- **Project Cards:** The core component. These feature a large image header, a Navy Slate title, and a small Teal "Status" indicator in the top right.
- **Notes Component:** A dedicated "Pinboard" style area using a monospaced font variant for a "technical draft" feel, allowing salespeople to quickly jot down client preferences.

## Platform: iPad (Web Portal)
The salesperson dashboard is a web portal used primarily on iPad in landscape. Design for touch; mouse and trackpad work automatically. Keep it simple: standard responsive web layout, a persistent left sidebar for navigation, and a content area to the right.

**Basics.** Touch targets at least 44x44pt. Don't rely on hover-only UI (tooltips, hover reveals, row highlights that only appear on hover) since those don't exist on touch. Replace with always-visible affordances or explicit taps/clicks. Default browser scrolling is fine.

**Sidebar.** Always visible in landscape, holds primary nav (Live Sessions, Customers, Catalog, Settings). In portrait, it can collapse to icons or a drawer if needed, but landscape is the only orientation that has to feel right.

That's the whole rule. Don't optimize beyond this until the portal proves it's worth keeping.