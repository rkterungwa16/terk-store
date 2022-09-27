import path from "path";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import {
  fetchProducts,
} from "../../../services/products";
import { FetchProductResponse } from "../../../types";

type Data = {
  data: FetchProductResponse[];
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
