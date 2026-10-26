# Performance checklist

The dashboard uses `React.memo` for each student row and `useMemo` for class options and filtered rows. The production webpack configuration enables content-hashed output and `splitChunks` so shared dependencies can be cached separately.

For a real deployment, profile with React DevTools Profiler using a representative class roster, measure Core Web Vitals in production, and compare before/after traces. The resume figures (6.8s to 1.9s and 71% fewer re-renders) are project claims and are not asserted by this sample build; validate them with repeatable measurements before publishing.
