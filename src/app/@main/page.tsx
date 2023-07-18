import { getSentence } from "@/lib/sentence";
import styles from "./page.module.scss";
import MainTyping from "@/components/@main/home/typing/typing";

const MainPage = async () => {
  const data = await getSentence();

  if (data) {
    data.push("Please add your sentence.");
  }

  return (
    <>
      <main className={styles.main}>
        <MainTyping savedSentence={data ? data : ["Please create sentence."]} />
      </main>
    </>
  );
};

export default MainPage;
