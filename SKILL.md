# Playwright Project Skill

Use this project as a Playwright end-to-end test suite written in JavaScript.

## Setup

```bash
npm ci
npx playwright install
```

## Running Tests

```bash
npx playwright test
npx playwright test tests/example.spec.js
npx playwright test --grep "@smoke"
npx playwright test --project=chromium
npx playwright test --ui
npx playwright show-report
```

## Project Conventions

- Tests live in `tests/` and use JavaScript.
- Tag tests with prefixes such as `@smoke` and `@regression` in the test name.
- Filter tagged tests with `--grep "@tagname"`.
- Tests run against Chromium, Firefox, and WebKit.
- Tests currently use absolute URLs because no `baseURL` is configured.
- Add a local `webServer` and `baseURL` in `playwright.config.js` when testing a local application.
- HTML reports are generated in `playwright-report/`.
- Traces are collected on the first retry.

## Implementation Guidance

- Keep tests focused on user-visible behavior.
- Reuse Playwright locators and fixtures instead of duplicating setup.
- Prefer stable role, label, and test-id locators over CSS or XPath selectors.
- Add or update a focused test when changing test behavior.
- Do not modify unrelated files or commit changes automatically.
