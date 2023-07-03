"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      style={{
        position: "absolute",
        zIndex: "100",
        margin: 0,
        right: "2rem",
        top: "2rem",
        padding: "0.5rem 2rem",
        fontSize: "1.1rem",
        fontWeight: "bold",
        border: "none",
        backgroundColor: "rgba(255, 255, 255, 0.56)",
        borderRadius: "20px",
        cursor: "pointer",
      }}
      type={"button"}
      onClick={async () => await signOut()}
    >
      sign out
    </button>
  );
};

export default SignOutButton;
