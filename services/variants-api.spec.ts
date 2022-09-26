import { fetchVariant } from "./variants";

describe("Variants api", () => {
  it("should return a selected variant", () => {
    const variant = fetchVariant("37d7e24b-84fd-4f80-b918-e13f1b0ecfd8", "USD");
    expect(variant.color.name).toEqual("navy");
    expect(variant.color.hexCode).toEqual("#191a26");
  });
});
