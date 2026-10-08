# IncidentHub repository guide

IncidentHub is an internal application for preserving and reusing knowledge generated while handling incidents, problems, operational questions, and support requests.

## Repository layout

- `web/` contains the executable application.
- `web/AGENTS.md` contains the detailed coding-agent guidance for application work.
- `README.md` and `docs/architecture.md` describe the product and architecture direction.
- `temp.txt` is the repository-level living context file.

## Persistent context

Consider `temp.txt` before tasks that depend on prior decisions, project history, current direction, or context from previous sessions.

Treat `temp.txt` as intentional project memory, not disposable scratch. Do not delete, truncate, or rewrite it unless explicitly requested.

Update `temp.txt` only when requested, at the end of a working session, or when preserving durable decisions, current state, next steps, or unresolved questions.

## Working location

Run application, Prisma, lint, build, and development commands from `web/`.

For implementation details and project-specific engineering rules, follow `web/AGENTS.md`.
