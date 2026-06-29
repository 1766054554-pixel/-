# Architecture

星光学习岛是一个纯静态学习平台。它没有后端数据库，核心能力来自三层：公开页面、共享数据清单和浏览器本地状态。

## 1. 学生路径

学生默认路径尽量短：

```text
index.html
  -> start_here.html
  -> course.html?id=<course-id>
  -> practice_lab.html / resources.html / dashboard.html
```

- `index.html`：产品首页，只负责解释平台价值、课程入口、资料库入口和进度入口。
- `start_here.html`：第一次打开时的路线生成器。
- `course.html`：单科课程岛，读取课程清单和资源清单，显示本课路线、筛选和完成状态。
- `practice_lab.html`：训练入口，围绕真题、专项补洞和错题回炉。
- `resources.html`：全量精品资源库，负责搜索、筛选和标记完成。
- `dashboard.html`：继续学习仪表盘，读取本地状态给出下一步建议。
- `progress_vault.html`：导入、导出和清理本地学习状态。

学生页面不需要理解仓库结构；维护页和文档不进入首页主路径。

## 2. 数据层

平台的主数据在 `data/` 目录：

- `data/starlight_manifest.js`：产品清单。负责课程、首页功能、推荐流和产品版本。
- `data/resource_catalog.js`：资源清单。每一条资源都有 `id`、`courseId`、`type`、`stage`、`priority`、`title`、`description`、`href` 和 `tags`。
- `data/resource_quality.js`：资源质量层。每个资源必须有 `level`、`source`、`next` 和 `updated`。

质量等级含义：

- `exam-like`：真题或高度贴近期末题型，适合放进主线。
- `reviewed`：人工校对过，适合公开试用。
- `draft`：初稿，不能直接作为主线承诺。
- `archive`：历史或维护材料，默认不进入学生路径。

新增资源必须同时维护 `resource_catalog.js` 和 `resource_quality.js`。`npm run validate` 会检查是否缺少质量元数据。

## 3. 本地状态

平台使用 `localStorage` 保存学习进度。重要 key：

- `starlight-resource-done-v1`：资源库和课程岛共用的完成状态。
- `starlight-start-route-v1`：新手向导生成的路线。
- `starlight-today-plan-v1`：仪表盘今日学习包。
- `starlight-quality-audit-v1`：质量看板的本地巡检备注。
- `starlight-course-pack-draft-v1`：课程包生成器草稿。

历史交互卷有一些旧 key，例如 `discrete-hiji-2024`。新增模块建议使用：

```text
starlight:<course-id>:<module-id>:<state-name>
```

这样未来更容易聚合错题、导出学习记录和做课程包迁移。

## 4. 页面分类

学生主路径页面：

- `index.html`
- `start_here.html`
- `course.html`
- `practice_lab.html`
- `resources.html`
- `dashboard.html`
- `focus_dual_exam_game.html`
- `progress_vault.html`

维护和发布页面：

- `release_status.html`
- `course_pack_builder.html`
- `quality_board.html`
- `exam_coverage_control_board.html`
- `source_coverage_audit.html`
- `pastpaper_ingestion_radar.html`

课程内容页面：

- `day*.html`
- `db_*.html`
- `ai_*.html`
- `se_*.html`
- `discrete_*.html`
- `marx_*.html`
- `military_*.html`
- `operating_system/*.html`

课程内容页可以风格不同，但必须符合 `docs/content_quality_rubric.md` 的内容质量要求。

## 5. 发布外壳

发布到 GitHub Pages 时，以下文件共同构成应用外壳：

- `site.webmanifest`：安装信息和快捷入口。
- `assets/brand/icon.svg`：浏览器图标和安装图标。
- `assets/brand/hero-study-island.png`：首页主视觉和分享预览图。
- `service-worker.js`：缓存核心入口页，提供轻量离线兜底。
- `offline.html`：离线提示。
- `404.html`：访问错误路径时回到首页、资源库和训练台。
- `robots.txt`：允许公开索引。

`service-worker.js` 只会在安全上下文中注册；直接用 `file://` 打开时不会注册。

## 6. 发布和校验

发布前运行：

```bash
npm run validate
```

校验内容包括：

- HTML 内联脚本和 JS 文件能否解析。
- 本地链接、图片和数据引用是否存在。
- 首页是否保留学生主路径入口。
- 课程岛、资源库、训练台、仪表盘是否接入质量层。
- 每个资源是否有质量元数据。
- 产品外壳文件是否存在并互相引用正确。
- GitHub Actions、Issue 模板、PR 模板和发布手册是否存在。
- 公开文件里是否混入本机绝对路径或临时附件路径。

GitHub Pages 推荐使用 `.github/workflows/pages.yml` 自动部署。推送到 `main` 后，工作流会先执行 `npm run validate`，通过后再发布。

## 7. 扩展课程

新增课程的推荐顺序：

1. 用 `course_pack_builder.html` 生成课程片段和资源片段。
2. 把课程片段加入 `data/starlight_manifest.js`。
3. 把资源片段加入 `data/resource_catalog.js`。
4. 给每个资源在 `data/resource_quality.js` 补质量元数据。
5. 新建对应 HTML 学习页。
6. 按 `docs/content_quality_rubric.md` 校对内容。
7. 更新 `docs/source_notes.md` 和 `CHANGELOG.md`。
8. 运行 `npm run validate`。

扩展时优先保证路线清楚，不要把所有材料直接堆到首页。首页只放入口，课程岛和资源库负责承载完整内容。
