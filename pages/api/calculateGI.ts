// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { calculateGI } from "./helpers/calculateGIFormula";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { con, pow, eye, speed, field, grade } = req.body;

  const result = calculateGI(con, pow, eye, speed, field, grade);
  res.status(200).json(result);
}
