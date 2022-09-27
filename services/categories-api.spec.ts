import { CategoryNames } from "../enums";
import { fetchCategories } from "./categories";

describe("Categories api", () => {
  it("should return all categories", () => {
    const categories = fetchCategories();
    expect(categories.length).toEqual(3);
    expect(
      !!categories.find((_category) => _category.name === CategoryNames.WOMEN)
    ).toBeTruthy();
    expect(
      !!categories.find((_category) => _category.name === CategoryNames.MEN)
    ).toBeTruthy();
    expect(
      !!categories.find((_category) => _category.name === CategoryNames.KIDS)
    ).toBeTruthy();
  });
});
