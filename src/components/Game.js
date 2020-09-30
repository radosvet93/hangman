import React, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import Word from "./Word";
import { getRandomWord } from "../helpers/getRandomWord";

const word = getRandomWord();

const Game = () => {
  const [letter, setLetter] = useState();
  const [disabledLetters, setDisabledLetters] = useState([]);

  // TODO: disabled the keyboard buttons, when pressed
  // TODO: make a way to restart game when reaching the error count
  // TODO: refactor
  // TODO: make more helper functions
  // TODO: do better logic!!!
  // TODO: make a new component to congrats when word is guest
  // TODO: think about using recoil for state management
  // TODO: think about styling
  // TODO: think about testing
  // TODO: think about animations and draw the parts of the hangman body
  // TODO: add tips for the word
  // TODO: add i18n - English, Bulgarian - choose language
  // TODO: get words from dictionary

  useEffect(() => {
    setDisabledLetters([...disabledLetters, letter]);
  }, [letter]);

  return (
    <div className="Game">
      <h1>Hangman</h1>
      <p>The illustration of the hangman</p>
      <p>Letter pressed: {letter}</p>
      <Word word={word} letter={letter} />
      <Keyboard letterPressed={setLetter} disabledLetters={disabledLetters} />
    </div>
  );
};

export default Game;
