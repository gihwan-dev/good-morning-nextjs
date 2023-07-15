import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getSentenceHandler } from "./handler";

export interface GetSentenceDTO {
  sentence: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const jwt = await getServerSession();

    if (!jwt || !jwt.user || !jwt.user.email) {
      return NextResponse.json(
        { message: "can not found user information." },
        { status: 404 },
      );
    }

    const data = (await req.json()) as GetSentenceDTO | null;

    if (!data || !data.sentence) {
      return NextResponse.json(
        { message: "please send valid value." },
        { status: 404 },
      );
    }

    const result = await getSentenceHandler(jwt.user.email, data.sentence);

    if (!result.ok) {
      throw new Error("Can't add sentence.");
    }

    return NextResponse.json(
      { message: "Create sentence successfully." },
      { status: 200 },
    );
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return NextResponse.json({ message }, { status: 400 });
  }
}
