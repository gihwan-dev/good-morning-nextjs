"use client";

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@mui/material";
import styles from "./handler.sentence.form.module.scss";
import SettingModal from "./setting.modal/setting.modal";
import { useState } from "react";
import { useSentences } from "@/app/hooks/sentences.hook";

const HandleSentenceForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data, error, isLoading, mutate } = useSentences();

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
        <List>
          {!data
            ? null
            : data.sentences.map(item => {
                return (
                  <ListItem key={item}>
                    <ListItemText primary={item} />
                    <IconButton></IconButton>
                  </ListItem>
                );
              })}
        </List>
      </section>
    </>
  );
};

export default HandleSentenceForm;
