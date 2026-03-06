/**
 * brewfyi -- TypeScript API client for BrewFYI.
 *
 * Search coffee varieties, brew methods, origins, and coffee terminology
 * from brewfyi.com. Zero dependencies, uses native `fetch`.
 *
 * @example
 * ```ts
 * import { BrewFYI } from "brewfyi";
 *
 * const api = new BrewFYI();
 * const results = await api.search("espresso");
 * console.log(results);
 * ```
 *
 * @packageDocumentation
 */

export { BrewFYI } from "./client.js";

export type {
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
