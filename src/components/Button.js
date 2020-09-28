import React from "react";

const Button = ({ letter, letterPressed }) => {
  return <button onClick={() => letterPressed(letter)} className="Button">{letter.toUpperCase()}</button>;
};

export default Button;
