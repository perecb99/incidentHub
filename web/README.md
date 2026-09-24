# IncidentHub web application

This directory contains the current IncidentHub application.

IncidentHub is intended to centralize the knowledge generated while resolving incidents, operational problems, and internal support queries. The project is still in an early stage, and the main implemented functionality today is the authentication foundation.

## Current scope

- Next.js application shell
- credentials-based login with NextAuth
- Prisma + PostgreSQL integration
- protected home page

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The application lives in this `web/` directory, so all runtime, Prisma, lint, and build commands should be executed from here.

## Environment variables

The application currently expects:

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## Useful commands

```bash
npm run dev
npm run lint
npm run build
```

## Seed data

The Prisma seed creates a default admin user for local development.

- Email: `admin@incidenthub.local`
- Password: `admin123`

Review `prisma/seed.ts` before using it in shared environments.

## Typical local verification flow

From `web/`:

```bash
npm install
npm run lint
npm run build
npm run dev
```

If you need to recreate local data, run the Prisma seed from this directory after your database is ready.
