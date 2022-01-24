// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPlaiceholder } from "plaiceholder";
import type { NextApiRequest, NextApiResponse } from "next";

export default function generateBlur(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { imgUrl } = req.body;
    getPlaiceholder(imgUrl).then(({ base64 }) => {
      return res.status(200).json({
        base64,
      });
    });
  } else {
    return res.json({
      message: "API for using plaiceholder",
    });
  }
}
