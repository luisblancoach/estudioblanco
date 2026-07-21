# estudioblanco

Clean TypeScript monorepo for Estudio Blanco.

This repository is intentionally product-empty. It is prepared to host multiple
Next.js applications under `apps/` and shared packages under `packages/`.

## Stack

- pnpm workspaces
- Turborepo
- TypeScript
- ESLint
- Prettier
- Next.js-ready app structure

## Repository Layout

```txt
estudioblanco/
  apps/          # Future Next.js applications
  packages/      # Shared libraries, UI, config, and domain packages
  docs/          # Architecture notes, decisions, and contribution docs
```

## Getting Started

Use Node.js 20+ and pnpm 9+.

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm format
```

## Planned Applications

Create product applications inside `apps/` only when their scope is approved.

Planned applications:

```txt
apps/estudioblanco
apps/cernunnos
```

Estudio Blanco and Cernunnos must remain separate applications with clear
product boundaries. Shared logic belongs in `packages/` only when it is useful
across applications.

## Adding Packages

Create shared packages inside `packages/`.

Recommended naming:

```txt
packages/ui
packages/config
packages/types
packages/utils
```

Keep package APIs small, typed, and documented before they become dependencies
of multiple apps.

## Documentation

Use `docs/` as the source of truth before adding product code.

```txt
docs/product/       # Product boundaries, scope, and requirements
docs/brand/         # Brand direction and identity notes
docs/research/      # Research inputs and source material
docs/architecture/  # Technical architecture notes and decisions
```

## Development Principles

- Documentation first: write the intent before scaling the implementation.
- Product boundaries first: apps compose packages, packages avoid app-specific
  behavior.
- TypeScript everywhere.
- Keep root tooling boring and shared.
- Prefer explicit package ownership over hidden cross-app coupling.

See [AGENTS.md](AGENTS.md), [docs/architecture.md](docs/architecture.md), and
[docs/contributing.md](docs/contributing.md) before adding product code.
