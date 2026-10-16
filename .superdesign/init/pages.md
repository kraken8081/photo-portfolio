# Pages — dependency trees (Hugo)

UI is theme templates (remote module) + content Markdown + `assets/css/custom.css`. There are no local `.tsx`/Vue page components. Trees list content + site assets that define each page.

## / (Home — 光阴相册首页)
Entry: `content/_index.md`
Dependencies:
- `hugo.toml` (title, params, menu, theme import)
- `assets/css/custom.css` (warm palette + serif)
- Theme home template (hugo-theme-gallery module — not local)
- Album sections contributing cards:
  - `content/baby/index.md` (+ cover image among baby-*.jpg)
  - `content/life/index.md` (+ life-*.jpg)
  - `content/travel/index.md` (+ travel-*.jpg, travel-1.jpg marked cover)
- Screenshots ground truth: `screenshots/home.png`

Home front matter:
```yaml
title: 光阴相册
description: 把走过的路、平常的日子，和宝宝一点点长大的样子，都好好收起来。
menus:
  main:
    name: 首页
    weight: -1
```

Renders: header, centered hero title + description, 3 album cards (宝宝成长 4张 / 生活 4张 / 旅行 5张), footer © YJiang + 关于我.

## /travel/ (Album detail — 旅行)
Entry: `content/travel/index.md`
Dependencies:
- `assets/css/custom.css`
- Theme album template (module)
- Images: `travel-1.jpg` … `travel-5.jpg`
- Screenshot: `screenshots/album-travel.png`

## /life/ (Album — 生活)
Entry: `content/life/index.md`
Dependencies:
- `assets/css/custom.css`
- Theme album template
- Images: `life-1.jpg` … `life-4.jpg`

## /baby/ (Album — 宝宝成长)
Entry: `content/baby/index.md`
Dependencies:
- `assets/css/custom.css`
- Theme album template
- Images: `baby-1.jpg` … `baby-4.jpg`

## /about/ (关于我)
Entry: `content/about.md`
Dependencies:
- `assets/css/custom.css`
- Theme single-page template
- Screenshot: `screenshots/about.png`

About body: first-person intro by YJiang about travel / daily life / baby photos; soft closing line; placeholder note.
