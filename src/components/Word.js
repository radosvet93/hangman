import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { replaceChar } from "../helpers/replaceChar";
import { errorsState, statusState, gameWordState } from "../recoil/atoms";

const Word = ({ letter, word }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [errors, setErrors] = useRecoilState(errorsState);
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
    <>
      <h2>Word is: {word}</h2>
      <p>
        The word is {word.length} letters: {gameWord}
      </p>
    </>
  );
};

export default Word;
