import HandleSentenceForm from "@/components/@main/setting/handle.sentence.form";
import styles from "./page.module.scss";

export default function SettingPage() {
  return (
    <main className={styles.main}>
      <HandleSentenceForm />
    </main>
  );
}
