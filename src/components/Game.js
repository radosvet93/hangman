import React, { useState } from "react";
import Keyboard from "./Keyboard";
import Word from "./Word";

const Game = () => {
  const [letter, setLetter] = useState();

  return (
    <div className="Game">
      <h1>Hangman</h1>

      <p>The illustration of the hangman</p>
      <p>Letter pressed: {letter}</p>
      <Word word="hello" letter={letter} />
      <Keyboard letterPressed={setLetter} />
    </div>
  );
};

export default Game;
