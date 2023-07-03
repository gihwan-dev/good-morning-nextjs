import { NextRequest, NextResponse } from "next/server";
import handler from "@/app/api/auth/signup/handler";

interface SignUpUser {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: SignUpUser = await req.json();

    const isInserted = await handler(data);

    if (isInserted) {
      return NextResponse.json({
        message: "Create account successfully!",
        isValid: true,
      });
    } else {
      return NextResponse.json({
        message: "Failed to create account. Try again!",
        isValid: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
