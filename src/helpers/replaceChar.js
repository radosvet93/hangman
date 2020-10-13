export const replaceChar = (word, letter, gameWord) => {
  let newStr = gameWord.split("");
  let LCLetter = letter && letter.toLowerCase();

  word.split("").forEach((character, index) => {
    if (character === LCLetter) {
      return newStr.splice(index, 1, letter);
    }
  });

  return newStr.join("");
};
