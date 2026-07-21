# Architecture Decision Records

Architecture Decision Records, or ADRs, document important technical decisions
that shape the repository over time. They explain the context, the decision, the
alternatives considered, the consequences, the risks, and when the decision should
be reviewed again.

## When to Create an ADR

Create an ADR when a decision changes or establishes architecture, ownership,
deployment strategy, data flow, shared package boundaries, tooling standards, or
other long-lived technical direction.

An ADR is useful when future contributors will need to understand why a path was
chosen, not only what changed.

## When Not to Create an ADR

Do not create an ADR for routine implementation details, small refactors,
formatting changes, copy edits, dependency patch updates, or decisions that are
already clearly covered by an existing ADR.

If a choice does not create durable architectural consequences, document it closer
to the code or in the relevant product, brand, research, or contribution document
instead.

## Naming Convention

Use sequential filenames with a four-digit number and a descriptive kebab-case
title:

```txt
NNNN-descriptive-title.md
```

Example:

```txt
0001-monorepo-foundation.md
```

## Statuses

Allowed ADR statuses are:

- Proposed
- Accepted
- Superseded
- Deprecated

## Immutability

An accepted ADR should not be rewritten to hide or erase past decisions. If a
decision changes, create a new ADR that supersedes the previous one and update the
older ADR status to `Superseded` with a reference to the replacement.
