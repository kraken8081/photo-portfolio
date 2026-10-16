# Extractable components — 光阴相册

## Summary
**None for Superdesign DraftComponent extraction.**

This is a Hugo static site. UI is provided by the remote Hugo module theme `github.com/nicokaiser/hugo-theme-gallery/v4` plus a CSS override (`assets/css/custom.css`). There are no local React/Vue/Svelte component source files to extract as Petite-Vue DraftComponents.

## Theme-level patterns (document only — do not extract)
| Name | Category | Notes |
|---|---|---|
| SiteHeader | layout | Theme header: title + hamburger |
| SiteFooter | layout | Copyright + footer menu |
| AlbumCard | basic | Cover image + title + photo count |
| GalleryGrid | basic | Album photo thumbnails |
| HomeHero | layout | Centered title + description |

When designing in Superdesign, recreate these visually in draft HTML (Tailwind) using design-system tokens; do not call `create-component` unless the user later asks for reusable draft components.
