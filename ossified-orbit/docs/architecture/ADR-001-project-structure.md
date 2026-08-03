# ADR-001: Project Structure

## Status

Accepted

## Date

2026-07-27

## Context

Project Logos is the Bible Hub powering the Christian Women Community platform.

The application is built using Astro 7 and TypeScript. As the project grows, clear separation of concerns is essential to keep the codebase maintainable, testable, and scalable.

## Decision

The project adopts the following structure:

src/
├── pages/
├── components/
├── lib/
├── content/
├── data/
├── scripts/
└── assets/

Supporting project documentation lives in:

docs/
├── architecture/
├── PROJECT_LOG.md
└── ROADMAP.md

Responsibilities:

- pages → Route composition
- components → User interface
- lib → Business logic
- scripts → Browser behaviour
- data → Static generated data
- content → Author-managed content

## Consequences

Business logic must never be implemented directly inside page files.

Components should remain presentation-focused.

Reusable functionality belongs in src/lib.

Interactive browser behaviour belongs in src/scripts.

Documentation evolves alongside the codebase.