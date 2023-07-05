"use client";

import { Box, Modal } from "@mui/material";
import styles from "./handler.sentence.form.module.scss";
import SettingModal from "./setting.modal/setting.modal";
import { useState } from "react";

const HandleSentenceForm = () => {
  const [openModal, setOpenModal] = useState(true);

  const onCloseHandler = () => {
    setOpenModal(false);
  };

  const onOpenHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Modal open={openModal} onClose={onCloseHandler}>
        <Box
          sx={{
            position: "absolute",
            width: "50%",
            minWidth: "400",
            height: "60%",
            backgroundColor: "white",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
          }}
        >
          <SettingModal onCloseHandler={onCloseHandler} />
        </Box>
      </Modal>
      <section className={styles.section}>
        <button type="button" onClick={onOpenHandler}>
          Add
        </button>
        <ul>
          <li>some sentence.</li>
        </ul>
      </section>
    </>
  );
};

export default HandleSentenceForm;
