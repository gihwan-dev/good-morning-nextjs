import { Session, getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { checkJwtExisting } from "../route";
import { StatusCodes } from "http-status-codes";
import { deleteSentenceHandler } from "../handler";

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } },
) {
  try {
    const jwt = await getServerSession();

    if (!checkJwtExisting(jwt)) {
      return NextResponse.json(
        {
          message: "Login again.",
        },
        {
          status: StatusCodes.FORBIDDEN,
        },
      );
    }

    console.log(params);

    const result = await deleteSentenceHandler(jwt.user.email, params.id);

    if (!result.acknowledged) {
      throw new Error("Failed to delete your sentence");
    }

    return NextResponse.json(
      {
        message: "Delete your sentence successfully.",
      },
      {
        status: StatusCodes.ACCEPTED,
      },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        message: error.message,
      });
    }
    return NextResponse.json({
      message: "Something wrong.",
    });
  }
}
