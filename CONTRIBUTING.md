# 贡献指南

谢谢你想继续维护星光学习岛。这个项目的目标不是堆很多资料，而是把资料变成清楚、可执行、可复盘的学习路线。

## 内容原则

正式新增内容前，请先阅读 `docs/content_quality_rubric.md`。它是题目、解析和讲义能不能进入发布版的质量门槛。

新增内容必须回答三个问题：

1. 学生打开这一页后，第一步应该做什么？
2. 这一页解决哪个考试动作：理解概念、识别题型、写第一句、做真题、还是错题回炉？
3. 学完后如何判断自己真的会了？

如果一段内容只是“看起来很全”，但不知道什么时候用、怎么练、怎么回炉，就先不要放进发布版首页。

## 新增课程模块流程

1. 先打开 `course_pack_builder.html`，填写课程信息和至少 3 个资源入口。
2. 将生成的课程片段放入 `data/starlight_manifest.js` 的 `courses` 数组。
3. 将生成的资源片段放入 `data/resource_catalog.js`。
4. 在 `data/resource_quality.js` 给每个资源写入默认校对等级、来源依据、下一步改进和更新时间。
5. 新建对应 HTML 页面，页面标题要写清楚学习目标。
6. 每个页面至少包含：
   - 这页适合什么时候打开。
   - 3-6 个核心知识动作。
   - 至少一组主动回忆或交互练习。
   - 做错后的回炉建议。
7. 如果页面会写入 localStorage，请在页面里注明用途，并尽量让错题宝箱能读到它。
8. 打开 `quality_board.html`，检查新增资源的 `draft`、`reviewed` 或 `exam-like` 状态，并写下本地待改进备注。
9. 更新 `docs/source_notes.md`，记录资料依据和校对状态。
10. 如果改动影响学生使用路径、数据结构或校验规则，更新 `CHANGELOG.md`。

## 题目质量要求

- 题目必须训练运用能力，不能只复述定义。
- 错误选项也要像真实误区，不能一眼看出正确答案最长。
- 解析要包含题眼、第一动作、为什么选它、其他选项错在哪里。
- 主观题要鼓励先写骨架，再看参考答案。

## 视觉和交互要求

- 首页和小游戏保持温柔、清楚、有故事感。
- 学科页面可以更朴素，但必须保持重点明确、阅读舒适。
- 不要新增高饱和、闪烁、压迫感强的动画。
- 卡片、按钮、入口要服务学习动作，不要为了装饰堆组件。

## 发布前检查

```bash
npm run validate
```

同时手动打开 `index.html`、`start_here.html`、`practice_lab.html`、`dashboard.html`、`resources.html`、`quality_board.html` 和 `release_status.html`。

发布节奏和人工检查顺序见 `docs/maintainer_release_guide.md`。提交 PR 时请使用 `.github/pull_request_template.md`，内容问题优先使用 Content correction issue 模板。
