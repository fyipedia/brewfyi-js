/**
 * BrewFYI API response types.
 */

export interface SearchResult {
  results: Array<{ name: string; slug: string; type: string; url: string }>;
  query: string;
  total: number;
}

export interface GlossaryTerm {
  name: string;
  slug: string;
  definition: string;
  related_terms?: string[];
}

export interface VarietyDetail {
  slug: string;
  name: string;
  species?: string;
  description: string;
  origin?: string;
  flavor_profile?: string[];
  altitude_range?: string;
  processing?: string[];
  url: string;
}

export interface MethodDetail {
  slug: string;
  name: string;
  description: string;
  brew_time?: string;
  grind_size?: string;
  water_temp?: string;
  url: string;
}

export interface ProcessingDetail {
  slug: string;
  name: string;
  description: string;
  flavor_impact?: string;
  url: string;
}

export interface RoastDetail {
  slug: string;
  name: string;
  description: string;
  internal_temp?: string;
  characteristics?: string[];
  url: string;
}

export interface CountryDetail {
  slug: string;
  name: string;
  description: string;
  altitude_range?: string;
  harvest_season?: string;
  url: string;
}

export interface CompareResult {
  item_a: { name: string; slug: string };
  item_b: { name: string; slug: string };
  comparison: Record<string, unknown>;
}

export interface RandomResult {
  slug: string;
  name: string;
  type: string;
  url: string;
}
