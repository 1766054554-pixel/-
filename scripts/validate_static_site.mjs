import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlFiles = [];
const mdFiles = [];
const jsFiles = [];

const ignoredDirs = new Set([".git", "node_modules", "tmp", "-"]);
const dynamicRefMarkers = ["${", "'+", "+'", "`"];
const blockedPublicIndexTerms = [
  "开源包装",
  "简历包装",
  "Builder Tools",
  "Open Source Roadmap",
  "Product Flow"
];
const requiredIndexTerms = [
  "新手上岛向导",
  "课程入口",
  "数据库",
  "人工智能",
  "软件工程",
  "军事理论",
  "离散数学",
  "马克思主义基本原理",
  "操作系统",
  "进入课程岛",
  "继续学习",
  "真题训练台",
  "资源库",
  "全部资料库",
  "必做清单",
  "真题资源地图",
  "课程岛",
  "资料库查找",
  "学习进度",
  "项目介绍",
  "product_intro.html",
  "site.webmanifest",
  "service-worker.js",
  "og:title",
  "分享给同学",
  "shareHome",
  "navigator.share"
];
const requiredStartPageTerms = [
  "新手上岛向导",
  "Start Here",
  "先选一门课",
  "再选你现在的状态",
  "照这三步走",
  "starlight-start-route-v1",
  "STARLIGHT_MANIFEST",
  "STARLIGHT_RESOURCE_CATALOG",
  "STARLIGHT_RESOURCE_QUALITY"
];
const requiredCoursePageTerms = [
  "课程岛",
  "推荐路线",
  "核心资源",
  "资源库",
  "本课资料库",
  "本课筛选",
  "必做完成",
  "标记完成",
  "starlight-resource-done-v1",
  "STARLIGHT_RESOURCE_CATALOG",
  "STARLIGHT_RESOURCE_QUALITY",
  "course.html?id="
];
const requiredResourcePageTerms = [
  "精品资源库",
  "筛选器",
  "资源范围",
  "主线资源",
  "使用阶段",
  "校对等级",
  "真题级",
  "标记完成",
  "STARLIGHT_RESOURCE_CATALOG",
  "STARLIGHT_RESOURCE_QUALITY"
];
const requiredPracticePageTerms = [
  "真题训练台",
  "Practice Lab",
  "整卷校准",
  "专项补洞",
  "错题回炉",
  "starlight-resource-done-v1",
  "STARLIGHT_RESOURCE_CATALOG",
  "STARLIGHT_RESOURCE_QUALITY"
];
const requiredDashboardPageTerms = [
  "继续学习仪表盘",
  "向导路线续航",
  "starlight-start-route-v1",
  "今日学习包",
  "下一步建议",
  "课程进度",
  "starlight-resource-done-v1",
  "starlight-today-plan-v1",
  "STARLIGHT_RESOURCE_QUALITY"
];
const requiredBuilderPageTerms = [
  "课程包生成器",
  "Course Pack Builder",
  "课程清单片段",
  "资源库片段",
  "提交前检查",
  "starlight-course-pack-draft-v1"
];
const requiredQualityPageTerms = [
  "内容质量看板",
  "Quality Board",
  "校对等级",
  "来源依据",
  "下一步改进",
  "待改进备注",
  "starlight-quality-audit-v1",
  "STARLIGHT_RESOURCE_CATALOG",
  "STARLIGHT_RESOURCE_QUALITY"
];
const requiredQualityDataTerms = [
  "STARLIGHT_RESOURCE_QUALITY",
  "exam-like",
  "reviewed",
  "next",
  "source"
];
const requiredVaultPageTerms = [
  "星光存档室",
  "starlight-resource-done-v1",
  "starlight-today-plan-v1",
  "starlight-course-pack-draft-v1",
  "starlight-quality-audit-v1",
  "资源库",
  "今日学习包"
];
const requiredReleasePageTerms = [
  "发布检查台",
  "GitHub Pages",
  "npm run validate",
  "全科覆盖",
  "精品资源",
  "新手向导",
  "课程包生成器",
  "质量看板",
  "质量元数据",
  "学生首页"
];
const requiredProductIntroPageTerms = [
  "星光学习岛 · 产品介绍",
  "Open Source Finals Companion",
  "把期末复习做成一座岛",
  "课程岛",
  "真题训练",
  "错题宝箱",
  "开源扩展",
  "不是资料合集，是学习路径",
  "四种角色",
  "七门课，七种考试形态",
  "从学习工具，到可维护项目",
  "进入学习站",
  "demoBoard",
  "renderDemo"
];
const requiredPublishNowTerms = [
  "Publish Now",
  "https://github.com/1766054554-pixel/-.git",
  "git log --oneline --max-count=1",
  "https://1766054554-pixel.github.io/-/",
  "What Is Already Ready",
  "Current Pages Status",
  "Get Pages site failed",
  "Set Source to `GitHub Actions`",
  "Static site validation passed: ... HTML, ... Markdown, ... JS files"
];
const requiredManifestTerms = [
  "数据库",
  "人工智能",
  "软件工程",
  "军事理论",
  "离散数学",
  "马克思主义基本原理",
  "操作系统"
];
const requiredCourseIds = [
  "database",
  "ai",
  "software-engineering",
  "military",
  "discrete",
  "marx",
  "operating-system"
];
const privatePathPatterns = [
  /\/Users\/admin/,
  /\.codex/,
  /Desktop\/大二下/,
  /RWTemp/,
  /codex-clipboard/
];
const requiredOpenSourceFiles = [
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "LICENSE",
  ".github/workflows/static-check.yml",
  ".github/workflows/pages.yml",
  ".github/pull_request_template.md",
  ".github/ISSUE_TEMPLATE/bug_report.yml",
  ".github/ISSUE_TEMPLATE/content_correction.yml",
  ".github/ISSUE_TEMPLATE/course_pack_request.yml",
  "docs/architecture.md",
  "docs/demo_script.md",
  "docs/publish_now.md",
  "docs/maintainer_release_guide.md"
];
const requiredProductShellFiles = [
  "site.webmanifest",
  "service-worker.js",
  "404.html",
  "offline.html",
  "robots.txt",
  "assets/brand/icon.svg",
  "assets/brand/hero-study-island.png",
  "product_intro.html"
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".html")) {
      htmlFiles.push(full);
    } else if (entry.name.endsWith(".md")) {
      mdFiles.push(full);
    } else if (entry.name.endsWith(".js") || entry.name.endsWith(".mjs")) {
      jsFiles.push(full);
    }
  }
}

