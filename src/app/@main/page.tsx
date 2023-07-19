import { getSentence } from "@/lib/sentence";
import styles from "./page.module.scss";
import MainTyping from "@/components/@main/home/typing/typing";
import TypingAmount from "@/components/@main/home/typingAmount/typingAmount";

const MainPage = async () => {
  const data = await getSentence();

  if (data) {
    data.push("Please add your sentence.");
  }

  return (
    <>
      <main className={styles.main}>
        <MainTyping savedSentence={data ? data : ["Please create sentence."]} />
        <TypingAmount />
      </main>
    </>
  );
};

export default MainPage;
