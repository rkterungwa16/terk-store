import { fetchProducts } from "./products";

describe("Products api", () => {
  it("should return products for women", () => {
    const products = fetchProducts("women", "USD");
    expect(products[0].variant?.product?.category).toEqual(
      "f5a1e97f-50fe-45ba-8329-fc037c321d9d"
    );
  });
});
