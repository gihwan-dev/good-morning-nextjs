"use client";

import { useSentences } from "@/app/hooks/sentences.hook";
import { CLIENT_SIDE_SERVER_URL } from "@/lib/const";
import { Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

const postSentence = async (sentence: string) => {
  try {
    const result = await fetch(`${CLIENT_SIDE_SERVER_URL}/sentence`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sentence,
      }),
    });
    if (!result || !result.ok) {
      // do something.
      throw new Error("Failed to post sentence. Try again...");
    }
    return result;
  } catch (error) {
    // do something.
    window.alert("Failed to create sentence.");
  }
};

const SettingModal: React.FC<{
  onCloseHandler: () => void;
}> = ({ onCloseHandler }) => {
  const [sentence, setSentence] = useState("");

  const { data, mutate } = useSentences();

  const sentenceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSentence(event.currentTarget.value);
  };

  const onComplete = async () => {
    const result = await postSentence(sentence);
    if (!result) {
      window.alert("Failed to create sentence.");
    }
    mutate();
    onCloseHandler();
  };

  return (
    <>
      <Typography id="modal-modal-title" component={"h2"} variant="h6">
        Add sentence.
      </Typography>
      <label htmlFor="sentence">type your sentence.</label>
      <input
        type="text"
        value={sentence}
        onChange={sentenceHandler}
        maxLength={100}
        style={{
          height: "2rem",
          fontSize: "1.2em",
          width: "100%",
        }}
        id="sentence"
      />
      <Button onClick={onCloseHandler}>Close</Button>
      <Button onClick={onComplete}>Complete</Button>
    </>
  );
};

export default SettingModal;
