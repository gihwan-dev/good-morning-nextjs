"use client";

import styles from "src/styles/signin.module.scss";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn: React.FC<{
  setSignUp: () => void;
}> = ({ setSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const emailChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const passwordChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      if (!result) {
        throw new Error("Something wrong");
      }
      if (result.error === null) {
        router.refresh();
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor={"Email"}>Email</label>
      <input
        id={"Email"}
        value={email}
        onChange={emailChangeHandler}
        type={"email"}
      />
      <label htmlFor={"Password"}>Password</label>
      <input
        id={"Password"}
        type={"password"}
        value={password}
        onChange={passwordChangeHandler}
      />
      {isLoading ? <p>processing...</p> : <></>}
      <button type={"submit"}>submit</button>
      <p>
        You dont have account?{" "}
        <button type={"button"} onClick={setSignUp}>
          Sign up
        </button>
      </p>
    </form>
  );
};

export default SignIn;
