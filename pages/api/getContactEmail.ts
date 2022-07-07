import { NextRequest } from "next/server";

export default function handler(req: NextRequest, res: any) {
  res.status(200).json({ email: "info@seekpharma.com" });
}
