import React from "react";
import { letters } from "../constants";
import Button from "./Button";

const Keyboard = ({ letterPressed }) => {
  return (
    <div className="Keyboard">
      {letters.map((letter) => (
        <Button key={letter} letter={letter} letterPressed={letterPressed} />
      ))}
    </div>
  );
};

export default Keyboard;
