export const convertStrFill = (word, fill) => {
  const filledArr = word && String(word) && word.split("").fill(fill);
  const firstLetter = word[0];
  
  word
    .split("")
    .map((character, index) => {
      if (character === firstLetter) return index;
    })
    .filter((index) => (filledArr[index] = firstLetter.toUpperCase()));

  return filledArr.join("");
};
