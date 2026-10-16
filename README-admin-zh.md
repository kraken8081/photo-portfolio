# Sveltia CMS 后台说明

后台入口：本地 `http://localhost:1313/admin/`（建议带上 `index.html`：`/admin/index.html`）。

配置与脚本位于 `static/admin/`（Hugo 会原样拷到站点根下的 `/admin/`）。

## 本地使用（无需 GitHub）

Sveltia **不支持** `git-gateway` / Netlify Identity，也**不需要** `decap-server` 代理。本地靠浏览器的 File System Access API 直接读写仓库文件。

1. 启动站点：`hugo server --bind 0.0.0.0`
2. 用 **Chrome / Edge / Brave**（Chromium）打开 `http://localhost:1313/admin/`
3. 点击 **「Work with Local Repository」**，选择本项目根目录（含 `.git` 的那一层，即 `photo-portfolio`）
4. 编辑「旅行 / 生活 / 宝宝成长」三个相册：改标题、日期、权重、简介、私密开关、正文
5. 在对应相册里上传 **JPG**（不要用 WebP；HEIC 请先转 JPG）。图片会写到 `content/travel|life|baby/`，与 `index.md` 同目录
6. **设封面**：在相册编辑页的「图片资源 / 封面」列表中新增一项 → 用「图片」从本相册选一张 → 勾选「设为封面」。可选「标题」「隐藏」（隐藏后只作封面、不进画廊）。不设则主题用文件夹里第一张图。对应 `index.md` 里 Hugo 的 `resources:` / `params.cover`
7. 回到 `http://localhost:1313/` 预览；满意后用 Git 自行 commit（可选：CMS 设置里打开「Commit Changes to Git」让每次保存自动本地提交）

说明：

- 界面语言跟浏览器走；浏览器设为简体中文即可，也可在 CMS 设置里选手动语言。配置里的 `locale: zh-CN` 会被忽略。
- Firefox / Safari 暂不支持本地仓库工作流。
- 若提示 “not a repository root directory”，请确认选中的是含 `.git` 的项目根。

## 以后接 GitHub（远程编辑）

1. 把本仓库推到 GitHub，例如 `yjiang/photo-portfolio`
2. 编辑 `static/admin/config.yml`：
   ```yaml
   backend:
     name: github
     repo: 你的用户名/仓库名   # 改成真实 owner/repo
     branch: main
   ```
3. 按官方文档配置 GitHub OAuth（或使用文档推荐的方式）：https://sveltiacms.app/en/docs/backends/github
4. 部署站点后，打开 `https://你的域名/admin/`，用 **「Log in with GitHub」** 登录即可远程改内容并提交到仓库。

本地仍可继续用「Work with Local Repository」，不必先登录 GitHub。

## 用 Fine-grained PAT 登录（Sign In with Token）
1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token。
2. Repository access 选 “Only select repositories” → `kraken8081/photo-portfolio`。
3. Permissions → Repository permissions → **Contents: Read and write**（Metadata 只读会自动勾上），其它不选。设置过期时间。
4. 打开已部署站点的 `/admin/`（或本地 `hugo server` 后的 http://localhost:1313/admin/），点「Sign In with Token」，粘贴 token。
5. Token 只保存在本浏览器中；切勿提交到仓库。泄露时到同一页面立即 Revoke。
