/**
 * BrewFYI API client -- TypeScript wrapper for brewfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

import type {
  CompareResult,
  CountryDetail,
  GlossaryTerm,
  MethodDetail,
  ProcessingDetail,
  RandomResult,
  RoastDetail,
  SearchResult,
  VarietyDetail,
} from "./types.js";

export class BrewFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://brewfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search coffee varieties, brew methods, origins, and glossary terms. */
  async search(query: string): Promise<SearchResult> {
    return this.get<SearchResult>("/api/search/", { q: query });
  }

  /** Get a glossary term by slug. */
  async glossaryTerm(slug: string): Promise<GlossaryTerm> {
    return this.get<GlossaryTerm>(`/api/term/${slug}/`);
  }

  /** Get coffee variety detail by slug. */
  async variety(slug: string): Promise<VarietyDetail> {
    return this.get<VarietyDetail>(`/api/variety/${slug}/`);
  }

  /** Get brew method detail by slug. */
  async method(slug: string): Promise<MethodDetail> {
    return this.get<MethodDetail>(`/api/method/${slug}/`);
  }

  /** Get processing method detail by slug. */
  async processing(slug: string): Promise<ProcessingDetail> {
    return this.get<ProcessingDetail>(`/api/processing/${slug}/`);
  }

  /** Get roast level detail by slug. */
  async roast(slug: string): Promise<RoastDetail> {
    return this.get<RoastDetail>(`/api/roast/${slug}/`);
  }

  /** Get origin country detail by slug. */
  async country(slug: string): Promise<CountryDetail> {
    return this.get<CountryDetail>(`/api/country/${slug}/`);
  }

  /** Compare two coffee varieties or brew methods. */
  async compare(slugA: string, slugB: string): Promise<CompareResult> {
    return this.get<CompareResult>("/api/compare/", {
      a: slugA,
      b: slugB,
    });
  }

  /** Get a random coffee variety. */
  async random(): Promise<RandomResult> {
    return this.get<RandomResult>("/api/random/");
  }
}
