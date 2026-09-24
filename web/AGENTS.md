<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# IncidentHub agent guide

## Product context

IncidentHub is an internal application for capturing, organizing, and reusing knowledge generated while handling incidents, problems, operational questions, and support requests.

The goal is not just to close tickets, but to preserve useful operational knowledge:

- context
- investigation steps
- observed errors
- hypotheses
- root cause
- workaround
- resolution
- learnings

When implementing changes, prefer decisions that improve traceability, context retention, and future knowledge reuse.

## Current project state

This repository is still in an early phase.

Today, the implemented foundation is mainly:

- Next.js App Router application
- Prisma + PostgreSQL integration
- NextAuth credentials-based login
- protected home page

Do not prematurely implement the full incident platform unless explicitly requested. Build iteratively on top of the existing foundation.

## Repository scope

- `web/` is the executable application
- `README.md` explains the product at repository level
- `docs/architecture.md` captures the intended direction
- `temp.txt` is a living session/context artifact and should only be updated intentionally

Run application, Prisma, lint, and build commands from `web/`.

## High-level engineering rules

1. Preserve working authentication unless the task explicitly requires auth changes.
2. Prefer small, reviewable changes over broad rewrites.
3. Keep the project consistent with IncidentHub terminology.
4. Avoid speculative abstractions and premature AI/search implementations.
5. Do not add dependencies unless they are clearly required.
6. Keep type safety, accessibility, and maintainability high.
7. Update directly affected documentation when behavior or setup changes.

## Next.js guidance for this project

- This project uses the **App Router**.
- Prefer **Server Components** by default.
- Use **Client Components** only when you need browser APIs, event handlers, local state, or client-side auth helpers.
- Route protection currently happens at the page level using `getServerSession(authOptions)`.
- Route handlers should follow App Router conventions and use the Web Request/Response model expected by the current Next.js version.
- Metadata should use the framework-supported `metadata` export or related APIs appropriate to this version.

Before changing framework-level patterns, check the local Next.js docs under `node_modules/next/dist/docs`.

## Domain guidance

When designing or naming new functionality, align it with these target concepts:

- Incident
- IncidentDetail
- IncidentStatus
- IncidentPriority
- IncidentCategory
- Tag
- Resolution
- RootCause
- Workaround
- Attachment
- Comment / Note
- User
- Team
- SimilarIncident
- Search
- Knowledge Base

Do not force all of these into the codebase at once. Introduce them only when the task needs them.

## Data and Prisma rules

- `prisma/schema.prisma` is the source of truth for data models.
- Do not edit `generated/prisma/` by hand.
- If the schema changes, keep migrations and seed behavior coherent.
- Be cautious with historical migrations: do not rewrite old migrations unless explicitly necessary and safe.
- Prefer additive, safe schema evolution.
- Seed data should be appropriate for local/internal development and must not leak real or production-sensitive identities.

## Authentication and security rules

- Keep the current credentials-based login flow stable unless a task explicitly changes it.
- Do not weaken password handling or replace hashing logic casually.
- Do not hardcode secrets.
- Use environment variables for runtime configuration where appropriate.
- Validate sensitive operations on the server, not just in the client.

## UI and UX rules

- Keep copy aligned with IncidentHub and the incident knowledge-base domain.
- Prefer simple, clear interfaces over placeholder-heavy screens.
- Preserve accessibility basics:
  - proper labels
  - button semantics
  - clear validation/error states
  - readable headings

## Code quality rules

- Prefer explicit, readable TypeScript.
- Reuse existing helpers and patterns before introducing new ones.
- Keep files focused and avoid unnecessary indirection.
- Do not leave dead code, stale naming, or product references from earlier concepts.
- Avoid comments unless they clarify non-obvious intent.

## Validation expectations

For meaningful application changes, prefer validating with the existing project commands:

- `npm run lint`
- `npm run build`

If auth, Prisma, or setup changes are involved, also consider whether the seed or local startup flow should be rechecked.

## Documentation expectations

Update documentation when changes affect:

- product terminology
- setup steps
- environment variables
- architecture direction
- seed/default development behavior

Keep documentation concise, accurate, and aligned with the actual implementation.
