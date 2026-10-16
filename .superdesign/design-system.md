# Design System — 光阴相册

Warm, intimate Chinese photography portfolio for travel / daily life / baby growth. Public personal album site. Mood: soft paper, slow light, family journal — never cold, corporate, or high-contrast tech.

## Product pages in scope
1. **Home albums** — hero + album card grid
2. **Album detail** — title, description, photo gallery grid
3. **About** — first-person prose「关于我」

## Brand voice
- Chinese UI throughout
- Soft, personal, reflective copy (already in content)
- Site name: **光阴相册**
- Author: YJiang · footer `© YJiang`

## Color system (LOCKED — use only these)
| Role | Hex | CSS token |
|---|---|---|
| Cream background | `#fbf6ee` | `--surface-1` |
| Warm card / paper secondary | `#efe4d3` | `--surface-2` |
| Coffee primary text | `#4a3b30` | `--text-1` |
| Muted warm gray text | `#8c7563` | `--text-2` |
| Soft border | `#dccbb4` | `--border` |
| Terracotta accent | `#c0714f` | `--accent` |

Do **not** introduce cool blues, pure black, neon, or dark-mode skins in redesign branches unless explicitly asked. Keep cream / coffee / terracotta.

## Typography
- **Primary**: `"Noto Serif SC", "Noto Serif CJK SC", "Source Han Serif SC", "Songti SC", "STSong", Georgia, serif`
- Body line-height ~1.75; letter-spacing ~0.02em
- Headings: medium weight (~500), slightly wider tracking (~0.06em)
- Chinese readability first: prefer slightly larger type than typical English UI when exploring intimate/journal directions

## Layout & spacing
- Generous whitespace / cream breathing room
- Desktop home: horizontal row of album cards (3 albums)
- Centered hero title + short description
- Soft, calm vertical rhythm — editorial but not sparse-to-empty

## Imagery
- Soft rounded photos (`border-radius` ≈ 6px or slightly softer in redesigns)
- Warm photo framing — slight paper/mat feel allowed in branches
- Album cards: large cover image + title +「N 张照片」
- Never crop faces harshly; prefer calm, full-bleed covers with gentle radius

## Components to preserve visually
- **Header**: site title left, menu affordance right
- **Home hero**:「光阴相册」+ description
- **Album cards**: cover + title + count
- **Gallery grid**: rounded thumbnails
- **Footer**: copyright +「关于我」

## Fidelity constraint for iterations
When branching redesigns, use **ONLY** this design-system’s fonts, colors, and spacing language. Variations may change hierarchy, card refinement, texture feel, and type scale within the warm intimate system — not the palette identity.
