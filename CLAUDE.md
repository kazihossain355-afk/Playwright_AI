# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm ci

# Install Playwright browsers (required once after npm ci)
npx playwright install

# Run all tests across all browsers
npx playwright test

# Run tests in a specific file
npx playwright test tests/example.spec.js

# Run only tests matching a tag (e.g., @smoke or @regression)
npx playwright test --grep "@smoke"

# Run tests in a specific browser only
npx playwright test --project=chromium

# Open interactive UI mode
npx playwright test --ui

# Open the last HTML report
npx playwright show-report
```

## Architecture

This is a Playwright end-to-end test project using JavaScript.

**Test tagging**: Tests use `@tag` prefixes inside the test name string (e.g., `test('@smoke has title', ...)`). Filter by tag using `--grep "@tagname"`. Current tags: `@smoke` (critical path) and `@regression`.

**Browser matrix**: Tests run against Chromium, Firefox, and WebKit in parallel locally (`fullyParallel: true`). On CI, workers are set to 1 and retries to 2.

**No baseURL**: Tests currently use absolute URLs. If a local dev server is needed, uncomment the `webServer` and `baseURL` blocks in `playwright.config.js`.

**Reporting**: HTML report is generated to `playwright-report/`. Traces are collected on first retry and can be viewed with `npx playwright show-trace`.

**CI**: GitHub Actions runs tests on push/PR to `main`/`master` and uploads the HTML report as an artifact retained for 30 days.
