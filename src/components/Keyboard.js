import React from "react";
import { letters } from "../constants";
import Button from "./Button";

const Keyboard = ({ letterPressed, disabledLetters }) => {
  return (
    <div className="Keyboard">
      {letters.map((letter) => (
        <Button disabledLetters={disabledLetters} key={letter} letter={letter} letterPressed={letterPressed} />
      ))}
    </div>
  );
};

export default Keyboard;
