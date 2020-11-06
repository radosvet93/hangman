import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import { statusState, styleState } from "../recoil/atoms";
import { STATUSES } from "../constants";

const Letter = ({ letter, letterPressed, word }) => {
  const [disabled, setDisabled] = useState(false);
  const style = useRecoilValue(styleState);
  const status = useRecoilValue(statusState);

  useEffect(() => {
    if (word && word[0].toUpperCase() === letter.toUpperCase()) {
      setDisabled(true);
    }
  }, [word, letter]);

  useEffect(() => {
    if (status === STATUSES.RESTART) {
      setDisabled(false);
    }
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
