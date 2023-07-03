import styles from "./page.module.scss";
import AuthFormRoot from "@/components/@login/form/auth.form.root";

export default function AuthPage() {
  return (
    <main className={styles.main}>
      <AuthFormRoot />
    </main>
  );
}
