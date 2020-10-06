// import { words } from "../constants";
import words from "../wordsapi_sample.json";

export const getRandomWord = () => {
  // TODO: fix issue with spaces and dashes
  // TODO: get only words with definitions
  const allWords = Object.keys(words);
  const regex = new RegExp(/[a-zA-Z -]/gm);
  const filteredWords = allWords.filter((word) => word.match(regex));
  const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
  const randomHint = words[randomWord].definitions && words[randomWord].definitions[0].definition;
  const randomPartOfSpeech = words[randomWord].definitions && words[randomWord].definitions[0].partOfSpeech;

  console.log("randomPartOfSpeech", randomPartOfSpeech);

  return { randomWord, randomHint, randomPartOfSpeech };
};
