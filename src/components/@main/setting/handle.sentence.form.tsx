"use client";

import {
  Box,
  IconButton,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";
import styles from "./handler.sentence.form.module.scss";
import SettingModal from "./setting.modal/setting.modal";
import { useState } from "react";
import { useSentences } from "@/app/hooks/sentences.hook";
import { Delete } from "@mui/icons-material";
import { CLIENT_SIDE_SERVER_URL } from "@/lib/const";

const deleteSentenceFetcher = async (index: number) => {
  try {
    const result = await fetch(`${CLIENT_SIDE_SERVER_URL}/sentence/${index}`, {
      method: "DELETE",
    });

    if (!result.ok) {
      window.alert("Try again.");
      return false;
    }

    const data = (await result.json()) as { message: string };

    window.alert(data.message);

    return true;
  } catch (error) {
    window.alert("Try again");
  }
};

const HandleSentenceForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data, mutate } = useSentences();

  const onCloseHandler = () => {
    setOpenModal(false);
  };

  const onOpenHandler = () => {
    setOpenModal(true);
  };

  const onDeleteHandler = async (index: number) => {
    // delete fetch.
    try {
      const result = await deleteSentenceFetcher(index);

      if (result) {
        mutate();
      }
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
      window.alert("Unknown error.");
    }
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
              : data.sentences.map((item, index) => {
                  return (
                    <ListItem key={item}>
                      <Typography key={item + "typo"} fontSize={"1.3rem"}>
                        {item}
                      </Typography>
                      <IconButton
                        key={item + "button"}
                        onClick={() => onDeleteHandler(index)}
                        size="large"
                      >
                        <Delete key={item + "icon"} />
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
