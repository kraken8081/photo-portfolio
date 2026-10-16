# 光阴相册 · 使用说明

基于 Hugo + [hugo-theme-gallery](https://github.com/nicokaiser/hugo-theme-gallery)（MIT 许可，以 Hugo Module 方式引入，不修改主题文件）。
需要：Hugo Extended ≥ 0.123（当前使用 0.168.0）、Go、Git。

## 目录结构
```
hugo.toml               站点配置（标题、语言 zh-CN、菜单）
assets/css/custom.css   暖色样式（奶油底色、咖啡色文字、陶土色强调、衬线字体）
static/admin/           Sveltia CMS 后台（index.html + config.yml）
content/
  _index.md             首页标题与简介
  about.md              「关于我」页面
  travel/  index.md + 照片    旅行
  life/    index.md + 照片    生活
  baby/    index.md + 照片    宝宝成长
PHOTO_SOURCES.md        占位图片来源（Picsum/Unsplash，换成自己的照片后可删除）
```

## 添加自己的照片
1. **删掉占位图**：删除 `content/travel/`、`life/`、`baby/` 里的 `*.jpg`（保留 `index.md`）。
2. **放入照片**：把照片直接复制到对应文件夹，例如 `content/baby/2026-05-第一次走路.jpg`。
   - 用 JPG/PNG，**不要用 WebP**（主题已知会让颜色发灰）。iPhone 的 HEIC 请先导出为 JPG。
   - 建议长边 2000–3000 像素即可，Hugo 会自动生成缩略图。
   - 默认按文件名排序，可用日期开头命名；或在 index.md 中写 `params: {sort_by: Date}` 按拍摄时间排序。
3. **设置封面**：文件名包含 `feature` 的照片会自动作为封面（如 `feature.jpg`）；或在 `index.md` 中指定：
   ```yaml
   ---
   title: 宝宝成长
   date: 2026-09-03
   weight: 1                # 数字越小越靠前
   description: 第一次笑，第一次走路……
   resources:
     - src: 2026-05-第一次走路.jpg
       title: 一岁零两个月，第一次自己走路   # 大图浏览时显示的说明
       params:
         cover: true        # 设为封面
     - src: 封面专用.jpg
       params:
         cover: true
         hidden: true       # 只当封面，不在相册里显示
   ---
   ```
4. **新建相册**：新建文件夹 `content/新相册名/`，放一个 `index.md`（照上面写）和照片即可。想做二级相册（例如「旅行/2025 云南」），把 `travel/index.md` 改名为 `_index.md`，再在里面建子文件夹。
5. **隐私**：配置里已关闭 GPS 位置输出。宝宝照片如不想出现在首页，可在该相册 `index.md` 加 `params: {private: true}`（不列出，但知道链接的人仍可访问——真正私密请不要上传公开站点）。

## 本地预览与构建
```bash
cd /workspace/photo-portfolio
hugo server --bind 0.0.0.0     # 预览 http://localhost:1313，改文件自动刷新
hugo --gc --minify             # 生成正式站点到 public/ 目录
```
修改文字：首页简介在 `content/_index.md`，站点标题在 `hugo.toml` 的 `title`，颜色在 `assets/css/custom.css`。


## 内容后台（Sveltia CMS）
本地预览时打开 [http://localhost:1313/admin/](http://localhost:1313/admin/)（或 `/admin/index.html`）。

1. 先跑 `hugo server`，再用 **Chrome / Edge / Brave** 打开后台。
2. 点 **「Work with Local Repository」**，选本仓库根目录（含 `.git`）。
3. 在「相册」里编辑旅行 / 生活 / 宝宝成长；上传 **JPG** 会进对应 `content/.../` 文件夹。
4. 改完回首页预览，再用 Git 提交。详细步骤与以后接 GitHub 见 [README-admin-zh.md](./README-admin-zh.md)。

> Sveltia 不支持 git-gateway；本地不连远程也能用。推到 GitHub 后把 `static/admin/config.yml` 里的 `repo` 改成真实仓库，即可用「Log in with GitHub」远程编辑。

## 部署（简要）
- **GitHub Pages**：把本目录推到 GitHub 仓库 → Settings → Pages → Source 选 “GitHub Actions” → 使用 Hugo 官方工作流模板（参见 https://gohugo.io/hosting-and-deployment/hosting-on-github/）。记得把 `hugo.toml` 的 `baseURL` 改成 `https://你的用户名.github.io/仓库名/`。
- **Cloudflare Pages**（国内访问通常更快）：连接 GitHub 仓库，构建命令 `hugo --gc --minify`，输出目录 `public`，环境变量 `HUGO_VERSION=0.168.0`。
- 照片多时仓库会变大，单个仓库建议控制在 1GB 以内。
