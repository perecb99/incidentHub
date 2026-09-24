# IncidentHub

IncidentHub is an internal application for centralizing the knowledge generated during the handling of incidents, problems, questions, and operational requests received by a team.

It allows cases to be recorded with a high level of detail so the organization can progressively build a reusable knowledge base. When a new incident arrives, the goal is to quickly locate similar historical cases and review how they were investigated, diagnosed, and resolved.

## Main objectives

- Centralize incoming incidents and operational queries.
- Document context, investigation, and resolution.
- Facilitate searches across historical incidents.
- Reduce repeated investigations.
- Reuse previous solutions.
- Build a living knowledge base.
- Prepare the foundation for future semantic search and AI-assisted similarity detection.

## Status

The project is currently in an early stage of development.

At the moment, the main implemented pieces are:

- the Next.js application base;
- Prisma and PostgreSQL integration;
- the authentication and login flow.

The repository has been conceptually realigned to IncidentHub so functional development can continue on a clean and coherent base.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth

## Repository structure

- `web/`: application source code
- `docs/`: supporting project documentation

## Development

For local setup, development commands, and the current seed user, see `web/README.md`.
