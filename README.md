# Classroom Gradebook and Assessment Dashboard

A responsive React + Redux gradebook prototype with student search, class filtering, selection state, grade editing, progress indicators, summary cards, and print-friendly report export.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:8080. Production build: `npm run build`. Tests: `npm test`.

## Project structure

- `src/App.jsx` — dashboard UI, memoized student row, filtering and edit-grade dialog.
- `src/store.js` — Redux Toolkit state and gradebook actions.
- `src/store.test.js` — reducer behavior tests.
- `src/styles.css` — responsive dashboard styles.
- `webpack.config.js` — hashed production bundles and shared dependency splitting.

## Demo notes

Data is local sample data; no school records or external services are connected. The dashboard illustrates the product workflow rather than verifying the resume metrics. “New assessment” is a UI placeholder; grade editing is functional.
