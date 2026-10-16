# Routes — 光阴相册 (Hugo content routes)

| URL | Content file | Renders | Layout |
|---|---|---|---|
| `/` | `content/_index.md` | Home: hero + album cards (宝宝成长 / 生活 / 旅行) | Theme home |
| `/about/` | `content/about.md` | About prose page「关于我」 | Theme single page |
| `/baby/` | `content/baby/index.md` + images | Album「宝宝成长」(4 photos) | Theme album |
| `/life/` | `content/life/index.md` + images | Album「生活」(4 photos) | Theme album |
| `/travel/` | `content/travel/index.md` + images | Album「旅行」(5 photos) | Theme album |

Taxonomies disabled (`disableKinds = ["taxonomy"]`).

## Key page summaries
- **Home `/`**: Title「光阴相册」, description「把走过的路、平常的日子，和宝宝一点点长大的样子，都好好收起来。」, three album cover cards ordered by weight (宝宝成长 → 生活 → 旅行).
- **Album detail**: Title, description, photo count, responsive image grid / lightbox.
- **About `/about/`**: First-person intro by YJiang; warm intimate tone; placeholder note at end.
