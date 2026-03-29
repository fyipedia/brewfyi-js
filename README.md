# brewfyi

[![npm version](https://agentgif.com/badge/npm/brewfyi/version.svg)](https://www.npmjs.com/package/brewfyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/brewfyi)

TypeScript API client for [BrewFYI](https://brewfyi.com) -- the complete coffee reference with 72 coffee varieties, 21 brew methods, 20 origin countries, and 120 expert guides covering Arabica genetics, processing methods, SCA cupping protocols, and roast profiling. Zero dependencies, uses native `fetch`.

> **Explore coffee at [brewfyi.com](https://brewfyi.com)** -- [Varieties](https://brewfyi.com/varieties/) | [Brew Methods](https://brewfyi.com/methods/) | [Origins](https://brewfyi.com/origins/) | [API Docs](https://brewfyi.com/developers/)

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
  - [Coffee Species and Varieties](#coffee-species-and-varieties)
  - [Processing Methods](#processing-methods)
  - [Brew Methods](#brew-methods)
  - [Roast Levels](#roast-levels)
- [API Reference](#api-reference)
- [REST API (No Auth Required)](#rest-api-no-auth-required)
- [TypeScript Types](#typescript-types)
- [Features](#features)
- [Learn More About Coffee](#learn-more-about-coffee)
- [Also Available for Python](#also-available-for-python)
- [Beverage FYI Family](#beverage-fyi-family)
- [License](#license)

## Install

```bash
npm install brewfyi
```

Works in Node.js, Deno, Bun, and browsers (ESM).

## Quick Start

```typescript
import { BrewFYI } from "brewfyi";

const api = new BrewFYI();

// Search varieties, brew methods, origins, glossary
const results = await api.search("espresso");

// Get coffee variety detail
const gesha = await api.variety("gesha");
console.log(gesha.flavor_profile); // ["jasmine", "bergamot", "peach"]

// Get brew method parameters
const v60 = await api.method("v60");
console.log(v60.brew_time, v60.grind_size);

// Compare two varieties
const comparison = await api.compare("gesha", "bourbon");
```

## What You Can Do

### Coffee Species and Varieties

All commercial coffee comes from two primary species: **Coffea arabica** (60-70% of world production) and **Coffea canephora** (Robusta, 30-40%). BrewFYI catalogs 72 distinct varieties with genetic lineage, flavor profiles, and growing requirements.

| Category | Notable Varieties | Characteristics |
|----------|------------------|-----------------|
| Ethiopian Heirlooms | Gesha, Yirgacheffe Landrace | Floral, jasmine, bergamot |
| Bourbon Lineage | Bourbon, Caturra, Catuai | Sweet, balanced, caramel |
| Typica Lineage | Typica, Blue Mountain, Kona | Clean, sweet, mild body |
| Hybrid/Modern | Castillo, Catimor | Disease resistant |
| Robusta | Robusta, Conilon | High caffeine, earthy |

### Processing Methods

Post-harvest processing dramatically affects flavor. The same cherry processed differently produces entirely different cup profiles:

| Method | Flavor Impact |
|--------|---------------|
| Washed | Clean, bright acidity, clarity |
| Natural | Fruity, wine-like, heavy body |
| Honey | Sweet, balanced, complex |
| Anaerobic | Intense, unique fermentation |

### Brew Methods

21 brewing methods with optimal parameters for water temperature, grind size, brew ratio, and extraction time:

| Method | Type | Brew Time | Best For |
|--------|------|-----------|----------|
| Espresso | Pressure (9 bar) | 25-30s | Concentrated, crema |
| Pour Over (V60) | Drip | 2:30-3:30 | Clarity, origin character |
| French Press | Immersion | 4:00 | Full body, oils |
| Cold Brew | Cold immersion | 12-24h | Smooth, low acidity |

### Roast Levels

| Level | Internal Temp | Characteristics |
|-------|--------------|-----------------|
| Light | 180-205C | Bright acidity, floral, fruity |
| Medium | 220-230C | Balanced body, chocolate, nuts |
| Dark | 240C+ | Smoky, bitter, minimal origin character |

## API Reference

| Method | Description |
|--------|-------------|
| `search(query)` | Search varieties, methods, origins, glossary |
| `glossaryTerm(slug)` | Get glossary term definition |
| `variety(slug)` | Coffee variety detail with genetics, flavor |
| `method(slug)` | Brew method detail with parameters |
| `processing(slug)` | Processing method detail |
| `roast(slug)` | Roast level detail |
| `country(slug)` | Origin country detail |
| `compare(slugA, slugB)` | Compare varieties or methods |
| `random()` | Random coffee variety |

## REST API (No Auth Required)

All endpoints are free, require no authentication, and return JSON with CORS enabled.

```bash
# Search coffees, origins, methods
curl "https://brewfyi.com/api/v1/search/?q=ethiopian"

# Coffee variety detail
curl ""

# Origin detail
curl ""

# Brew method detail
curl ""

# Compare two coffees
curl ""

# Random coffee
curl ""
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/coffee/` | List all 72 coffee varieties |
| GET | `/api/v1/coffee/{slug}/` | Coffee variety detail |
| GET | `/api/v1/origin/` | List all origin countries |
| GET | `/api/v1/origin/{slug}/` | Origin detail with regions, altitude |
| GET | `/api/v1/method/` | List all brew methods |
| GET | `/api/v1/method/{slug}/` | Brew method detail |
| GET | `/api/v1/glossary/{slug}/` | Glossary term definition |
| GET | `/api/v1/search/?q={query}` | Search across all content |
| GET | `/api/v1/compare/{slug1}/{slug2}/` | Compare two coffees |
| GET | `/api/v1/random/` | Random coffee variety |
| GET | `/api/v1/openapi.json` | OpenAPI 3.1.0 specification |

Full spec: ## TypeScript Types

```typescript
import type { SearchResult, GlossaryTerm, VarietyDetail, MethodDetail, ProcessingDetail, RoastDetail, CountryDetail, CompareResult, RandomResult } from "brewfyi";
```

## Features

- **Comprehensive coffee data**: 72 varieties, origin countries, brew methods, roast levels
- **SCA cupping scores**: Specialty coffee grading and flavor notes
- **Method comparison**: Side-by-side analysis of brew methods
- **Coffee glossary**: Specialty coffee terminology
- **Zero dependencies**: Uses native `fetch`, no runtime deps
- **Type-safe**: Full TypeScript with strict mode
- **Tree-shakeable**: ESM with named exports

## Learn More About Coffee

Visit [brewfyi.com](https://brewfyi.com/) to explore 72 coffee varieties, 21 brew methods, origin profiles, and processing science with interactive tools.

## Also Available for Python

```bash
pip install brewfyi
```

See [brewfyi on PyPI](https://pypi.org/project/brewfyi/) for the Python package with API client, CLI, and MCP server.

<p align="center">
  <img src="demo.gif" alt="BrewFYI demo -- coffee API client for TypeScript" width="800">
</p>

## Beverage FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- world beverages from cocktails to sake.

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| cocktailfyi | [PyPI](https://pypi.org/project/cocktailfyi/) | [npm](https://www.npmjs.com/package/cocktailfyi) | 636 cocktails, ABV, calories -- [cocktailfyi.com](https://cocktailfyi.com/) |
| vinofyi | [PyPI](https://pypi.org/project/vinofyi/) | [npm](https://www.npmjs.com/package/vinofyi) | Wines, grapes, regions, food pairings -- [vinofyi.com](https://vinofyi.com/) |
| beerfyi | [PyPI](https://pypi.org/project/beerfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/beerfyi) | 112 beer styles, hops, malts -- [beerfyi.com](https://beerfyi.com/) |
| **brewfyi** | [PyPI](https://pypi.org/project/brewfyi/) | [npm](https://www.npmjs.com/package/brewfyi) | **72 coffee varieties, brew methods -- [brewfyi.com](https://brewfyi.com/)** |
| whiskeyfyi | [PyPI](https://pypi.org/project/whiskeyfyi/) | [npm](https://www.npmjs.com/package/whiskeyfyi) | 80 whiskey expressions, distilleries -- [whiskeyfyi.com](https://whiskeyfyi.com/) |
| teafyi | [PyPI](https://pypi.org/project/teafyi/) | [npm](https://www.npmjs.com/package/teafyi) | 60 tea varieties, teaware -- [teafyi.com](https://teafyi.com/) |
| nihonshufyi | [PyPI](https://pypi.org/project/nihonshufyi/) | [npm](https://www.npmjs.com/package/nihonshufyi) | 80 sake, rice varieties -- [nihonshufyi.com](https://nihonshufyi.com/) |

## Embed Widget

Embed [BrewFYI](https://brewfyi.com) widgets on any website with [brewfyi-embed](https://widget.brewfyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/brewfyi-embed@1/dist/embed.min.js"></script>
<div data-brewfyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.brewfyi.com)

## License

MIT
