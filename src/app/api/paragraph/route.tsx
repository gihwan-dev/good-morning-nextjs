import { NextRequest } from "next/server";

export interface CreateParagraph {
  text: string;
}

export async function POST(req: NextRequest) {
  const data: CreateParagraph = await req.json();
}
