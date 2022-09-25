// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const products = [
  {
    name: "Fine Knit Sweater with V-Neck",
    brand: "ANNE WEYBURN",
    category: "women",
    description:
      "A classic, ultra soft and sophisticated v-neck jumper/sweater in lovely acrylic reminiscent of the soft feel of cashmere. Pretty gathers on the shoulders. Long sleeves with ribbed edging.",
  },
  {
    name: "Basic Cardigan",
    brand: "LA REDOUTE COLLECTIONS",
    category: "women",
    description:
      "This v-neck cardigan is a staple of feminine dressing. We love its flattering v-neck.",
  },
  {
    name: "Cotton Long Sleeve Sweater with Ruffled High Neck",
    brand: "LA REDOUTE COLLECTIONS",
    category: "women",
    description: `Ruffled cuffs and a high neck give this jumper/sweater a feminine, flattering look that's just perfect with any outfit. Wear it under a blazer, with bermuda shorts, skirts or trousers. We love the delicate girly detailing.`,
  },
  {
    name: "Merino Wool Turtleneck Sweater",
    brand: "LA REDOUTE COLLECTIONS",
    category: "men",
    description: ""
  },
  {
    name: "Cotton Mix Hoodie with Zip Fastening",
    brand: "LA REDOUTE COLLECTIONS",
    category: "men",
    description: "",
  },
  {
    name: "Chunky Knit Sweater with Half Zip",
    category: "kids"
  },
  {
    name: "Cotton Mix Zip-Up Hoodie",
    category: "kids"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
