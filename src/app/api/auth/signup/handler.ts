import { connectToDatabase } from "@/lib/db";
import { WithId } from "mongodb";
import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth";

interface User extends WithId<Document> {
  email: string;
  password: string;
  sentences: string[];
}

const createUserHandler = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { DB_NAME, COLLECTION_NAME } = process.env;
  if (!DB_NAME || !COLLECTION_NAME) {
    throw new Error("Can not found database");
  }

  const client = await connectToDatabase();
  const collection = client.db(DB_NAME).collection(COLLECTION_NAME);

  if (!collection) {
    await client.close();
    throw new Error("Can not found collection");
  }

  const user = (await collection.findOne({ email: email })) as User | null;
  if (user) {
    await client.close();
    return NextResponse.json({
      message: "There are already user",
      isValid: false,
    });
  }

  const hashedPassword = await hashPassword(password);

  const pushResult = await collection.insertOne({
    email: email,
    password: hashedPassword,
    sentences: [],
  });

  return pushResult.acknowledged;
};

export default createUserHandler;
