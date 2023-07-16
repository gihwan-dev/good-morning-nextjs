"use client";

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import styles from "./handler.sentence.form.module.scss";
import SettingModal from "./setting.modal/setting.modal";
import { useState } from "react";
import { useSentences } from "@/app/hooks/sentences.hook";
import { Delete } from "@mui/icons-material";

const HandleSentenceForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data } = useSentences();

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
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <List
            sx={{
              width: "80%",
            }}
          >
            {!data
              ? null
              : data.sentences.map(item => {
                  return (
                    <ListItem key={item}>
                      <Typography fontSize={"1.3rem"}>{item}</Typography>
                      <IconButton onClick={() => {}} size="large">
                        <Delete />
                      </IconButton>
                    </ListItem>
                  );
                })}
          </List>
        </Box>
      </section>
    </>
  );
};

export default HandleSentenceForm;
