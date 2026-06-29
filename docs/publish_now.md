# Publish Now

This page records the exact final steps for publishing Starlight Study Island to the current GitHub repository.

## Current Repository

- GitHub repository: `https://github.com/1766054554-pixel/-.git`
- Local project path: the project root on your machine
- Current local commit: run `git log --oneline --max-count=1` in the project root
- Recommended GitHub Pages URL after deployment: `https://1766054554-pixel.github.io/-/`
- Product intro page after deployment: `https://1766054554-pixel.github.io/-/product_intro.html`
- Learning homepage after deployment: `https://1766054554-pixel.github.io/-/index.html`

## What Is Already Ready

- The project is a Git repository.
- The remote is configured.
- The full site has been committed locally.
- Static validation passes with `92 HTML, 14 Markdown, 5 JS files`.
- GitHub Actions workflows are included:
  - `.github/workflows/static-check.yml`
  - `.github/workflows/pages.yml`
- The public-facing product page is ready at `product_intro.html`.
- The learning homepage is ready at `index.html`.

## Why Push Is Not Finished Yet

The local project is ready, but GitHub rejected push authentication.

Observed HTTPS error:

```bash
fatal: could not read Username for 'https://github.com': Device not configured
```

Observed SSH error:

```bash
git@github.com: Permission denied (publickey).
```

This means the local SSH key exists but has not been added to the GitHub account, and GitHub CLI is not installed or logged in yet.

## Option A: Publish With SSH

1. Print the public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

2. Copy the output.
3. Open GitHub: Settings -> SSH and GPG keys -> New SSH key.
4. Paste the public key and save.
5. Push:

```bash
cd starlight-study-island
git remote set-url origin git@github.com:1766054554-pixel/-.git
git push origin main
```

## Option B: Publish With GitHub CLI

1. Install GitHub CLI:

```bash
brew install gh
```

2. Log in:

```bash
gh auth login
```

Choose GitHub.com, HTTPS, and browser login when prompted.

3. Push:

```bash
cd starlight-study-island
git remote set-url origin https://github.com/1766054554-pixel/-.git
git push origin main
```

## Enable GitHub Pages

After the push succeeds:

1. Open the GitHub repository.
2. Go to Settings -> Pages.
3. Set Source to `GitHub Actions`.
4. Wait for the `Deploy GitHub Pages` workflow to finish.
5. Open `https://1766054554-pixel.github.io/-/`.

## Release Check

Before pushing or after future edits, run:

```bash
npm run validate
```

To inspect the exact commit that will be pushed, run:

```bash
git log --oneline --max-count=1
```

Expected result:

```text
Static site validation passed: 92 HTML, 15 Markdown, 5 JS files.
```

## Recommended Demo Route

For portfolio or interview demos:

1. Open `product_intro.html`.
2. Show the immersive product deck and interactive demo viewpoints.
3. Open `index.html`.
4. Show course islands, resource library, practice lab, dashboard, and progress vault.
5. Open `release_status.html` to show the release checklist.
