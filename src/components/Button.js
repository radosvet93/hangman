import React from "react";

const Button = ({ letter, letterPressed, disabledLetters }) => {
  console.log(disabledLetters);

  return (
    <button onClick={() => letterPressed(letter)} className="Button">
      {letter.toUpperCase()}
    </button>
  );
};

export default Button;
