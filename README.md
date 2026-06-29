# 星光学习岛 Starlight Study Island

一个面向期末冲刺的治愈系学习陪跑平台。它把零基础讲义、互动闯关、真题训练、纸质开卷定位和错题回炉整合成一条清楚的学习路线。

当前内容以北航软件工程专业期末冲刺为样例，已整理出数据库、人工智能、软件工程、军事理论、离散数学、马克思主义基本原理和操作系统等课程入口。公开页面面向学生使用；仓库里的 `docs/` 用来说明产品设计、课程扩展和简历讲述，不直接打扰学习者。

## 为什么做它

传统复习资料常见的问题是：资料很多、路线很散、看完不会做题、错题没有回炉、刷题界面很像冷冰冰的软件。星光学习岛尝试把“考前救火”做成一个更像休闲小游戏的学习产品：

- 先用 3 题一段的轻闯关降低开始成本。
- 再用学科主线把知识点拆成题眼、第一动作和卷面表达。
- 最后用真题交互卷和错题宝箱完成回炉闭环。

## 当前发布版入口

打开 `index.html` 即可使用。想先看项目定位、产品能力和开源路线，可以打开 `product_intro.html`；它是面向访问者的沉浸式产品介绍页，学习主站仍从 `index.html` 进入。

新同学第一次打开可以先进入 `start_here.html` 新手上岛向导：选一门课和当前状态，系统会生成三步路线。也可以按首页的“课程入口”选择科目，每门课会进入统一的 `course.html?id=...` 课程岛；课程岛会读取资源目录，展示本课主线资源。想直接开始做题时，打开 `practice_lab.html`；想横向筛选全部精品资源时，打开 `resources.html`，它支持按主线/真题级/全部/维护资料、课程、阶段、类型、优先级和校对等级筛选；想继续上次进度时，打开 `dashboard.html`。学生主路径会读取 `data/resource_quality.js`，默认排除 archive 维护资料，并优先推荐 `exam-like` 和 `reviewed` 资源：

- 数据库：`db_2023a_full_interactive.html`
- 人工智能：`ai_reference_final_interactive.html`
- 软件工程：`se_official_final_interactive.html`
- 军事理论：`day8_military_closed_book_sprint.html`
- 离散数学：`discrete_hiji_ingest/discrete_hiji_pastpaper_hub.html`
- 马原：`marx_openbook_final_sprint.html`
- 操作系统：`operating_system/index.html`

维护者发布前可以打开 `release_status.html`，核对全科入口、必做资源、静态检查和 GitHub Pages 发布准备。新增课程时可以先用 `course_pack_builder.html` 生成课程清单和资源清单片段，再在 `data/resource_quality.js` 写入默认校对等级、来源依据和下一步改进点，最后用 `quality_board.html` 做本地巡检。开源协作流程见 `CONTRIBUTING.md`、`CHANGELOG.md`、`docs/architecture.md`、`docs/demo_script.md` 和 `docs/maintainer_release_guide.md`。它们都是维护侧内容，不替代学生首页。

完整推荐路线：

1. 第一次打开先用 `start_here.html` 新手上岛向导，选课程和当前状态。
2. 进入课程岛，看清这门课的考试形态、推荐路线和核心资源。
3. 打开 `practice_lab.html` 真题训练台，按“整卷校准、专项补洞、错题回炉”开始练题。
4. 打开 `dashboard.html` 继续学习仪表盘，查看上次向导路线、总进度、必做完成度、每科进度、下一步建议和今日学习包。
5. 打开 `resources.html` 精品资源库，按课程、类型、优先级筛选资源，并给完成项打勾。
6. 打开首页的“真题资源地图”，横向比较不同课程的资源和训练动作。
7. 需要熟悉考试样子时，优先进入对应交互真题卷。
8. 概念或大题起手卡住时，再回深学讲义、速查、闪卡或背诵舱。
9. 错题很多时，打开 `final_two_wrong_review.html` 或对应课程的回炉/闸门页面。
10. 换设备或发布演示时，用 `progress_vault.html` 导出、导入和清理本地学习进度。

## 本地检查

本项目是纯静态站，无需安装前端框架。发布前建议运行：

```bash
npm run validate
```

它会检查：

- HTML 内联脚本和数据清单是否能解析。
- 页面里的本地链接和图片是否存在。
- 首页是否仍保留全科课程入口和功能分区。
- 每个精品资源是否都有公开质量元数据。
- GitHub 协作模板、变更日志和维护者发布手册是否存在。
- 公开文件里是否混入本机绝对路径或临时附件路径。

## 产品特点