function rel(file) {
  return path.relative(root, file);
}

function cleanRef(ref) {
  return ref.split("#")[0].split("?")[0];
}

function shouldSkipRef(ref) {
  return (
    !ref ||
    ref.startsWith("#") ||
    ref.startsWith("http://") ||
    ref.startsWith("https://") ||
    ref.startsWith("mailto:") ||
    ref.startsWith("data:") ||
    ref.startsWith("javascript:") ||
    dynamicRefMarkers.some(marker => ref.includes(marker))
  );
}

function assertInlineScriptsParse(errors) {
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
    scripts.forEach((match, index) => {
      try {
        new Function(match[1]);
      } catch (error) {
        errors.push(`${rel(file)} inline script ${index + 1}: ${error.message}`);
      }
    });
  }

  for (const file of jsFiles) {
    if (file.endsWith(".mjs")) continue;
    try {
      new Function(fs.readFileSync(file, "utf8"));
    } catch (error) {
      errors.push(`${rel(file)}: ${error.message}`);
    }
  }
}

function assertLocalRefsExist(errors) {
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    const refs = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)].map(match => cleanRef(match[1]));
    for (const ref of refs) {
      if (shouldSkipRef(ref)) continue;
      const target = path.resolve(path.dirname(file), ref);
      if (!fs.existsSync(target)) errors.push(`${rel(file)} -> ${ref}`);
    }
  }

  for (const file of mdFiles) {
    const markdown = fs.readFileSync(file, "utf8");
    const refs = [...markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
      .map(match => cleanRef(match[1].replace(/^<|>$/g, "")));
    for (const ref of refs) {
      if (shouldSkipRef(ref) || ref.includes("://")) continue;
      const target = path.resolve(path.dirname(file), ref);
      if (!fs.existsSync(target)) errors.push(`${rel(file)} -> ${ref}`);
    }
  }
}

function assertDataRefsExist(errors) {
  const dataDir = path.join(root, "data");
  const dataFiles = fs.readdirSync(dataDir)
    .filter(name => name.endsWith(".js"))
    .map(name => path.join(dataDir, name));
  for (const file of dataFiles) {
    const text = fs.readFileSync(file, "utf8");
    const refs = [...text.matchAll(/\bhref:\s*"([^"]+)"/g)].map(match => cleanRef(match[1]));
    for (const ref of refs) {
      if (shouldSkipRef(ref)) continue;
      const target = path.resolve(root, ref);
      if (!fs.existsSync(target)) errors.push(`${rel(file)} -> ${ref}`);
    }
  }
}

function readWindowData(file, key) {
  const window = {};
  const text = fs.readFileSync(file, "utf8");
  return new Function("window", `${text}\nreturn window.${key};`)(window);
}

