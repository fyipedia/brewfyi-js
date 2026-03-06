# brewfyi

[![npm](https://img.shields.io/npm/v/brewfyi)](https://www.npmjs.com/package/brewfyi)
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
- [TypeScript Types](#typescript-types)
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

## TypeScript Types

```typescript
import type { SearchResult, GlossaryTerm, VarietyDetail, MethodDetail, ProcessingDetail, RoastDetail, CountryDetail, CompareResult, RandomResult } from "brewfyi";
```

## Learn More About Coffee

- **Reference**: [Varieties](https://brewfyi.com/varieties/) | [Origins](https://brewfyi.com/origins/) | [Brew Methods](https://brewfyi.com/methods/)
- **Guides**: [Coffee Guides](https://brewfyi.com/guides/) | [Glossary](https://brewfyi.com/glossary/)
- **API**: [Developer Docs](https://brewfyi.com/developers/) | [OpenAPI Spec](https://brewfyi.com/api/openapi.json)
- **Python**: [PyPI Package](https://pypi.org/project/brewfyi/)

## Also Available for Python

```bash
pip install brewfyi
```

See the [Python package on PyPI](https://pypi.org/project/brewfyi/).

## Beverage FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- world beverages from cocktails to sake.

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| cocktailfyi | [PyPI](https://pypi.org/project/cocktailfyi/) | [npm](https://www.npmjs.com/package/cocktailfyi) | 636 cocktails, ABV, calories -- [cocktailfyi.com](https://cocktailfyi.com/) |
| vinofyi | [PyPI](https://pypi.org/project/vinofyi/) | [npm](https://www.npmjs.com/package/vinofyi) | Wines, grapes, regions, food pairings -- [vinofyi.com](https://vinofyi.com/) |
| beerfyi | [PyPI](https://pypi.org/project/beerfyi/) | [npm](https://www.npmjs.com/package/beerfyi) | 112 beer styles, hops, malts -- [beerfyi.com](https://beerfyi.com/) |
| **brewfyi** | [PyPI](https://pypi.org/project/brewfyi/) | [npm](https://www.npmjs.com/package/brewfyi) | **72 coffee varieties, brew methods -- [brewfyi.com](https://brewfyi.com/)** |
| whiskeyfyi | [PyPI](https://pypi.org/project/whiskeyfyi/) | [npm](https://www.npmjs.com/package/whiskeyfyi) | 80 whiskey expressions, distilleries -- [whiskeyfyi.com](https://whiskeyfyi.com/) |
| teafyi | [PyPI](https://pypi.org/project/teafyi/) | [npm](https://www.npmjs.com/package/teafyi) | 60 tea varieties, teaware -- [teafyi.com](https://teafyi.com/) |
| nihonshufyi | [PyPI](https://pypi.org/project/nihonshufyi/) | [npm](https://www.npmjs.com/package/nihonshufyi) | 80 sake, rice varieties -- [nihonshufyi.com](https://nihonshufyi.com/) |

## License

MIT
