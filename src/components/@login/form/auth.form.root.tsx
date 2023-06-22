"use client";

import { useState } from "react";
import SignIn from "@/components/@login/form/signin/signin";
import SignUp from "@/components/@login/form/signup/signup";

const AuthFormRoot = () => {
  const [signInMode, setSignInMode] = useState(true);

  const signInModeHandler = () => {
    setSignInMode(true);
  };

  const signUpModeHandler = () => {
    setSignInMode(false);
  };

  return (
    <>
      {signInMode ? (
        <>
          <h1>Sign in</h1>
          <SignIn setSignUp={signUpModeHandler} />
        </>
      ) : (
        <>
          <h1>Sign up</h1>
          <SignUp setSignIn={signInModeHandler} />
        </>
      )}
    </>
  );
};

export default AuthFormRoot;
