"use client";

import { Typography } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const SettingModal: React.FC<{
  onCloseHandler: () => void;
}> = ({ onCloseHandler }) => {
  const [sentence, setSentence] = useState("");

  const sentenceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSentence(event.currentTarget.value);
  };

  const onComplete = () => {
    
  };
  return (
    <>
      <Typography id="modal-modal-title" component={"h2"} variant="h6">
        Add sentence.
      </Typography>
      <label htmlFor="sentence">type your sentence.</label>
      <input
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
      <button
        style={{
          marginTop: "1rem",
          border: "1px solid black",
          backgroundColor: "white",
          padding: "0.5rem 2rem",
        }}
        type="button"
        onClick={onCloseHandler}
      >
        Close
      </button>
      <button
        style={{
          marginTop: "1rem",
          border: "1px solid black",
          backgroundColor: "white",
          padding: "0.5rem 2rem",
        }}
        type={"button"}
        onClick={() => {}}
      >
        Complete
      </button>
    </>
  );
};

export default SettingModal;