function assertPublicIndex(errors) {
  const indexPath = path.join(root, "index.html");
  const startPath = path.join(root, "start_here.html");
  const coursePath = path.join(root, "course.html");
  const resourcesPath = path.join(root, "resources.html");
  const practicePath = path.join(root, "practice_lab.html");
  const dashboardPath = path.join(root, "dashboard.html");
  const builderPath = path.join(root, "course_pack_builder.html");
  const qualityPath = path.join(root, "quality_board.html");
  const vaultPath = path.join(root, "progress_vault.html");
  const releasePath = path.join(root, "release_status.html");
  const productIntroPath = path.join(root, "product_intro.html");
  const publishNowPath = path.join(root, "docs", "publish_now.md");
  const manifestPath = path.join(root, "data", "starlight_manifest.js");
  const catalogPath = path.join(root, "data", "resource_catalog.js");
  const qualityDataPath = path.join(root, "data", "resource_quality.js");
  const index = fs.readFileSync(indexPath, "utf8");
  const start = fs.readFileSync(startPath, "utf8");
  const course = fs.readFileSync(coursePath, "utf8");
  const resources = fs.readFileSync(resourcesPath, "utf8");
  const practice = fs.readFileSync(practicePath, "utf8");
  const dashboard = fs.readFileSync(dashboardPath, "utf8");
  const builder = fs.readFileSync(builderPath, "utf8");
  const quality = fs.readFileSync(qualityPath, "utf8");
  const vault = fs.readFileSync(vaultPath, "utf8");
  const release = fs.readFileSync(releasePath, "utf8");
  const productIntro = fs.readFileSync(productIntroPath, "utf8");
  const publishNow = fs.readFileSync(publishNowPath, "utf8");
  const manifest = fs.readFileSync(manifestPath, "utf8");
  const qualityDataText = fs.readFileSync(qualityDataPath, "utf8");
  const manifestData = readWindowData(manifestPath, "STARLIGHT_MANIFEST");
  const resourceCatalog = readWindowData(catalogPath, "STARLIGHT_RESOURCE_CATALOG");
  const qualityData = readWindowData(qualityDataPath, "STARLIGHT_RESOURCE_QUALITY");
  const manifestCourses = manifestData.courses || [];

  for (const term of blockedPublicIndexTerms) {
    if (index.includes(term)) errors.push(`index.html should not expose public-facing maintainer term: ${term}`);
  }
  for (const term of requiredIndexTerms) {
    if (!index.includes(term)) errors.push(`index.html missing required section text: ${term}`);
  }
  for (const term of requiredStartPageTerms) {
    if (!start.includes(term)) errors.push(`start_here.html missing required text: ${term}`);
  }
  for (const term of requiredCoursePageTerms) {
    const target = term === "course.html?id=" ? index : course;
    if (!target.includes(term)) errors.push(`course hub missing required text: ${term}`);
  }
  for (const term of requiredResourcePageTerms) {
    if (!resources.includes(term)) errors.push(`resources.html missing required text: ${term}`);
  }
  for (const term of requiredPracticePageTerms) {
    if (!practice.includes(term)) errors.push(`practice_lab.html missing required text: ${term}`);
  }
  for (const term of requiredDashboardPageTerms) {
    if (!dashboard.includes(term)) errors.push(`dashboard.html missing required text: ${term}`);
  }
  for (const term of requiredBuilderPageTerms) {
    if (!builder.includes(term)) errors.push(`course_pack_builder.html missing required text: ${term}`);
  }
  for (const term of requiredQualityPageTerms) {
    if (!quality.includes(term)) errors.push(`quality_board.html missing required text: ${term}`);
  }
  for (const term of requiredVaultPageTerms) {
    if (!vault.includes(term)) errors.push(`progress_vault.html missing required text: ${term}`);
  }
  for (const term of requiredReleasePageTerms) {
    if (!release.includes(term)) errors.push(`release_status.html missing required text: ${term}`);
  }
  for (const term of requiredProductIntroPageTerms) {
    if (!productIntro.includes(term)) errors.push(`product_intro.html missing required text: ${term}`);
  }
  for (const term of requiredPublishNowTerms) {
    if (!publishNow.includes(term)) errors.push(`docs/publish_now.md missing required text: ${term}`);
  }
  for (const term of requiredManifestTerms) {
    if (!manifest.includes(term)) errors.push(`manifest missing course entry: ${term}`);
  }
  for (const term of requiredQualityDataTerms) {
    if (!qualityDataText.includes(term)) errors.push(`data/resource_quality.js missing required text: ${term}`);
  }
  for (const courseId of requiredCourseIds) {
    if (!manifestCourses.some(course => course.id === courseId)) {
      errors.push(`manifest missing required course id: ${courseId}`);
    }
    if (!resourceCatalog.some(resource => resource.courseId === courseId)) {
      errors.push(`resource catalog missing any resource for course: ${courseId}`);
    }
    if (!resourceCatalog.some(resource => resource.courseId === courseId && resource.priority === "必做")) {
      errors.push(`resource catalog missing required priority resource for course: ${courseId}`);
    }
  }
  const allowedQualityLevels = new Set(["draft", "reviewed", "exam-like", "archive"]);
  for (const resource of resourceCatalog) {
    const entry = qualityData[resource.id];
    if (!entry) {
      errors.push(`resource quality missing entry for resource: ${resource.id}`);
      continue;
    }
    if (!allowedQualityLevels.has(entry.level)) {
      errors.push(`resource quality invalid level for ${resource.id}: ${entry.level}`);
    }
    if (!entry.source || !entry.next || !entry.updated) {
      errors.push(`resource quality incomplete metadata for ${resource.id}`);
    }
  }
  for (const id of Object.keys(qualityData)) {
    if (!resourceCatalog.some(resource => resource.id === id)) {
      errors.push(`resource quality has unknown resource id: ${id}`);
    }
  }
  for (const requiredFile of requiredOpenSourceFiles) {
    if (!fs.existsSync(path.join(root, requiredFile))) {
      errors.push(`open-source packaging missing required file: ${requiredFile}`);
    }
  }
  for (const requiredFile of requiredProductShellFiles) {
    if (!fs.existsSync(path.join(root, requiredFile))) {
      errors.push(`product shell missing required file: ${requiredFile}`);
    }
  }

  const webManifestPath = path.join(root, "site.webmanifest");
  try {
    const webManifest = JSON.parse(fs.readFileSync(webManifestPath, "utf8"));
    for (const term of ["name", "short_name", "start_url", "icons"]) {
      if (!webManifest[term]) errors.push(`site.webmanifest missing required field: ${term}`);
    }
    for (const icon of webManifest.icons || []) {
      if (!icon.src) continue;
      const iconPath = path.resolve(root, cleanRef(icon.src));
      if (!fs.existsSync(iconPath)) errors.push(`site.webmanifest icon missing: ${icon.src}`);
    }
  } catch (error) {
    errors.push(`site.webmanifest invalid JSON: ${error.message}`);
  }

  const serviceWorkerPath = path.join(root, "service-worker.js");
  const serviceWorker = fs.readFileSync(serviceWorkerPath, "utf8");
  for (const match of serviceWorker.matchAll(/"(\.\/[^"]*)"/g)) {
    const ref = cleanRef(match[1]);
    if (ref === "./") continue;
    const target = path.resolve(root, ref);
    if (!fs.existsSync(target)) errors.push(`service-worker.js caches missing asset: ${ref}`);
  }
}

