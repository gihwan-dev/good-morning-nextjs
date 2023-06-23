import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const { DB_URL } = process.env;

  if (!DB_URL) {
    throw new Error("Failed to connection database");
  }

  return MongoClient.connect(DB_URL);
}
