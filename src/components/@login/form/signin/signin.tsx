"use client";

import styles from "src/styles/signin.module.scss";
import { FormEvent, useState } from "react";

const SignIn: React.FC<{
  setSignUp: () => void;
}> = ({ setSignUp }) => {
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