function assertNoPrivatePaths(errors) {
  const files = [...htmlFiles, ...mdFiles, ...jsFiles, path.join(root, "package.json")];
  for (const file of files) {
    if (rel(file) === "scripts/validate_static_site.mjs") continue;
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of privatePathPatterns) {
      if (pattern.test(text)) errors.push(`${rel(file)} contains private/local path pattern: ${pattern}`);
    }
  }
}

walk(root);

const scriptErrors = [];
const linkErrors = [];
const publicErrors = [];
const privacyErrors = [];

assertInlineScriptsParse(scriptErrors);
assertLocalRefsExist(linkErrors);
assertDataRefsExist(linkErrors);
assertPublicIndex(publicErrors);
assertNoPrivatePaths(privacyErrors);

if (scriptErrors.length || linkErrors.length || publicErrors.length || privacyErrors.length) {
  console.error("Static site validation failed.\n");
  if (scriptErrors.length) console.error("Script errors:\n" + scriptErrors.map(e => `- ${e}`).join("\n") + "\n");
  if (linkErrors.length) console.error("Missing local refs:\n" + linkErrors.map(e => `- ${e}`).join("\n") + "\n");
  if (publicErrors.length) console.error("Public homepage errors:\n" + publicErrors.map(e => `- ${e}`).join("\n") + "\n");
  if (privacyErrors.length) console.error("Privacy/path errors:\n" + privacyErrors.map(e => `- ${e}`).join("\n") + "\n");
  process.exit(1);
}

console.log(`Static site validation passed: ${htmlFiles.length} HTML, ${mdFiles.length} Markdown, ${jsFiles.length} JS files.`);
