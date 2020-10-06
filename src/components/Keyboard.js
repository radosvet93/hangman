import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { letters } from "../constants";
import Letter from "./Letter";

const Keyboard = ({ letterPressed }) => {
  return (
    <>
      <Button.Group fluid style={{ "flex-wrap": "wrap" }}>
        {letters.map((letter) => (
          <Letter key={letter} letter={letter} letterPressed={letterPressed} />
        ))}
      </Button.Group>
    </>
  );
};

export default Keyboard;
