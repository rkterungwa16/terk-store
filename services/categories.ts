import categories from "../data/categories.json";
import { Category } from "../types";

export function fetchCategories(): Category[] {
  return categories as Category[];
}
