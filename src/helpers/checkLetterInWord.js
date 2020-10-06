export const checkLetterInWord = (letter, word) => {
  const newStr = [];

  word.split("").forEach((character, index) => {
    if (letter && letter.toLowerCase() === character.toLowerCase()) {
      // newStr[index] = letter;
      newStr.splice(index, 0, letter);
      return newStr.join("");
    }
  });
};
