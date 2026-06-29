# 课程包规范

星光学习岛后续可以从“北航期末冲刺样例”扩展为通用学习平台。新增课程时，先打开 `course_pack_builder.html` 生成课程清单和资源清单片段，再按下面结构人工校对。

## 课程清单字段

```js
{
  id: "computer-network",
  title: "计算机网络",
  status: "协议 / 子网 / 路由",
  description: "从协议分层、子网划分、路由算法到典型计算题，保留综合卷和补洞训练。",
  href: "./network_final_interactive.html",
  button: "做网络综合卷",
  icon: "paper",
  style: "",
  examMode: "闭卷理工题：选择、填空、计算、简答和综合题。",
  studyActions: [
    "先做综合卷",
    "错题回到协议/子网/路由",
    "最后看考前速查"
  ],
  resourceTags: ["综合卷", "子网划分", "路由算法", "协议分层"],
  secondary: [
    { label: "子网专项", href: "./network_subnet_route_drill.html" }
  ]
}
```

这段进入 `data/starlight_manifest.js` 的 `courses` 数组。

## 资源清单字段

```js
{
  id: "computer-network-paper",
  courseId: "computer-network",
  type: "交互卷",
  stage: "题型校准",
  priority: "必做",
  title: "计算机网络综合交互卷",
  description: "用完整卷面校准协议、子网、路由和综合题的考试样子。",
  href: "./network_final_interactive.html",
  tags: ["综合卷", "协议", "子网"]
}
```

这段进入 `data/resource_catalog.js`。每门课至少需要一个 `priority: "必做"` 的资源。

## 质量元数据字段

每新增一个资源，也要在 `data/resource_quality.js` 里补一条公开默认质量记录：

```js
"computer-network-paper": {
  level: "exam-like",
  source: "计算机网络综合卷，依据老师复习范围和近年题型整理。",
  next: "继续人工核对计算题步骤、错选项和评分点。",
  updated: "2026-06-29"
}
```

`quality_board.html` 会读取这份清单作为默认状态；本地巡检备注仍保存在 `starlight-quality-audit-v1`。

## 页面类型

- `知识地图`：零基础认路，负责把名词放进结构。
- `深学讲义`：把概念讲清楚，连接考试问法。
- `专项训练` / `变式题` / `闸门题`：主动回忆和题型识别。
- `真题卷` / `交互卷` / `真题包`：真实题型校准。
- `速查包` / `错题本`：错题回炉和收口闸门。
- `小游戏`：轻量游戏化入口，用于降低开始阻力。

## 推荐学习链路

每门课都尽量形成：

```text
课程入口 -> 零基础盒子 -> 题型动作 -> 真题校准 -> 错题回炉 -> 考前速查
```

不要把所有页面都直接放在首页。首页只放最常用、最能解释产品价值的入口。

## 新增课程流程

1. 打开 `course_pack_builder.html`，填写课程 ID、考试形态、主入口和 3 个资源。
2. 复制课程片段到 `data/starlight_manifest.js` 的 `courses` 数组。
3. 复制资源片段到 `data/resource_catalog.js`。
4. 在 `data/resource_quality.js` 补充每个资源的质量元数据。
5. 新建或整理对应 HTML 页面。
6. 按 `docs/content_quality_rubric.md` 人工校对题目、解析和来源。
7. 运行 `npm run validate`。

## localStorage 命名

建议格式：

```text
starlight:<course-id>:<module-id>:<state-name>
```

历史页面已经有一些旧 key，例如 `discrete-hiji-2024`。新模块可以兼容旧 key，但新增 key 尽量使用统一前缀，方便错题宝箱聚合。课程包生成器草稿使用 `starlight-course-pack-draft-v1`，可以通过存档室导出。

## 内容校对等级

- `draft`：初稿，只能自己用。
- `reviewed`：已经人工读过来源，题目和解析可以公开给同学试用。
- `exam-like`：经过真题或老师重点校准，适合放到主线入口。
- `archive`：旧版材料，不直接出现在首页。

发布版首页只推荐 `reviewed` 或 `exam-like` 模块。

## 内容质量门槛

课程包不是把资料文件换一个入口。每个新增模块都要通过 `docs/content_quality_rubric.md` 的检查，尤其注意：

- 新概念必须有零基础铺垫。
- 题目必须训练真实考试动作。
- 解析必须写清题眼、第一步、错因和迁移提醒。
- 学习舱、讲义、真题舱之间要分工明确，避免大段重复。
