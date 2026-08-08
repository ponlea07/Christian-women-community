# Project Logos Architecture

## Mission

Project Logos is a static-first, engine-driven Bible platform designed to power multiple Christian applications through reusable, framework-agnostic TypeScript libraries.

---

## Vision

Rather than building a single Bible website, Project Logos builds reusable engines that can power:

- Christian Women Community
- Teen Bible
- Children's Bible
- Future Christian applications

---

## Architecture

Project Logos is divided into three layers.

### Data Layer

Bible translations

Search indexes

Metadata

Study resources

Reading plans

Cross references

---

### Engine Layer

Bible Engine

Search Engine

Pagination Engine

Navigation Engine

Storage Engine

Future Study Engine

---

### Presentation Layer

Astro pages

Components

Layouts

Styles

The presentation layer consumes engines.

Engines never depend on presentation.

# Christian Women Community
## Architecture Guidelines

> This document captures architectural decisions and conventions to keep the project consistent as it grows.

---

## Project Structure

### `src/content/`

Contains structured domain content and data models.

Examples:

- Bible metadata
- Books
- Verse highlight models
- Featured content
- Programs
- Resources
- Testimonials

This folder answers:

> "What is the application's data?"

---

### `src/lib/`

Contains application logic and services.

Examples:

- Bible repository
- Search
- Navigation
- Daily Verse
- Loaders

This folder answers:

> "What does the application do with the data?"

---

## Feature Modules

As new Bible features are added, group related files together.

Example:

src/content/bible/
    verse-highlights/
        index.ts
        types.ts
        verse-highlights.ts

Each feature owns its:

- Types
- Models
- Helpers
- Public exports

---

## Naming Conventions

Keep names descriptive and consistent.

Examples:

- repository.ts
- search.ts
- navigation.ts
- verse-highlights.ts

Avoid unnecessary renaming of working code unless it provides clear architectural value.

---

## Guiding Principle

> Don't refactor working code simply because it can look nicer.

Refactor only when it:

- Improves maintainability
- Removes duplication
- Simplifies future development
- Solves a real problem

Otherwise, continue building features.