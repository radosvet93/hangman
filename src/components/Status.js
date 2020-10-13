import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Button } from "semantic-ui-react";
import { STATUSES, maxErrors } from "../constants";
import { statusState, errorsState, gameWordState } from "../recoil/atoms";

const Status = ({ letter, word }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [status, setStatus] = useRecoilState(statusState);
  const [errors, setErrors] = useRecoilState(errorsState);

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

  return (
    <>
      <p>{status !== STATUSES.RESTART && status}</p>
      {status && <Button onClick={() => setStatus(STATUSES.RESTART)}>Restart</Button>}
    </>
  );
};

export default Status;
