import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      authorize: async credentials => {
        const { DB_NAME, COLLECTION_NAME } = process.env;

        if (!DB_NAME) {
          throw new Error("Failed to connect to database");
        }
        if (!COLLECTION_NAME) {
          throw new Error("Failed to connect to database");
        }

        if (!credentials) {
          throw new Error("Failed");
        }

        if (!credentials.email || !credentials.password) {
          throw new Error("Not valid input");
        }

        const client = await connectToDatabase();

        const userCollection = client.db(DB_NAME).collection(COLLECTION_NAME);

        const user = await userCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          await client.close();
          throw new Error("Can't found user");
        }

        if (!user.email) {
          await client.close();
          throw new Error("Can't found user email");
        }

        if (!user.password) {
          await client.close();
          throw new Error("Not valid user email");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password,
        );

        if (!isValid) {
          await client.close();
        }

        await client.close();

        return {
          id: user.email,
          email: user.email,
        };
      },
    }),
  ],
});

export { handler as GET, handler as PUT };