- 纯静态前端：HTML、CSS、JavaScript，无需后端。
- 沉浸式产品介绍页：`product_intro.html` 用星图背景、层叠产品卡、滚动叙事和互动演示视角讲清项目价值、课程覆盖、开源路线和学生路径。
- 本地进度记录：使用浏览器 localStorage 保存闯关、错题、真题和写作闸门。
- 新手上岛向导：`start_here.html` 根据课程和当前状态生成三步复习路线，并按资源质量层排除维护资料。
- 全科课程入口：把数据库、AI、软工、军理、离散、马原、操作系统统一成清楚的课程卡。
- 统一课程岛：`course.html` 根据课程清单动态生成单科中转页，避免新用户直接掉进旧材料堆里。
- 真题训练台：`practice_lab.html` 按科目、训练动作和关键词收束交互卷、真题包、专项补洞和错题回炉，优先真题级和已校对资源。
- 继续学习仪表盘：`dashboard.html` 读取新手路线、精品资源库完成状态和质量层，生成路线续航、下一步建议和每科进度。
- 发布检查台：`release_status.html` 核对七门课、必做资源、GitHub Pages 和 `npm run validate` 发布门槛。
- GitHub 协作模板：Issue 模板、PR 模板、CHANGELOG 和维护者发布手册，让后续同学能持续贡献。
- 产品级应用外壳：`site.webmanifest`、品牌图标、分享预览元信息、产品介绍页、`404.html`、`offline.html`、`robots.txt` 和 `service-worker.js` 让 GitHub Pages 发布后更像完整网页应用。
- 传播和展示：首页提供“分享给同学”入口，`docs/demo_script.md` 提供录屏、答辩和面试展示路线。
- 课程包生成器：`course_pack_builder.html` 帮贡献者生成课程清单和资源清单片段，降低新增课程成本。
- 内容质量看板：`quality_board.html` 按资源标注 draft、reviewed、exam-like 和 archive，记录待改进备注。
- 质量元数据：`data/resource_quality.js` 为每个资源保留默认等级、来源依据、下一步改进和更新时间。
- 今日学习包：在仪表盘选择可用时间、科目和目标，自动生成一组可执行资源任务。
- 精品资源库：`resources.html` 读取 `data/resource_catalog.js` 和 `data/resource_quality.js`，支持主线/真题级/全部/维护资料范围筛选、阶段筛选、质量筛选、搜索和本地完成打勾。
- 真题资源地图：按考试形态说明每科资源、训练动作和最推荐入口，降低新用户上手成本。
- 真题驱动：数据库、AI、软工、离散、操作系统等课程都接入了交互卷或真题化训练。
- 分科能力训练：开卷定位、闭卷背诵、CodeArts 画图、证明骨架、公式模型、SQL/范式和 OS 大题分步解析各自有入口。
- 可配置入口：`data/starlight_manifest.js` 管理首页主线和精品模块，方便后续扩展课程。
- 本地存档迁移：`progress_vault.html` 支持导出/导入星光学习记录，包括资源库完成状态、今日学习包偏好、闯关、真题、背诵和错题记录。

## 如何部署到 GitHub Pages

1. 新建一个 GitHub 仓库，例如 `starlight-study-island`。
2. 将本目录里的文件提交到仓库根目录。
3. 推送前运行 `npm run validate`。
4. 在 GitHub 仓库 Settings -> Pages 中，Source 选择 `GitHub Actions`。
5. 推送到 `main` 后，`.github/workflows/pages.yml` 会先运行静态检查，再自动发布站点。
6. 也可以在 Actions 页面手动触发 `Deploy GitHub Pages` 工作流。

仓库内同时包含 `.github/workflows/static-check.yml` 和 `.github/workflows/pages.yml`。前者用于 PR 和 push 的质量门槛；后者用于发布。若不想使用 Actions 部署，也可以在 Pages 设置中选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`。

## 后续路线

- 将题库和课程配置抽成 JSON，降低新增课程成本。
- 统一各模块视觉语言，减少旧期末救火痕迹。
- 给每道题补充质量字段：来源、考点、难度、题型、解析完整度。
- 增加可导入/导出错题包功能，方便同学之间共享。
- 增加移动端专注模式和每日任务卡。
- 为课程维护者提供“课程包生成器 -> 资料整理 -> 题卡生成 -> 内容质量看板 -> 人工校对 -> 发布”的内容工作流。

## 继续维护

- 新增首页入口：修改 `data/starlight_manifest.js`。
- 新增或调整课程岛：继续维护同一个 `data/starlight_manifest.js`，`course.html` 会自动读取。
- 调整课程岛资源：维护 `data/resource_catalog.js` 和 `data/resource_quality.js`，`course.html` 会自动展示本课非 archive 主线资源。
- 调整新手路线：维护 `data/starlight_manifest.js`、`data/resource_catalog.js` 和 `data/resource_quality.js`，`start_here.html` 会自动读取。
- 新增精品资源：修改 `data/resource_catalog.js`，并在 `data/resource_quality.js` 补充质量元数据，`resources.html` 会自动进入筛选列表。
- 调整训练入口：继续维护 `data/resource_catalog.js` 和 `data/resource_quality.js`，`practice_lab.html` 会自动读取非 archive 的可训练资源。
- 发布前检查：运行 `npm run validate`。
- 架构说明：阅读 `docs/architecture.md`，理解学生路径、数据层、质量层、本地状态和发布外壳。
- 产品展示：先打开 `product_intro.html` 讲项目定位，再阅读 `docs/demo_script.md`，按首页、课程岛、资源库、训练台、仪表盘和发布链路展示项目。
- 应用外壳检查：保留 `site.webmanifest`、`service-worker.js`、`404.html`、`offline.html`、`robots.txt` 和 `assets/brand/icon.svg`，它们会被静态校验纳入发布门槛。
- 迁移学习进度：打开 `progress_vault.html`。
- 发布前体检：打开 `release_status.html`。
- 新增课程包：先打开 `course_pack_builder.html`，再参考 `docs/course_pack_spec.md`。
- 内容校对：先维护 `data/resource_quality.js` 的公开默认状态，再打开 `quality_board.html` 记录本地巡检备注。
- 贡献内容：先阅读 `CONTRIBUTING.md`。
- 内容质量标准：参考 `docs/content_quality_rubric.md`。
- 资料来源和校对状态：记录到 `docs/source_notes.md`。
- 发布到 GitHub：参考 `docs/github_launch_checklist.md`。
- 维护发布节奏：参考 `docs/maintainer_release_guide.md` 并更新 `CHANGELOG.md`。

## 免责声明

本项目是个人学习辅助工具，不代表学校或课程组官方资料。题目和解析应以课程教师发布内容、教材、课件和正式考试要求为准。
