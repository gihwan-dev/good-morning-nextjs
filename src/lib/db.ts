import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const { DATABASE_URL } = process.env;

  if (!DATABASE_URL) {
    throw new Error("Failed to connection database");
  }

  return MongoClient.connect(DATABASE_URL);
}
