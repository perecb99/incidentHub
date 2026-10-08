# IncidentHub web application

This directory contains the current IncidentHub application.

IncidentHub is intended to centralize the knowledge generated while resolving incidents, operational problems, and internal support queries. The project is still in an early stage, and the main implemented functionality today is the authentication foundation.

## Current scope

- Next.js application shell
- credentials-based login with NextAuth
- Prisma + PostgreSQL integration
- protected home page

## Getting started

### Before each start

The application authenticates users against PostgreSQL hosted on Railway. Before running the development server:

1. Open Railway and make sure the PostgreSQL service is running and available.
2. Check that `DATABASE_URL` in `.env` points to that database.
3. If a VPN or proxy is enabled, disable it or configure it to bypass the Railway database host and port. A proxy can block the PostgreSQL connection even when the app starts normally.
4. From this directory, verify database connectivity and migration status:

	```bash
	npx prisma migrate status
	```

	Continue only when Prisma can reach the database. If it reports `P1001`, check that Railway is active and that the proxy or VPN is not blocking the connection.

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
