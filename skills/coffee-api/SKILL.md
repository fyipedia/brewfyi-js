---
name: coffee-api
description: Search coffee varieties, brew methods, processing, roasting, and coffee terminology. Use when working with coffee data, barista tools, or specialty coffee applications.
license: MIT
metadata:
  author: fyipedia
  version: "0.1.0"
  homepage: "https://brewfyi.com"
---

# BrewFYI -- Coffee API for AI Agents

TypeScript API client for brewfyi.com. Search 72 coffee varieties, 21 brew methods, 20 origin countries, processing methods, roast levels, and coffee terminology. Zero dependencies.

**Install**: `npm install brewfyi` -- **Web**: [brewfyi.com](https://brewfyi.com/) -- **API**: [REST API](https://brewfyi.com/developers/) -- **PyPI**: `pip install brewfyi`

## When to Use

- User asks about coffee varieties, Arabica vs Robusta, or origin profiles
- User needs brew method parameters (temperature, grind, ratio, time)
- User wants to compare coffee varieties or processing methods
- User is building a coffee recipe or recommendation tool
- User needs coffee terminology definitions

## Tools

### `search(query) -> SearchResult`

Search across coffee varieties, brew methods, origins, and glossary terms.

```typescript
import { BrewFYI } from "brewfyi";
const api = new BrewFYI();
const results = await api.search("espresso");
```

### `glossaryTerm(slug) -> GlossaryTerm`

Look up coffee terminology by slug.

```typescript
const term = await api.glossaryTerm("extraction");
console.log(term.definition);
```

### `variety(slug) -> VarietyDetail`

Get coffee variety detail with genetics, flavor profile, and growing conditions.

```typescript
const variety = await api.variety("gesha");
console.log(variety.flavor_profile); // ["jasmine", "bergamot", "peach"]
```

### `method(slug) -> MethodDetail`

Get brew method detail with optimal parameters.

```typescript
const method = await api.method("v60");
console.log(method.brew_time, method.grind_size);
```

### `compare(slugA, slugB) -> CompareResult`

Compare two coffee varieties or brew methods.

```typescript
const comparison = await api.compare("v60", "chemex");
```

## REST API (No Auth Required)

```bash
curl https://brewfyi.com/api/search/?q=espresso
curl https://brewfyi.com/api/variety/gesha/
curl https://brewfyi.com/api/method/v60/
curl https://brewfyi.com/api/term/extraction/
curl https://brewfyi.com/api/random/
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/variety/{slug}/` | Coffee variety detail with genetics, flavor |
| GET | `/api/method/{slug}/` | Brew method detail with parameters |
| GET | `/api/origin/{slug}/` | Origin country detail with regions, profile |
| GET | `/api/term/{slug}/` | Coffee glossary term definition |
| GET | `/api/search/?q={query}` | Search varieties, methods, origins |
| GET | `/api/compare/?a={slug}&b={slug}` | Compare two varieties or methods |
| GET | `/api/random/` | Random coffee variety |
| GET | `/api/openapi.json` | OpenAPI 3.1.0 specification |

Full spec: [OpenAPI 3.1.0](https://brewfyi.com/api/openapi.json)

## Coffee Species

| Species | Share | Altitude | Flavor | Caffeine |
|---------|-------|----------|--------|----------|
| Arabica | ~60% | 600-2000m | Complex, fruity, acidic | 1.2% |
| Robusta | ~35% | 0-800m | Earthy, bitter, strong | 2.2% |
| Liberica | ~3% | 200-600m | Floral, woody, smoky | 1.4% |
| Excelsa | ~1% | 300-1000m | Tart, dark fruit | 1.0% |
| Eugenioides | Rare | 1500-2500m | Very sweet, low caffeine | 0.2% |

## Processing Methods

| Method | Description | Flavor Impact |
|--------|-------------|---------------|
| Washed | Pulped, fermented, washed | Clean, bright acidity |
| Natural | Dried in cherry | Fruity, wine-like, heavy body |
| Honey | Partial mucilage left | Sweet, balanced |
| Wet-hulled | Hulled while wet | Earthy, herbal, low acidity |
| Anaerobic | Sealed fermentation | Complex, exotic flavors |

## Brew Methods

| Method | Ratio | Temperature | Time | Grind |
|--------|-------|-------------|------|-------|
| Espresso | 1:2 | 90-96C | 25-30s | Fine |
| Pour Over (V60) | 1:15 | 92-96C | 2:30-3:30 | Medium |
| French Press | 1:15 | 93-96C | 4:00 | Coarse |
| AeroPress | 1:12 | 80-95C | 1:00-2:00 | Fine-Medium |
| Cold Brew | 1:8 | Room temp | 12-24h | Extra Coarse |

## Demo

![BrewFYI demo](https://raw.githubusercontent.com/fyipedia/brewfyi-js/main/demo.gif)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com): [CocktailFYI](https://cocktailfyi.com), [VinoFYI](https://vinofyi.com), [BeerFYI](https://beerfyi.com), [WhiskeyFYI](https://whiskeyfyi.com), [TeaFYI](https://teafyi.com), [NihonshuFYI](https://nihonshufyi.com).
