# Layouts — 光阴相册

Layout HTML lives inside the Hugo module theme `github.com/nicokaiser/hugo-theme-gallery/v4` (not checked into this repo). Site overrides are CSS-only via `assets/css/custom.css`.

## App shell (theme)

Typical page chrome observed from screenshots / built `public/`:

1. **Header**
   - Left: site title link「光阴相册」
   - Right: hamburger menu (opens「首页」「关于我」)
2. **Main**
   - Home: hero title + description, then album card row
   - Album: album title, description, photo grid
   - About: page title + prose
3. **Footer**
   - Centered: `© YJiang` and footer link「关于我」

## Site config driving chrome — `hugo.toml` (relevant excerpts)

```toml
baseURL = "http://localhost:1313/"
title = "光阴相册"
copyright = "© YJiang"
defaultContentLanguage = "zh"
languageCode = "zh-CN"
hasCJKLanguage = true

[params]
  defaultTheme = "light"
  title = "光阴相册"
  description = "旅途、日常与宝宝慢慢长大的样子"
  [params.author]
    name = "YJiang"

[menu]
  [[menu.main]]
    name = "关于我"
    pageRef = "/about"
    weight = 10
```

Home menu entry comes from `content/_index.md` front matter (`menus.main.name: 首页`).

## Visual layout rules (from custom.css + screenshots)
- Cream page background `#fbf6ee`
- Coffee body text `#4a3b30`, muted secondary `#8c7563`
- Terracotta accent `#c0714f` on link underline / hover
- Serif CJK body (`Noto Serif SC` stack), generous line-height 1.75
- Images in `main` have `border-radius: 6px`
- Generous whitespace; single-row album cards on desktop home
