# Components — 光阴相册 (Hugo static site)

## Framework
- **Static site generator**: Hugo Extended (≥ 0.123; site uses 0.168.0)
- **Theme**: `github.com/nicokaiser/hugo-theme-gallery/v4` v4.9.3 (Hugo Module, **not vendored locally**)
- **CSS approach**: Theme CSS + site override `assets/css/custom.css` (warm cream/coffee/terracotta palette)
- **UI language**: Chinese (`zh-CN`, `hasCJKLanguage = true`)
- **No React/Vue/Svelte components** — all UI is rendered by the Hugo theme templates + Markdown content

## Shared UI primitives

There are **no local component source files**. Visual UI comes from the remote theme module. Site-level visual customization is entirely in:

### Site CSS override — `assets/css/custom.css`

```css
/* 暖色主题覆盖：覆盖主题的 assets/css/custom.css（不修改主题文件） */
:root, html.light {
  color-scheme: light;
  --surface-1-light: #fbf6ee;   /* 奶油色背景 */
  --surface-2-light: #efe4d3;   /* 占位/卡片底色 */
  --text-1-light: #4a3b30;      /* 深咖啡色正文 */
  --text-2-light: #8c7563;      /* 暖灰辅助文字 */
  --border-light: #dccbb4;
  --accent: #c0714f;            /* 陶土色强调 */
  --surface-1: var(--surface-1-light);
  --surface-2: var(--surface-2-light);
  --text-1: var(--text-1-light);
  --text-2: var(--text-2-light);
  --border: var(--border-light);
}
body {
  font-family: "Noto Serif SC", "Noto Serif CJK SC", "Source Han Serif SC", "Songti SC", "STSong", Georgia, serif;
  line-height: 1.75;
  letter-spacing: 0.02em;
}
h1, h2, h3, header a { font-weight: 500 !important; letter-spacing: 0.06em; }
a { color: var(--text-1); text-decoration-color: var(--accent); }
a:hover { color: var(--accent); }
main img { border-radius: 6px; }
```

### Theme-provided UI patterns (from nicokaiser/hugo-theme-gallery, not local source)
| Pattern | Role |
|---|---|
| Site header | Logo/title left, hamburger menu right |
| Home hero | Centered site title + description |
| Album card grid | Cover image + album title + photo count |
| Album gallery grid | Photo thumbnails with lightbox |
| About page body | Prose content |
| Site footer | Copyright + footer menu links |

Reproduce designs against screenshots + `custom.css` tokens; do not invent component framework code.
