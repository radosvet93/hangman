import React, { useState, useEffect } from "react";

const convertStrFill = (word, fill) => {
  const fullArr = word.split("").fill(fill);

  fullArr[0] = word[0].toUpperCase();
  return fullArr.join("");
};

const Word = ({ word, letter }) => {
  const [gameWord, setGameWord] = useState("");
  const [error, setError] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  useEffect(() => {
    setGameWord(convertStrFill(word, "_"));
  }, []);

  //TODO: use more react stuff like state and effects, helpers...

  let newStr = gameWord.split("");
  useEffect(() => {
    letter &&
      word.split("").forEach((element, index) => {
        if (letter.toLowerCase() === element) {
          newStr[index] = letter;
          setError("");
          setGameWord(newStr.join(""));
        }
      });

    if (letter && !word.includes(letter.toLowerCase())) {
      setErrorCount(errorCount + 1);
      setError(`Letter ${letter} does not exist in this word`);
    }
    if (errorCount >= 4) {
      setError("You are a loser");
    }
  }, [letter, word, gameWord]);

  return (
    <>
      {/* <h2>Word: {word}</h2> */}
      <p>Letter: {letter}</p>
      <p>Error: {error}</p>
      <p>Error count: {errorCount}</p>
      <p>Word length: {word.length}</p>
      <p>gameWord: {gameWord}</p>
    </>
  );
};

export default Word;
