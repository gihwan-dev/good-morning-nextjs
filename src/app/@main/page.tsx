import styles from "./page.module.scss";
import MainTyping from "@/components/@main/home/typing/typing";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <MainTyping
        target={
          "You have power over your mind - not outside events. Realize this, and you will find strength"
        }
      />
    </main>
  );
};

export default MainPage;
