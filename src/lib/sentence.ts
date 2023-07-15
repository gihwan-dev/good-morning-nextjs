// fetch about sentences.

import { getServerSession } from "next-auth";
import { connectToDatabase } from "./db";
import { WithId } from "mongodb";

interface User extends WithId<Document> {
  email: string;
  password: string;
  sentences: string[];
}

export const getSentence = async () => {
  try {
    const data = await getServerSession();

    if (!data || !data.user || !data.user.email) {
      throw new Error("Login again");
    }

    const { DB_NAME, COLLECTION_NAME } = process.env;

    if (!DB_NAME || !COLLECTION_NAME) {
      throw new Error("Can not found database");
    }

    const client = connectToDatabase();
    const collection = (await client).db(DB_NAME).collection(COLLECTION_NAME);

    if (!collection) {
      (await client).close();
      throw new Error("Can not found collection");
    }

    const user = (await collection.findOne({
      email: data.user.email,
    })) as User | null;

    if (!user) {
      throw new Error("Can not find you account information.");
    }

    return user.sentences;
  } catch (error) {
    console.error(error);
  }
};
