"use client";

import styles from "src/styles/signin.module.scss";
import { FormEvent, useState } from "react";
import { signUpUser } from "@/lib/auth";

const SignUp: React.FC<{
  setSignIn: () => void;
}> = ({ setSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const passwordChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await signUpUser(email, password);

    if (result !== false) {
      setIsSuccess(true);
    }
    setIsLoading(false);
  };

  if (isSuccess) {
    setTimeout(() => {
      setSignIn();
    }, 3000);
    return (
      <div className={styles.success}>Successfully create your account!</div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor={"Email"}>Email</label>
      <input
        id={"Email"}
        type={"email"}
        value={email}
        onChange={emailChangeHandler}
      />
      <label htmlFor={"Password"}>Password</label>
      <input
        id={"Password"}
        type={"password"}
        value={password}
        onChange={passwordChangeHandler}
      />
      {isLoading ? <p>Processing...</p> : <></>}
      <button type={"submit"}>Create account</button>
      <p>
        If you have account?{" "}
        <button type={"button"} onClick={setSignIn}>
          Sign in
        </button>
      </p>
    </form>
  );
};

export default SignUp;
