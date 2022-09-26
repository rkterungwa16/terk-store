import path from "path";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import {
  fetchProducts,
  FetchProductsResponse,
} from "../../../services/products";

type Data = {
  data: FetchProductsResponse[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { category, currency } = req.query as {
    category: string;
    currency: string;
  };
  res.status(200).json({
    data: fetchProducts(category, currency),
  });
}
