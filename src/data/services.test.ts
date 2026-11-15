import { describe, expect, it } from "vitest";
import { buildJsonLd, hairPage, nailsPage, offersOf } from "./services";

const price = (page: typeof hairPage, name: string) => offersOf(page).find((o) => o.name === name)?.price;

describe("service prices", () => {
  it("semi-permanent manicure is 23€", () => expect(price(nailsPage, "Μανικιούρ πλήρες με ημιμόνιμο χρώμα")).toBe(23));
  it("long-hair balayage is 90€", () => expect(price(hairPage, "Balayage μακριά μαλλιά")).toBe(90));
  it("long-hair press styling is 25€", () => expect(price(hairPage, "Χτένισμα με πρέσα, μακριά μαλλιά")).toBe(25));
  it("FAQ JSON-LD has one question per FAQ", () =>
    expect((buildJsonLd(hairPage)[0] as { mainEntity: unknown[] }).mainEntity).toHaveLength(6));
});
