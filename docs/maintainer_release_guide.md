# Maintainer Release Guide

This guide keeps the project usable for future students while making the repository presentable as an open-source product.

## Release Roles

- Student pages: `index.html`, `start_here.html`, `course.html`, `practice_lab.html`, `dashboard.html`, `resources.html`, `focus_dual_exam_game.html`, and course content pages.
- Maintainer pages: `release_status.html`, `course_pack_builder.html`, `quality_board.html`, `progress_vault.html`, and `docs/`.
- Data layer: `data/starlight_manifest.js`, `data/resource_catalog.js`, and `data/resource_quality.js`.

Student pages should stay simple and action-oriented. Maintainer pages can explain product structure, source coverage, and future work.

## Release Checklist

1. Run `npm run validate`.
2. Open `release_status.html` and check all required student routes.
3. Open `resources.html?scope=exam` and confirm the exam-like resources are truly exam-facing.
4. Open `resources.html?scope=archive` and confirm maintenance/history pages do not belong in the default student path.
5. Open `course.html?id=database`, `course.html?id=ai`, `course.html?id=software-engineering`, `course.html?id=discrete`, and `course.html?id=operating-system`.
6. Open `start_here.html`, generate a route, then check `dashboard.html` route continuation.
7. Update `CHANGELOG.md` when the release changes student behavior, data shape, validation rules, or public docs.

## Adding a Resource

1. Add the page or asset.
2. Add one entry to `data/resource_catalog.js`.
3. Add the matching entry to `data/resource_quality.js`.
4. Decide whether it belongs in the student path:
   - `exam-like`: close to real exam practice and safe to promote.
   - `reviewed`: checked and useful for learning or review.
   - `draft`: not ready for public default paths.
   - `archive`: maintenance/history material, hidden from student defaults.
5. Run `npm run validate`.

## Adding a Course

1. Use `course_pack_builder.html` to draft the course and first resources.
2. Add the course to `data/starlight_manifest.js`.
3. Add at least one required resource in `data/resource_catalog.js`.
4. Add quality metadata for every new resource.
5. Open `course.html?id=<course-id>` and check the route and resource list.
6. Update README if this becomes a core public course.

## Content Review Standard

Every promoted page should answer:

- When should a student open this?
- What exam action does it train?
- What is the first step after reading the question?
- What mistake does the explanation prevent?
- What source or reasoning supports the answer?

Use `docs/content_quality_rubric.md` for the detailed checklist.
