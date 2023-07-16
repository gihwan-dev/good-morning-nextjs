import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

interface User {
  email: string;
  password: string;
  sentences: string[];
}

export const getSentenceHandler = async (email: string) => {
  try {
    const { DB_NAME, COLLECTION_NAME } = process.env;

    if (!DB_NAME || !COLLECTION_NAME) {
      throw new Error("Can not access to database.");
    }

    const client = await connectToDatabase();

    const collection = client.db(DB_NAME).collection<User>(COLLECTION_NAME);

    const user = await collection.findOne({ email });

    if (!user) {
      throw new Error("Can not find your information. try again.");
    }

    return user.sentences;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
};

export const createSentenceHandler = async (
  email: string,
  sentence: string,
) => {
  try {
    const { DB_NAME, COLLECTION_NAME } = process.env;

    if (!DB_NAME || !COLLECTION_NAME) {
      throw new Error("Can not access to database.");
    }

    const client = await connectToDatabase();

    const collection = client.db(DB_NAME).collection<User>(COLLECTION_NAME);

    if (!client || !collection) {
      throw new Error("Can not access to database.");
    }

    const user = await collection.findOneAndUpdate(
      { email: email },
      { $push: { sentences: sentence } },
    );

    return user;
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return NextResponse.json({ message }, { status: 400 });
  }
};
