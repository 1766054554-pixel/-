# GitHub 发布检查清单

把星光学习岛发布到 GitHub 前，按这张清单走。

当前仓库已经确定为 `https://github.com/1766054554-pixel/-.git`。如果只想看最后推送步骤，先读 `docs/publish_now.md`。

## 1. 仓库准备

- 仓库名建议：`starlight-study-island`
- 公开说明：使用 `README.md`
- 协议：保留 `LICENSE`
- GitHub Pages：保留 `.nojekyll`

## 2. 发布文件

应该提交：

- `index.html`
- `product_intro.html`
- `start_here.html`
- `data/starlight_manifest.js`
- `focus_dual_exam_game.html`
- `final_two_subject_command_center.html`
- `final_two_wrong_review.html`
- `progress_vault.html`
- `release_status.html`
- `course.html`
- `dashboard.html`
- `practice_lab.html`
- `resources.html`
- `course_pack_builder.html`
- `quality_board.html`
- `data/resource_catalog.js`
- `data/resource_quality.js`
- `discrete_*` 和 `marx_*` 精品学习页
- `docs/`
- `CHANGELOG.md`
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/`
- `assets/`
- `site.webmanifest`
- `service-worker.js`
- `404.html`
- `offline.html`
- `robots.txt`
- `assets/brand/icon.svg`
- `assets/brand/hero-study-island.png`
- `README.md`
- `package.json`
- `scripts/validate_static_site.mjs`
- `.github/workflows/static-check.yml`
- `.github/workflows/pages.yml`
- `CONTRIBUTING.md`
- `LICENSE`

不建议提交：

- 本地私人路径记录
- 原始抓取日志
- 未校对的资料全文
- 临时构建脚本和调试输出

当前 `.gitignore` 已经默认忽略这些内容。

## 3. 发布前验证

在项目根目录运行：

```bash
npm run validate
```

这条命令会检查脚本语法、本地链接、首页关键分区、课程岛是否接入资源目录、资源库是否有主线/质量筛选、新手向导/训练台/仪表盘是否读取质量层、每个资源的质量元数据和公开文件中的本机私有路径。

然后手动打开：

- `index.html`
- `start_here.html`
- `focus_dual_exam_game.html`
- `progress_vault.html`
- `release_status.html`
- `course.html?id=ai`
- `course.html?id=software-engineering`
- `course.html?id=military`
- `practice_lab.html`
- `discrete_hiji_ingest/discrete_hiji_pastpaper_hub.html`
- `marx_openbook_final_sprint.html`
- `resources.html`
- `dashboard.html`
- `course_pack_builder.html`
- `quality_board.html`
- `final_two_wrong_review.html`
- `operating_system/index.html`
- `product_intro.html`

同时检查：

- `CHANGELOG.md` 是否记录本次版本变化。
- `.github/ISSUE_TEMPLATE/` 是否包含 Bug、内容纠错和课程包请求模板。
- `.github/pull_request_template.md` 是否提醒贡献者更新资源目录和质量元数据。
- `site.webmanifest`、`service-worker.js`、`404.html`、`offline.html`、`robots.txt` 和品牌图标是否保留，确保发布后有应用图标、错误路径兜底和离线兜底。

## 4. GitHub Pages 设置

1. 进入 GitHub 仓库 Settings。
2. 打开 Pages。
3. Source 推荐选择 `GitHub Actions`。
4. 推送到 `main` 后，`Deploy GitHub Pages` 工作流会自动运行。
5. 工作流会先执行 `npm run validate`，通过后再部署静态页面。
6. 部署完成后，在 Pages 或 Actions 页面复制公开访问链接。

当前仓库推荐公开地址：

- 主站：`https://1766054554-pixel.github.io/-/`
- 产品介绍页：`https://1766054554-pixel.github.io/-/product_intro.html`

仓库已内置两条工作流：

- `.github/workflows/static-check.yml`：推送到 `main` 或提交 PR 时自动执行 `npm run validate`，作为质量门槛。
- `.github/workflows/pages.yml`：推送到 `main` 或手动触发时执行静态检查并部署 GitHub Pages。

如果暂时不想使用 Actions 部署，也可以把 Pages Source 改成 `Deploy from a branch`，Branch 选择 `main`，目录选择 `/root`。

## 5. 简历展示顺序

1. 产品介绍页：展示沉浸式星图、层叠产品卡、互动演示视角和开源路线。
2. 首页：说明真实学习入口和主线。
3. 新手上岛向导：展示第一次打开如何生成三步路线。
4. 星光海岛小游戏：展示交互体验。
5. 全科课程入口：展示数据库、AI、软工、军理、离散、马原、操作系统如何被统一组织。
6. 真题训练台：展示按科目、题型和训练动作收束练习入口。
7. 交互真题舱：展示真实题型、即时反馈和大题逐步解析。
8. 精品资源库和继续学习仪表盘：展示全科资源筛选、完成打勾、今日学习包和下一步建议。
9. 课程包生成器：展示开源后如何低成本新增课程。
10. 内容质量看板：展示如何持续校对内容质量和维护备注。
11. GitHub 协作外壳：展示 Issue 模板、PR 模板、CHANGELOG、Actions 和维护者发布手册。
12. 星光存档室与发布检查台：展示本地状态管理、导入导出、全科覆盖检查和开源质量门槛。
