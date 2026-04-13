# Design Brief: OneSales

## Tone
Refined minimalism with corporate elegance. Professional, trustworthy, transparent — no playful elements.

## Differentiation
Clean grid-based layouts with ample whitespace. Deep blue hero with white text overlay. Strategic use of secondary blue for CTAs. Card-based property showcase with subtle shadows. Typography hierarchy drives credibility.

## Color Palette

| Token | OKLCH | Hex* | Usage |
|-------|-------|------|-------|
| Primary | 52.5 21.5 258 | #003A7A | Headlines, CTAs, active states |
| Secondary | 78 12 260 | #A8D5FF | Highlights, soft accents |
| Foreground | 25 0 0 | #404040 | Body text |
| Background | 98 0 0 | #FAFAFA | Main surface |
| Muted | 88 0 0 | #E1E1E1 | Borders, dividers |
| Success | 68 18 142 | #2D7C3A | Positive actions |
| Destructive | 55 22 25 | #B73C1C | Errors, warnings |

*Hex values are approximate conversions for reference only.

## Typography
- **Display**: BricolageGrotesque (geometric, professional, bold headlines)
- **Body**: GeneralSans (clean, highly legible, enterprise-trusted)
- **Mono**: System monospace (data tables, structured content)

## Structural Zones
| Zone | Background | Border | Shadow | Purpose |
|------|-----------|--------|--------|---------|
| Header | White (card) | Subtle grey (border) | None | Navigation, logo, CTA |
| Hero | Deep blue (primary) | None | None | Impact headline with white text |
| Content | White (background) | None | None | Main copy sections |
| Alternate | Light grey (muted/5%) | None | None | Visual breathing room |
| Cards | White (card) | Subtle grey (border) | Subtle on hover | Property cards, service cards |
| Footer | Charcoal (foreground) | None | None | Footer links, copyright |

## Spacing & Rhythm
Generous whitespace. Section padding: 4–6rem vertical. Card grid gap: 1.5–2rem. Internal card padding: 1.5–2rem. Button/input padding: 0.875–1rem.

## Component Patterns
- **Buttons**: Primary (deep blue), secondary (light blue), outline (border + text)
- **Cards**: White surface, subtle grey border, `rounded-lg` (8px)
- **Forms**: Rounded inputs, focus state on primary ring, validation with success green
- **Navigation**: Horizontal links with underline on active, CTA button right-aligned

## Motion
Smooth transitions on all interactive elements (`transition-smooth`). Subtle shadow elevation on card hover. No bouncy animations — all cubic-bezier easing for professional feel.

## Constraints
- **Light mode only** — no dark mode toggle
- **No gradients on text** — only solid colors
- **No excessive shadows** — maximum 2 shadows in hierarchy
- **Accessible color contrast** — all text meets WCAG AA+
- **Semantic CSS only** — no arbitrary color classes

## Signature Detail
White text on deep blue hero hero section creates trust through high contrast. Strategic use of secondary light blue on buttons draws eye without overwhelming. Generous padding and spacing convey luxury and transparency.
