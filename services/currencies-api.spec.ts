import { Currencies } from "../enums";
import { fetchCurrencies } from "./currencies";

describe("Currencies api", () => {
  it("should return all currencies", () => {
    const currencies = fetchCurrencies();
    expect(currencies.length).toEqual(3);
    expect(
      !!currencies.find((_currency) => _currency.code === Currencies.EUR)
    ).toBeTruthy();
    expect(
      !!currencies.find((_currency) => _currency.code === Currencies.JPY)
    ).toBeTruthy();
    expect(
      !!currencies.find((_currency) => _currency.code === Currencies.USD)
    ).toBeTruthy();
  });
});
