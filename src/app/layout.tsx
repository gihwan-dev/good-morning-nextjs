import BackgroundImage from "public/images/background.jpg";
import Image from "next/image";
import "src/styles/globals.css";

import MySessionProvider from "@/lib/session.provider";
import { getServerSession } from "next-auth";
import MainNav from "@/components/@main/main.nav";
import SignOutButton from "@/components/@main/signout.button";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  main,
  auth,
}: {
  main: React.ReactNode;
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  const data = await getServerSession();

  return (
    <html lang="en">
      <body>
        <MySessionProvider>
          <Image
            fill={true}
            src={BackgroundImage}
            alt={"background image"}
            style={{
              position: "absolute",
              zIndex: 0,
            }}
          />
          {data ? (
            <>
              <MainNav />
              <SignOutButton />
            </>
          ) : null}
          {data ? main : auth}
        </MySessionProvider>
      </body>
    </html>
  );
}
