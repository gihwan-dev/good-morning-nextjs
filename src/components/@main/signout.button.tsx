"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button type={"button"} onClick={() => signOut()}>
      sign out
    </button>
  );
};

export default SignOutButton;
