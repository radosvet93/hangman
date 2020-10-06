import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { maxErrors, STATUSES } from "../constants";
import { checkLetterInWord } from "../helpers/checkLetterInWord";
import { errorsState, statusState, gameWordState } from "../recoil/atoms";

const Word = ({ word, letter }) => {
  const [gameWord, setGameWord] = useRecoilState(gameWordState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const [status, setStatus] = useRecoilState(statusState);

  useEffect(() => {
    const newStr = gameWord.split("");
    letter &&
      word.split("").forEach((character, index) => {
        if (letter.toLowerCase() === character.toLowerCase()) {
          newStr[index] = letter;
          setGameWord(newStr.join(""));
        }
      });

    if (letter && !word.includes(letter.toLowerCase())) {
      setErrors(errors + 1);
    }
  }, [letter, gameWord]);

  useEffect(() => {
    if (letter && word.toUpperCase() === gameWord.toUpperCase()) {
      setStatus(STATUSES.WIN);
    }
  }, [setStatus, word, letter, gameWord]);
  useEffect(() => {
    if (status !== STATUSES.WIN && errors === maxErrors) {
      setStatus(STATUSES.LOSE);
      setGameWord(word.toUpperCase());
    }
  }, [errors, status, setStatus, word, setGameWord]);

  return (
    <p>
      The word is {word.length} letters: {gameWord}
    </p>
  );
};

export default Word;
