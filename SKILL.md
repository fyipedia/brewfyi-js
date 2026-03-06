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

Full spec: [OpenAPI 3.1.0](https://brewfyi.com/api/openapi.json)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com): [CocktailFYI](https://cocktailfyi.com), [VinoFYI](https://vinofyi.com), [BeerFYI](https://beerfyi.com), [WhiskeyFYI](https://whiskeyfyi.com), [TeaFYI](https://teafyi.com), [NihonshuFYI](https://nihonshufyi.com).
