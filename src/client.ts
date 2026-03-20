/**
 * BrewFYI API client — TypeScript wrapper for brewfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 *
 * @example
 * ```ts
 * import { BrewFYI } from "brewfyi";
 * const api = new BrewFYI();
 * const items = await api.search("query");
 * ```
 */

/** Generic API response type. */
export interface ApiResponse {
  [key: string]: unknown;
}

export class BrewFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://brewfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T = ApiResponse>(
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

  // -- Endpoints ----------------------------------------------------------

  /** List all brew methods. */
  async listBrewMethods(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/brew-methods/", params);
  }

  /** Get brew method by slug. */
  async getBrewMethod(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/brew-methods/${slug}/`);
  }

  /** List all countries. */
  async listCountries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/countries/", params);
  }

  /** Get country by slug. */
  async getCountry(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/countries/${slug}/`);
  }

  /** List all faqs. */
  async listFaqs(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/faqs/", params);
  }

  /** Get faq by slug. */
  async getFaq(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/faqs/${slug}/`);
  }

  /** List all glossary. */
  async listGlossary(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary/", params);
  }

  /** Get term by slug. */
  async getTerm(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary/${slug}/`);
  }

  /** List all guides. */
  async listGuides(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/guides/", params);
  }

  /** Get guide by slug. */
  async getGuide(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/guides/${slug}/`);
  }

  /** List all processing methods. */
  async listProcessingMethods(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/processing-methods/", params);
  }

  /** Get processing method by slug. */
  async getProcessingMethod(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/processing-methods/${slug}/`);
  }

  /** List all regions. */
  async listRegions(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/regions/", params);
  }

  /** Get region by slug. */
  async getRegion(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/regions/${slug}/`);
  }

  /** List all roast levels. */
  async listRoastLevels(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/roast-levels/", params);
  }

  /** Get roast level by slug. */
  async getRoastLevel(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/roast-levels/${slug}/`);
  }

  /** List all species. */
  async listSpecies(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/species/", params);
  }

  /** Get specy by slug. */
  async getSpecy(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/species/${slug}/`);
  }

  /** List all tools. */
  async listTools(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tools/", params);
  }

  /** Get tool by slug. */
  async getTool(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tools/${slug}/`);
  }

  /** List all varieties. */
  async listVarieties(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/varieties/", params);
  }

  /** Get variety by slug. */
  async getVariety(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/varieties/${slug}/`);
  }

  /** Search across all content. */
  async search(query: string, params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/search/", { q: query, ...params });
  }
}
