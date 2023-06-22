"use client";

import styles from "src/styles/signin.module.scss";
import { FormEvent, useState } from "react";

const SignUp: React.FC<{
  setSignIn: () => void;
}> = ({ setSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const passwordChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

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
