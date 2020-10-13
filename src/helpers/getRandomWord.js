import Owlbot from "owlbot-js";
const randomWords = require("random-words");
const client = Owlbot(process.env.REACT_APP_OWLBOT_TOKEN);

export const getRandomWord = () => {
  const randomWord = randomWords();
  const randomDefinitions = client.define(randomWord);

  return { randomDefinitions, randomWord };
};
