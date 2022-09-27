import path from "path";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchCurrencies } from "../../services/currencies";
import { Currency } from "../../types";

type Data = {
  data: Currency[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchCurrencies(),
  });
}
