import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Segment } from "semantic-ui-react";
import { replaceChar } from "../helpers/replaceChar";
import { errorsState, gameWordState, styleState } from "../recoil/atoms";

const Word = ({ letter, word }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const style = useRecoilValue(styleState);
  const regex = new RegExp(letter, "i");

  useEffect(() => {
    word.match(regex) && setGameWord(replaceChar(word, letter, gameWord));
  }, [letter]);

  useEffect(() => {
    if (letter && !word.match(regex)) {
      setErrors(errors + 1);
    }
  }, [letter]);

  return (
    <Segment inverted style={{ background: style.color.primary }}>
      <span className="gameWord">{gameWord}</span>
    </Segment>
  );
};

export default Word;
