import { Session, getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { createSentenceHandler, getSentenceHandler } from "./handler";
import { STATUS_CODES } from "http";
import { StatusCodes } from "http-status-codes";

export interface PostSentenceDTO {
  sentence: string;
}

type SessionWithUser = Session & {
  user: {
    email: string;
  };
};

const checkJwtExisting = (jwt: Session | null): jwt is SessionWithUser => {
  return !!(jwt && jwt.user && jwt.user.email);
  /*
  !! 연산자의 사용 이유는 우선 해당 return 문을 불리언 값으로 변경 후 이를 한번 더 역전시켜 값의 불리언값을 반환하기 위해서다.
  */
};

export async function GET() {
  try {
    const jwt = await getServerSession();

    if (!checkJwtExisting(jwt)) {
      return NextResponse.json(
        { message: "can not found user information." },
        { status: 404 },
      );
    }

    const sentences = await getSentenceHandler(jwt.user.email);

    return NextResponse.json(
      {
        sentences,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: StatusCodes.FORBIDDEN },
      );
    }
    return NextResponse.json(
      {
        message: String(error),
      },
      {
        status: StatusCodes.FORBIDDEN,
      },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const jwt = await getServerSession();

    if (!checkJwtExisting(jwt)) {
      return NextResponse.json(
        { message: "can not found user information." },
        { status: 404 },
      );
    }

    const data = (await req.json()) as PostSentenceDTO | null;

    if (!data || !data.sentence || typeof data?.sentence !== "string") {
      return NextResponse.json(
        { message: "please send valid value." },
        { status: 400 },
      );
    }

    const result = await createSentenceHandler(jwt.user.email, data.sentence);

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
