# Contributing

## Before Adding Product Code

1. Define the app or package boundary.
2. Document the intended owner and responsibility.
3. Add the smallest package-level scripts needed for build, lint, and typecheck.
4. Keep shared code out of apps unless it is truly app-specific.

## Code Standards

- Use TypeScript for all source code.
- Keep `strict` TypeScript settings enabled.
- Run formatting before committing.
- Prefer explicit exports from package entrypoints.
- Avoid root-level product code.

## Expected Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm format:check
```

These commands are intentionally wired through Turborepo so future apps and
packages can participate without changing the root workflow.
