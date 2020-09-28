import React from "react";

const Word = ({ word, letter }) => {
  if (letter && word.toUpperCase().includes(letter.toUpperCase())) {
    console.log("letter is here");
    // loop through the word to find occurrence of the letter and put it inside the word
  } else {
    // increase the count for wrong words and draw the person
    console.log("letter is not here");
  }
  return (
    <>
      <h2>Word: {word}</h2>
      <p>Letter: {letter}</p>
    </>
  );
};

export default Word;
