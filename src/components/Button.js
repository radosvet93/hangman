import React from "react";

import { Button as ButtonClass } from "./Button.module.scss";

const Button = ({ letter, letterPressed }) => {
  return (
    <button onClick={() => letterPressed(letter)} className={ButtonClass}>
      {letter.toUpperCase()}
    </button>
  );
};

export default Button;
