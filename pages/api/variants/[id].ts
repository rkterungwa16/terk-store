import path from "path";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchVariant } from '../../../services/variants';
import { FetchVariantResponse } from "../../../types";


type Data = {
  data: FetchVariantResponse;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, currency } = req.query as { id: string; currency: string };

  res.status(200).json({
    data: fetchVariant(id, currency),
  });
}
