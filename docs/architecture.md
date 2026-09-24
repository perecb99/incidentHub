# IncidentHub - Architecture

## Purpose

IncidentHub is intended to become the internal knowledge base for incidents, problems, operational questions, and support cases handled by the team.

The application should help transform resolved incidents into reusable knowledge that can accelerate future diagnosis and resolution.

## Current implementation scope

The codebase is still in an early phase. Today, the implemented foundation is mainly:

- authentication and login;
- a protected application shell;
- Prisma and PostgreSQL integration;
- an initial user model.

The incident-management domain is not fully implemented yet.

## Stack

- Next.js (App Router)
- PostgreSQL
- Prisma
- NextAuth
- Tailwind CSS

## High-level architecture

User → Next.js application → NextAuth / server routes → Prisma → PostgreSQL

## Product principles

### Traceability

The system should preserve the full lifecycle of an incident, from intake to final resolution.

### Maximum context

An incident record should remain useful months or years later, so the model must support storing rich operational context.

### Knowledge reuse

Resolved incidents should become reusable knowledge, not just closed tickets.

### Intelligent search

A future core capability will be finding similar historical incidents from a new description and its context, potentially using semantic search or AI-based similarity.

### Functional scalability

The architecture should allow gradual growth into richer search, suggestions, metrics, dashboards, and integrations without forcing those features prematurely.

## Target domain concepts

These concepts are expected to shape future development, even if they are not all implemented yet:

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

## Near-term module direction

- Authentication and access control
- Incident intake and storage
- Incident detail and investigation history
- Search across historical incidents
- Knowledge-oriented resolution records

## Current data model

### User

- id
- name
- email
- passwordHash
- role

## Suggested next implementation phase

1. Define the first Incident-focused Prisma models.
2. Add a minimal authenticated incident list/create flow.
3. Start capturing structured incident context and resolution data.
