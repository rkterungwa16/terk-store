import currencies from "../data/currencies.json";
import { Currency } from "../types";

export function fetchCurrencies(): Currency[] {
  return currencies as Currency[];
}
