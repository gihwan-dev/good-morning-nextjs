import { getSentence } from "@/lib/sentence";
import styles from "./page.module.scss";
import MainTyping from "@/components/@main/home/typing/typing";

const MainPage = async () => {
  const data = await getSentence();

  return (
    <>
      <main className={styles.main}>
        <MainTyping targetSentence={data ? data : []} />
      </main>
    </>
  );
};

export default MainPage;
