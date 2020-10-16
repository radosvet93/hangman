import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { statusState, styleState } from "../recoil/atoms";
import { STATUSES } from "../constants";

const Letter = ({ letter, letterPressed }) => {
  const [disabled, setDisabled] = useState(false);
  const style = useRecoilValue(styleState);
  const status = useRecoilValue(statusState);

  useEffect(() => {
    status === STATUSES.LOSE || status === STATUSES.WIN ? setDisabled(true) : setDisabled(false);
  }, [status]);
  return (
    <Button
      style={style.button}
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
