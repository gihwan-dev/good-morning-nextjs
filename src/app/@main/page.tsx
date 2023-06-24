import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import SignOutButton from "@/components/@main/signout.button";
import MainTyping from "@/components/@main/home/typing/typing";

const MainPage = async () => {
  const data = await getServerSession();
  return (
    <main className={styles.main}>
      <MainTyping target={"I am the king"} />
      <SignOutButton />
    </main>
  );
};

export default MainPage;
