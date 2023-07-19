"use client";

import { useRecoilState } from "recoil";
import { typingState } from "@/recoil/atom";

const TypingAmount = () => {
  const [typingAmount, setTypingAmount] = useRecoilState(typingState);

  if (typingAmount >= 3) {
    return <div>done.</div>;
  }

  return <div>{typingAmount} / 3</div>;
};

export default TypingAmount;
