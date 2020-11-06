import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Modal, Segment, Header } from "semantic-ui-react";
import Lottie from "react-lottie";
import { STATUSES, maxErrors } from "../constants";
import { statusState, errorsState, gameWordState, styleState } from "../recoil/atoms";
import win from "../lotties/win.json";
import lose from "../lotties/lose.json";

const Status = ({ letter, word }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [status, setStatus] = useRecoilState(statusState);
  const errors = useRecoilValue(errorsState);
  const style = useRecoilValue(styleState);
  const [, closeModal] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Modal dimmer="blurring" open={!!status} onClose={() => closeModal(true)}>
      {status !== STATUSES.RESTART && <Modal.Header>{status}</Modal.Header>}
      <Modal.Content>
        <Modal.Description>
          Word was: <strong>{word.toUpperCase()}</strong>
          {status === STATUSES.WIN && <Lottie options={winOptions} height={300} width={300} />}
          {status === STATUSES.LOSE && <Lottie options={loseOptions} height={300} width={300} />}
          <Header as="h3"></Header>
          <Header as="h3">Your score is: 0</Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
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
