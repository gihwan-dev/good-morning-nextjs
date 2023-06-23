import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import SignOutButton from "@/components/@main/signout.button";

const MainPage = async () => {
  const data = await getServerSession();
  return (
    <main className={styles.main}>
      <h1>Here is Main Page.</h1>
      <SignOutButton />
    </main>
  );
};

export default MainPage;
