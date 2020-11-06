import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { letters } from "../constants";
import Letter from "./Letter";

const Keyboard = ({ letterPressed, word }) => {
  return (
    <>
      <Button.Group fluid style={{ flexWrap: "wrap" }}>
        {letters.map((letter) => (
          <Letter key={letter} letter={letter} letterPressed={letterPressed} word={word} />
        ))}
      </Button.Group>
    </>
  );
};

export default Keyboard;
