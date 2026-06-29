window.STARLIGHT_MANIFEST = {
  version: "1.3.11",
  product: {
    name: "星光学习岛",
    englishName: "Starlight Study Island",
    tagline: "期末复习、互动刷题、错题回炉。",
    audience: "低基础、时间紧、容易被资料堆吓住的大学期末复习者",
    samplePack: "BUAA SE Finals Sprint Pack"
  },
  courses: [
    {
      id: "database",
      title: "数据管理技术",
      status: "SQL / 范式 / 事务",
      description: "从 SQL、关系代数、范式、事务恢复到 ER 作图，保留 2023A 整卷交互和临考变式训练。",
      href: "./db_2023a_full_interactive.html",
      button: "做数据库整卷",
      icon: "db",
      style: "primary",
      examMode: "闭卷理工题：SQL、关系代数、范式、事务与 ER 大题",
      studyActions: ["先做 2023A 整卷", "错题回到 SQL/范式/事务", "ER 作图单独练"],
      resourceTags: ["交互整卷", "ER 工坊", "范式/事务", "变式训练"],
      secondary: [
        { label: "最后排雷", href: "./day6_database_final_rehearsal.html" },
        { label: "ER 工坊", href: "./db_er_drawing_workshop.html" },
        { label: "变式训练", href: "./db_final_variant_drill.html" }
      ]
    },
    {
      id: "ai",
      title: "人工智能",
      status: "公式 / 模型 / 综合题",
      description: "围绕老师总纲、参考习题和模型故事线，训练选择填空、计算、简答与综合题的题眼识别。",
      href: "./ai_reference_final_interactive.html",
      button: "做 AI 综合卷",
      icon: "ai",
      style: "mint",
      examMode: "闭卷混合题：选择、填空、公式计算、简答和综合题",
      studyActions: ["先用参考习题校准题型", "公式必须读懂变量含义", "模型对比用场景识别"],
      resourceTags: ["参考习题", "公式模型", "老师总结", "题眼识别"],
      secondary: [
        { label: "考试总纲", href: "./ai_exam_storyline_master_map.html" },
        { label: "老师总结", href: "./day7_ai_teacher_summary_final.html" },
        { label: "模型闯关", href: "./tips_ai_model_gate_practice.html" }
      ]
    },
    {
      id: "software-engineering",
      title: "软件工程",
      status: "客观题 / 简答 / CodeArts",
      description: "官方五类题型、纸质开卷定位、CodeArts 画图和案例建模都集中在这里，不再散着翻。",
      href: "./se_official_final_interactive.html",
      button: "做软工交互卷",
      icon: "se",
      style: "",
      examMode: "开卷机房考：客观题、简答题、案例综合和 CodeArts 建模",
      studyActions: ["先熟悉官方五类题型", "再练 UML/需求/测试题眼", "最后做资料定位"],
      resourceTags: ["官方题型", "UML 画图", "开卷索引", "CodeArts"],
      secondary: [
        { label: "最后24小时", href: "./se_last24_command_center.html" },
        { label: "题型闭环", href: "./day5_se_official_types_closure.html" },
        { label: "变式训练", href: "./se_pastpaper_variant_drill.html" }
      ]
    },
    {
      id: "military",
      title: "军事理论",
      status: "闭卷背诵 / 召回",
      description: "闭卷记忆不靠硬熬：数字、定义、简答骨架和往年题信号都做成召回训练。",
      href: "./day8_military_closed_book_sprint.html",
      button: "进入军理背诵舱",
      icon: "military",
      style: "",
      examMode: "闭卷记忆题：关键词、数字、定义、简答骨架",
      studyActions: ["先背高频数字和定义", "再做召回闸门", "最后用错题回炉补漏"],
      resourceTags: ["闭卷背诵", "召回闸门", "关键词", "简答骨架"],
      secondary: [
        { label: "召回闸门", href: "./military_recall_gate.html" },
        { label: "文科低成本包", href: "./day8_liberal_low_cost_sprint.html" }
      ]
    },
    {
      id: "discrete",
      title: "离散数学",
      status: "证明 / 范式 / 真题",
      description: "先学盒子和证明第一句，再做近三年希冀真题；主观题要求先写骨架再看解析。",
      href: "./discrete_hiji_ingest/discrete_hiji_pastpaper_hub.html",
      button: "做离散真题包",
      icon: "ladder",
      style: "primary",
      examMode: "闭卷证明题：定义、范式、谓词、公理系统和近三年真题",
      studyActions: ["先补符号和证明第一句", "再做近三年希冀真题", "主观题先写骨架再看解析"],
      resourceTags: ["近三年真题", "证明骨架", "符号速查", "希冀解析"],
      secondary: [
        { label: "先学后练", href: "./discrete_last36_learning_ladder.html" },
        { label: "最终速查", href: "./day7_discrete_final_recall.html" },
        { label: "证明闸门", href: "./discrete_pastpaper_proof_gate.html" }
      ]
    },
    {
      id: "marx",
      title: "马克思主义基本原理",
      status: "开卷定位 / 材料题",
      description: "把老师最后重点、纸质资料页边索引和材料题第一段写法，整理成可上场的开卷工具。",
      href: "./marx_openbook_final_sprint.html",
      button: "打开马原冲刺",
      icon: "marx",
      style: "mint",
      examMode: "纸质开卷：老师重点、材料题框架、页边索引和定位速度",
      studyActions: ["先看老师最后重点", "资料按题眼贴页边索引", "材料题第一段练到能直接写"],
      resourceTags: ["开卷定位", "老师重点", "材料题", "速查索引"],
      secondary: [
        { label: "文科低成本包", href: "./day8_liberal_low_cost_sprint.html" },
        { label: "错题回炉", href: "./final_two_wrong_review.html" }
      ]
    },
    {
      id: "operating-system",
      title: "操作系统",
      status: "三套往年题 / 闪卡",
      description: "收录 2019-2020、2020-2021、2024-2025 三套交互真题，大题可逐步展开解析，另有考点闪卡。",
      href: "./operating_system/index.html",
      button: "进 OS 真题包",
      icon: "os",
      style: "",
      examMode: "闭卷理工题：进程、调度、同步、内存、文件和三套往年题",
      studyActions: ["直接从往年题进入", "选择题先判分", "大题按步骤展开解析"],
      resourceTags: ["三套真题", "交互试卷", "考点闪卡", "大题解析"],
      secondary: [
        { label: "24-25 卷", href: "./operating_system/os_2024_2025_interactive.html" },
        { label: "20-21 卷", href: "./operating_system/os_2020_2021_interactive.html" },
        { label: "考点闪卡", href: "./operating_system/os_flashcards.html" }
      ]
    }
  ],
  flow: [
    {
      step: "01",
      label: "认路",
      title: "新手上岛向导",
      description: "第一次打开先选科目和当前状态，系统直接生成三步路线：看哪里、练哪里、怎么回炉。",
      href: "./start_here.html",
      button: "生成路线",
      style: "primary"
    },
    {
      step: "02",
      label: "暖机",
      title: "星光海岛闯关",
      description: "3 道题一小段，离散和马原交替出现。答错不打击，只把题眼放进记忆宝箱，让人愿意继续学。",
      href: "./focus_dual_exam_game.html",
      button: "开始一局",
      style: "primary"
    },
    {
      step: "03",
      label: "主线",
      title: "继续学习仪表盘",
      description: "读取资源库完成状态，自动给出总进度、每科进度和下一步建议。回来复习时先看这里。",
      href: "./dashboard.html",
      button: "继续学习",
      style: "mint"
    },
    {
      step: "04",
      label: "真题",
      title: "真题训练台",
      description: "把交互卷、真题包、专项训练和错题回炉收束成练题视图。先做必做，再按科目补洞。",
      href: "./practice_lab.html",
      button: "开始练题",
      style: "primary"
    },
    {
      step: "05",
      label: "资源",
      title: "精品资源库",
      description: "按课程、资源类型和优先级筛选真题卷、讲义、闪卡和错题回炉入口，先做必做，再补推荐。",
      href: "./resources.html",
      button: "打开资源库",
      style: ""
    }
  ],
  features: [
    {
      id: "start-guide",
      title: "新手上岛向导",
      description: "选择科目和当前状态，自动生成三步复习路线，适合第一次打开或完全不知道点哪里。",
      href: "./start_here.html",
      icon: "rocket",
      tags: ["第一次打开", "三步路线", "状态分流"]
    },
    {
      id: "dashboard",
      title: "继续学习仪表盘",
      description: "根据本地完成状态生成下一步建议、必做完成度和每科进度，回来学习不用重新想路线。",
      href: "./dashboard.html",
      icon: "check",
      tags: ["下一步", "课程进度", "本地状态"]
    },
    {
      id: "focus-game",
      title: "轻闯关启动",
      description: "用剧情、伙伴、收集和轻反馈降低开始阻力，适合分心时先做一小段。",
      href: "./focus_dual_exam_game.html",
      icon: "star",
      tags: ["3题一段", "防分心", "本地错题"]
    },
    {
      id: "interactive-papers",
      title: "真题训练台",
      description: "按科目和训练动作进入交互卷、真题包、专项补洞和错题回炉，适合一打开就开始练。",
      href: "./practice_lab.html",
      icon: "paper",
      tags: ["真题", "训练包", "完成打勾"]
    },
    {
      id: "resource-library",
      title: "精品资源库",
      description: "按课程、类型、阶段和优先级筛选真题卷、深学讲义、速查包、背诵舱和错题本。",
      href: "./resources.html",
      icon: "book",
      tags: ["筛选", "完成打勾", "精品入口"]
    },
    {
      id: "deep-lessons",
      title: "深学讲义",
      description: "新概念先铺垫，再讲考试怎么问；讲义负责理解，真题负责上场调用。",
      href: "./exam_scope_master_map.html",
      icon: "book",
      tags: ["从零开始", "重点高亮", "题眼连接"]
    },
    {
      id: "memory-box",
      title: "错题与存档",
      description: "错题、闸门和最近练习记录保存在本机，也可以导出学习存档换设备继续。",
      href: "./final_two_wrong_review.html",
      icon: "box",
      tags: ["错题回炉", "localStorage", "学习存档"]
    }
  ]
};
