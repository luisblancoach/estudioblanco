# ADR-0002: Repository Language

## Status

Accepted

## Date

2026-07-21

## Context

The repository is intended to be maintained by developers and AI coding agents
working across architecture, engineering standards, product principles, design
principles, research principles, and future technical specifications. This
System Knowledge needs a consistent language so contributors can read, review,
and automate work without switching conventions across the repository.

At the same time, Estudio Blanco will contain Domain Knowledge whose
meaning depends on preserving the original language. User interviews, survey
responses, research findings, business strategy, market analysis, product vision,
brand strategy, and domain knowledge specific to Argentine agriculture may carry
context, nuance, and terminology that should not be flattened through unnecessary
translation.

The repository therefore needs a language policy that separates engineering
coordination from Domain Knowledge.

## Decision

System Knowledge must be written in English. This includes
`README.md`, `AGENTS.md`, `CLAUDE.md`, ADRs, architecture documentation,
engineering documentation, product principles, design principles, research
principles, code comments, commit messages, pull requests, issues, and technical
specifications.

Domain Knowledge should remain in its original language whenever possible.
Spanish should be preserved for user interviews,
survey responses, research findings, business strategy, market analysis, product
vision, brand strategy, and Argentine agriculture domain knowledge when Spanish
is the source language.

Documents that combine both concerns should keep system framing in English and
preserve quoted or source domain material in its original language.

## Alternatives Considered

- Write everything in English: this would simplify engineering review and agent
  operation, but it would risk losing nuance in Domain Knowledge, especially
  research and Argentine agriculture domain material originally captured in
  Spanish.
- Write everything in Spanish: this would preserve local business context, but it
  would make engineering collaboration, automation, open-source conventions, and
  AI coding-agent workflows less consistent.
- Allow each document to choose its own language without a repository policy: this
  would be flexible at first, but it would create inconsistent documentation and
  make future maintenance harder.

## Consequences

### Positive

- Developers and AI coding agents have a single language convention for system work.
- Engineering documentation, ADRs, code comments, and technical specifications are
  easier to review consistently.
- Domain Knowledge can preserve original wording, local context, and domain
  nuance.
- The repository can support both international engineering conventions and
  Spanish-language business source material.

### Negative

- Contributors need to classify documents as System Knowledge or
  Domain Knowledge before writing.
- Some areas, especially research principles and product principles, may require
  care because they can reference both system process and Domain Knowledge.
- Mixed-language repositories require more editorial discipline than a single
  language policy.

## Risks

- Engineering documents may accidentally drift into Spanish and reduce
  consistency for future agents and contributors.
- Domain Knowledge may be translated unnecessarily, losing important nuance.
- Mixed documents may blur system guidance with domain evidence if the
  boundary is not explicit.
- Contributors may mistake this policy for a requirement to translate all existing
  Spanish business knowledge.

## Review Triggers

Review this decision if:

- the primary engineering contributor group changes language requirements;
- business source material begins being translated in ways that lose meaning;
- AI coding-agent workflows become less effective because of language ambiguity;
- the repository introduces public-facing documentation with different audience
  needs;
- Estudio Blanco adopts a formal localization or translation process.
