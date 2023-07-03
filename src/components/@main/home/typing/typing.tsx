"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./typing.module.scss";
import { koreanKeyCodes } from "@/lib/const";
import { useSession } from "next-auth/react";

const MainTyping: React.FC<{
  targetSentence: string[];
}> = ({ targetSentence }) => {
  const { data: session, status } = useSession();
  console.log(session);

  // 타이핑 해야하는 문자열
  const [enteredSentence, setEnteredSentence] = useState<string[]>([]);

  // 키 입력 받아 이벤트를 처리할 함수
  function keyDownHandler(event: globalThis.KeyboardEvent) {
    if (event.keyCode === 229 || koreanKeyCodes.includes(event.keyCode)) {
      event.preventDefault();
    }
    if (event.key.length === 1) {
      if (event.shiftKey) {
        setEnteredSentence(prevState => {
          const updatedValue = [...prevState];
          updatedValue.push(event.key.toUpperCase());
          return updatedValue;
        });
      } else {
        setEnteredSentence(prevState => {
          const updatedValue = [...prevState];
          updatedValue.push(event.key);
          return updatedValue;
        });
      }
    } else {
      if (event.key === "Backspace") {
        setEnteredSentence(prevState => {
          const updatedValue = [...prevState];
          updatedValue.pop();
          return updatedValue;
        });
      }
    }
  }

  const typingChecker = (item: string, index: number) => {
    if (!enteredSentence[index]) {
      return styles["text-grey"];
    } else if (enteredSentence[index] === item) {
      return styles["text-black"];
    } else {
      return styles["text-red"];
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", event => keyDownHandler(event));

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <section className={styles.container}>
      {targetSentence.map((item, index) => {
        if (index === enteredSentence.length) {
          return (
            <>
              <hr className={styles.cursor} key={Date.now()}></hr>
              {item === " " ? (
                <span key={index} />
              ) : (
                <p className={typingChecker(item, index)} key={index}>
                  {item}
                </p>
              )}
            </>
          );
        }
        if (item === " ") {
          return <span key={index} />;
        }
        return (
          <p className={typingChecker(item, index)} key={index}>
            {item}
          </p>
        );
      })}
    </section>
  );
};

export default MainTyping;
