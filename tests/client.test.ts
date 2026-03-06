import { describe, expect, it } from "vitest";
import { BrewFYI } from "../src/index.js";

describe("BrewFYI", () => {
  it("can be instantiated with default base URL", () => {
    const api = new BrewFYI();
    expect(api).toBeInstanceOf(BrewFYI);
  });

  it("can be instantiated with custom base URL", () => {
    const api = new BrewFYI("http://localhost:8031");
    expect(api).toBeInstanceOf(BrewFYI);
  });

  it("has search method", () => {
    const api = new BrewFYI();
    expect(typeof api.search).toBe("function");
  });

  it("has glossaryTerm method", () => {
    const api = new BrewFYI();
    expect(typeof api.glossaryTerm).toBe("function");
  });

  it("has variety method", () => {
    const api = new BrewFYI();
    expect(typeof api.variety).toBe("function");
  });

  it("has method method", () => {
    const api = new BrewFYI();
    expect(typeof api.method).toBe("function");
  });

  it("has processing method", () => {
    const api = new BrewFYI();
    expect(typeof api.processing).toBe("function");
  });

  it("has roast method", () => {
    const api = new BrewFYI();
    expect(typeof api.roast).toBe("function");
  });

  it("has country method", () => {
    const api = new BrewFYI();
    expect(typeof api.country).toBe("function");
  });

  it("has compare method", () => {
    const api = new BrewFYI();
    expect(typeof api.compare).toBe("function");
  });

  it("has random method", () => {
    const api = new BrewFYI();
    expect(typeof api.random).toBe("function");
  });
});
