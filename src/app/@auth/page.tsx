import styles from "./page.module.scss";
import AuthFormRoot from "@/components/@login/form/auth.form.root";
import { useSession } from "next-auth/react";

export default function AuthPage() {
  const { data, update, status } = useSession();
  return (
    <main className={styles.main}>
      <AuthFormRoot />
    </main>
  );
}
