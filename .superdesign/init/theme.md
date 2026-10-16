# Theme tokens — 光阴相册

## Part 1 — Compact token summary

### Colors
| Token | Value | Role |
|---|---|---|
| `--surface-1` / cream | `#fbf6ee` | Page background |
| `--surface-2` | `#efe4d3` | Card / placeholder surface |
| `--text-1` / coffee | `#4a3b30` | Primary text |
| `--text-2` | `#8c7563` | Secondary / muted text |
| `--border` | `#dccbb4` | Borders |
| `--accent` / terracotta | `#c0714f` | Links hover, underline accent |

Light-only (`defaultTheme = "light"`, `color-scheme: light`).

### Typography
- **Family**: `"Noto Serif SC", "Noto Serif CJK SC", "Source Han Serif SC", "Songti SC", "STSong", Georgia, serif`
- **Body**: line-height `1.75`, letter-spacing `0.02em`
- **Headings / header links**: weight `500`, letter-spacing `0.06em`

### Radii & imagery
- `main img { border-radius: 6px; }` — soft rounded photos
- Album covers are large rectangular images with rounded corners

### Spacing / mood
- Generous whitespace (intimate photography portfolio)
- Warm cream/coffee/terracotta only — no cool blues or high-contrast black

## Part 2 — Raw source dumps

### Full `assets/css/custom.css`

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

### Full relevant `hugo.toml`

```toml
baseURL = "http://localhost:1313/"
title = "光阴相册"
copyright = "© YJiang"
defaultContentLanguage = "zh"
languageCode = "zh-CN"
hasCJKLanguage = true
disableKinds = ["taxonomy"]
enableRobotsTXT = true
timeZone = "Asia/Shanghai"
timeout = "120s"

[params]
  defaultTheme = "light"
  title = "光阴相册"
  description = "旅途、日常与宝宝慢慢长大的样子"
  [params.author]
    name = "YJiang"

[outputs]
  home = ["HTML", "RSS"]
  page = ["HTML"]
  section = ["HTML"]

[imaging]
  quality = 80
  resampleFilter = "CatmullRom"
  [imaging.exif]
    disableDate = false
    disableLatLong = true
    includeFields = "ImageDescription|Orientation"

[module]
  [module.hugoVersion]
    min = "0.123.0"
  [[module.imports]]
    path = "github.com/nicokaiser/hugo-theme-gallery/v4"

[menu]
  [[menu.main]]
    name = "关于我"
    pageRef = "/about"
    weight = 10
```

Theme module (not local): `github.com/nicokaiser/hugo-theme-gallery/v4` @ v4.9.3.
