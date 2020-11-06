import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Header, Segment } from "semantic-ui-react";
import { replaceChar } from "../helpers/replaceChar";
import { errorsState, gameWordState, styleState } from "../recoil/atoms";

const Word = ({ letter, word }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const style = useRecoilValue(styleState);
  const regex = new RegExp(letter, "i");

  useEffect(() => {
    word.match(regex) && setGameWord(replaceChar(word, letter, gameWord));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letter]);

  useEffect(() => {
    if (letter && !word.match(regex)) {
      setErrors(errors + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letter]);

  return (
    <>
      <Header size="medium">
        The word is: <br />{" "}
      </Header>
      <Segment inverted style={{ background: style.color.primary }}>
        <span className="gameWord">{gameWord}</span>
      </Segment>
    </>
  );
};

export default Word;
