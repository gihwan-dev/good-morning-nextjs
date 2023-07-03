import { getServerSession } from "next-auth";
import styles from "./page.module.scss";
import MainTyping from "@/components/@main/home/typing/typing";

const MainPage = () => {
  const target =
    "You have power over your mind - not outside events. Realize this, and you will find strength".split(
      "",
    );

  return (
    <main className={styles.main}>
      <MainTyping targetSentence={target} />
    </main>
  );
};

export default MainPage;
