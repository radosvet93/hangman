import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { statusState } from "../recoil/atoms";
import { STATUSES } from "../constants";

const Letter = ({ letter, letterPressed }) => {
  const [disabled, setDisabled] = useState(false);
  const [status] = useRecoilState(statusState);

  useEffect(() => {
    status === STATUSES.LOSE || status === STATUSES.WIN ? setDisabled(true) : setDisabled(false);
  }, [status]);
  return (
    <Button
      color="teal"
      disabled={disabled}
      compact
      size="massive"
      onClick={() => {
        setDisabled(true);
        letterPressed(letter);
      }}
    >
      {letter.toUpperCase()}
    </Button>
  );
};

export default Letter;
