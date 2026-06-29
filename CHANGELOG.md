# Changelog

All notable changes to Starlight Study Island are recorded here.

## 1.3.10 - 2026-06-29

- Added `docs/publish_now.md` with the current repository, expected Pages URLs, authentication options, push commands, and post-push Pages setup.
- Updated the GitHub launch checklist and README so the final publish path starts from the product intro page and points to the active repository.
- Extended static validation to keep the final publish guide present, repository-specific, and free from private local paths.

## 1.3.9 - 2026-06-29

- Upgraded `product_intro.html` into a more immersive portfolio-grade landing page with a constellation canvas, layered product deck, sticky stacked cards, moving feature rail, reveal animation, and gentle 3D hover response.
- Added a dedicated immersive showcase section explaining the course island, past-paper practice, local progress, and open-source maintenance layers.
- Kept the main learning homepage focused while letting the product introduction carry the stronger artistic presentation.

## 1.3.8 - 2026-06-29

- Added `product_intro.html`, a public-facing product introduction page with a scroll-narrative layout, animated course cards, interactive demo viewpoints, course coverage, and open-source roadmap.
- Linked the product introduction from the homepage navigation, hero support actions, footer, service-worker cache, README, and release validation.
- Kept resume-specific wording out of the public product page while preserving private portfolio notes in `docs/`.

## 1.3.7 - 2026-06-29

- Refined the public homepage hero so the title scale and line-height read more like a polished product page.
- Rebuilt the course entry section into a clearer 7-course portal with larger cards, readable exam-mode copy, resource tags, and separated resource-count chips.
- Fixed course-card label crowding and text overlap on wide screens by switching to a roomier responsive grid.
- Updated the service-worker cache version so published visitors receive the latest homepage shell.

## 1.3.6 - 2026-06-29

- Added a homepage share action that uses the Web Share API when available and falls back to copying a shareable project intro.
- Added `docs/demo_script.md` with 30-second, 3-minute, and technical demo routes for recordings, interviews, and portfolio presentations.
- Updated README and resume pitch documentation to include the share flow, app shell, GitHub Pages deployment, and demo narrative.
- Extended static validation so the public homepage share entry and demo script remain part of the release package.

## 1.3.5 - 2026-06-29

- Added a student-facing GitHub Pages 404 fallback that guides lost visitors back to the homepage, resource library, practice lab, and dashboard.
- Added `robots.txt` and included the 404/robots files in the service worker core cache list.
- Added `docs/architecture.md` to explain the student path, data layer, quality layer, localStorage state, app shell, validation, and course-extension workflow.
- Updated README, launch checklist, and static validation so the fallback page and architecture documentation are part of the release package.

## 1.3.4 - 2026-06-29

- Added a product application shell with a brand SVG icon, web app manifest, social preview metadata, and an offline fallback page.
- Added a lightweight service worker that caches the core student entry pages after deployment on GitHub Pages or another secure host.
- Updated public documentation and launch checklist so the app shell files are part of the release package.
- Extended static validation to verify the manifest, icon, offline page, service worker, and cached core assets.

## 1.3.3 - 2026-06-29

- Added a GitHub Pages deployment workflow that validates the static site before publishing.
- Documented the recommended GitHub Actions Pages setup while keeping branch deployment as a fallback.
- Updated the launch checklist to include both static quality checks and Pages deployment.
- Extended static validation so the deployment workflow is treated as part of the open-source release shell.

## 1.3.2 - 2026-06-29

- Upgraded the course island from a static resource list into an interactive course workspace.
- Added course-local filters for main resources, required items, past papers, lecture/review packs, and catch-up drills.
- Added course-level progress metrics for required completion, total resources, and visible filtered resources.
- Connected course resource cards to the shared local completion state used by the dashboard and resource library.
- Updated validation so future changes must keep the course island filter and completion workflow intact.

## 1.3.1 - 2026-06-29

- Simplified the public homepage into four student-first areas: course island entry, resource search, required-resource map, and learning progress.
- Removed duplicate homepage route/function sections so courses stay compact and resources live in the searchable library.
- Added every remaining study HTML page to the shared resource catalog, including Day 1-3 route pages and Day 2 active recall.
- Added individual discrete 2023, 2024, and 2025 Hiji past-paper entries with quality metadata so each paper is searchable on its own.
- Updated validation to enforce the new homepage information architecture and complete resource-quality coverage.

## 1.3.0 - 2026-06-29

- Added GitHub issue templates, pull request template, changelog, and maintainer release guide.
- Expanded launch documentation for GitHub Pages, course-pack maintenance, quality review, and resume positioning.
- Updated static validation to require the open-source collaboration files.

## 1.2.0 - 2026-06-29

- Connected `data/resource_quality.js` to the student-facing routes: new-user guide, practice lab, dashboard, course island, and resource library.
- Filtered `archive` maintenance resources out of the default student path.
- Prioritized `exam-like` and `reviewed` resources in route generation, training packs, and next-step recommendations.
- Updated validation to require quality-layer integration across key pages.

## 1.1.0 - 2026-06-29

- Expanded the curated resource catalog to 75 structured resources across 7 courses plus global tools.
- Added main/exam/all/archive filtering, stage filtering, and quality filtering to the resource library.
- Updated course islands to read course-specific resources from the shared catalog instead of only manifest secondary links.

## 1.0.0 - 2026-06-29

- Added explicit resource quality metadata with level, source, next improvement, and update date.
- Connected the quality board to the public quality data layer.
- Updated validation to require every catalog resource to have quality metadata.

## 0.9.0 - 2026-06-29

- Added course pack builder, quality board, release status, start guide, practice lab, dashboard, resource library, and progress vault.
- Consolidated database, AI, software engineering, military theory, discrete math, Marxism, and operating system materials into the product shell.
- Added static validation for local links, inline scripts, public homepage requirements, and private path leakage.
