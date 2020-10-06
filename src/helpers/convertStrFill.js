export const convertStrFill = (word, fill) => {
  const filledArr = word && String(word) && word.split("").fill(fill);
  const firstLetter = word[0];

  var indices = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] === firstLetter) indices.push(i);
  }
  indices.map((index) => {
    return (filledArr[index] = firstLetter.toUpperCase());
  });

  console.log(firstLetter);
  console.log(word);
  console.log(indices);

  console.log(filledArr);

  return filledArr.join("");
};
