import path from "path";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchCategories } from "../../services/categories";
import { Category } from "../../types";

type Data = {
  data: Category[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchCategories(),
  });
}
