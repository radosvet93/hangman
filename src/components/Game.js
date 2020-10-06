import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Keyboard from "./Keyboard";
import Word from "./Word";
import Hint from "./Hint";
import Drawing from "./Drawing";
import Status from "./Status";
import Speech from "./Speech";
import { getRandomWord } from "../helpers/getRandomWord";
import { convertStrFill } from "../helpers/convertStrFill";
import { Grid, Header, Segment, Icon } from "semantic-ui-react";
import { errorsState, gameWordState, statusState, styleState } from "../recoil/atoms";
import { STATUSES } from "../constants";
import Owlbot from "owlbot-js";
const randomWords = require("random-words");
const client = Owlbot(process.env.REACT_APP_OWLBOT_TOKEN);

const randomWord = randomWords();

client.define(randomWord).then(({ definitions, word }) => {
  console.log("result", definitions);
  console.log("word", word);
  console.log("hello");
});

const Game = () => {
  const { randomWord, randomHint, randomPartOfSpeech } = getRandomWord();
  const [style] = useRecoilState(styleState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const [status, setStatus] = useRecoilState(statusState);
  const [letter, setLetter] = useState();
  const [word, setWord] = useState(randomWord);
  const [hint, setHint] = useState(randomHint);
  const [partOfSpeech, setPartOfSpeech] = useState(randomPartOfSpeech);
  const [gameWord, setGameWord] = useRecoilState(gameWordState);

  // TODO: refactor
  // TODO: do better logic!!!
  // TODO: think about styling
  // TODO: think about testing
  // TODO: think about animations and draw the parts of the hangman body
  // TODO: add i18n - English, Bulgarian - choose language

  // When first render, create the game word
  useEffect(() => {
    setGameWord(convertStrFill(word, "_"));
  }, []);

  useEffect(() => {
    // Restart game
    if (status === STATUSES.RESTART) {
      const newWord = getRandomWord();
      setStatus("");
      setErrors(0);
      setWord(newWord.randomWord);
      setGameWord(convertStrFill(newWord.randomWord, "_"));
      setHint(newWord.randomHint);
      setPartOfSpeech(newWord.partOfSpeech);
    }
  }, [status, setStatus, setErrors, setGameWord]);

  return (
    <Segment>
      <Header as="h1" textAlign="center">
        <Header.Content>Hangman</Header.Content>
      </Header>
      <Drawing errors={errors} />
      <Word word={word} letter={letter} />
      <Hint hint={hint} />
      <Speech partOfSpeech={partOfSpeech} />
      <Keyboard letterPressed={setLetter} />
      <Status word={word} errors={errors} letter={letter} />
    </Segment>
  );
};

export default Game;
