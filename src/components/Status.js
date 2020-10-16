import React, { useState, useEffect, useReducer } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Modal, Transition, TransitionablePortal } from "semantic-ui-react";
import Lottie from "react-lottie";
import { STATUSES, maxErrors } from "../constants";
import { statusState, errorsState, gameWordState, styleState } from "../recoil/atoms";
import win from "../lotties/win.json";
import lose from "../lotties/lose.json";

const Status = ({ letter, word }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [status, setStatus] = useRecoilState(statusState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const style = useRecoilValue(styleState);
  const [modal, closeModal] = useState(false);

  useEffect(() => {
    if (letter && errors !== maxErrors && word.toUpperCase() === gameWord.toUpperCase()) {
      setStatus(STATUSES.WIN);
    }
  }, [setStatus, word, letter, gameWord, errors]);
  useEffect(() => {
    if (errors === maxErrors) {
      setStatus(STATUSES.LOSE);
      setGameWord(word.toUpperCase());
    }
  }, [errors]);

  const winOptions = {
    loop: false,
    autoplay: true,
    animationData: win,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loseOptions = {
    loop: false,
    autoplay: true,
    animationData: lose,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal dimmer="blurring" open={status} onClose={() => closeModal(true)}>
      {status !== STATUSES.RESTART && <Modal.Header>{status}</Modal.Header>}
      {status === STATUSES.WIN && <Lottie options={winOptions} height={300} width={300} />}
      {status === STATUSES.LOSE && <Lottie options={loseOptions} height={300} width={300} />}
      <Modal.Content>Your score is: {/* TODO: add the score here */}</Modal.Content>
      <Modal.Actions>
        <Button
          color={style.color.primary}
          secondary
          onClick={() => {
            setStatus(STATUSES.RESTART);
            closeModal(true);
          }}
        >
          Restart
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Status;
