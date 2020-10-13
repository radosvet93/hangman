import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import Keyboard from "./Keyboard";
import Word from "./Word";
import Drawing from "./Drawing";
import Status from "./Status";
import Def from "./Def";
import { getRandomWord } from "../helpers/getRandomWord";
import { convertStrFill } from "../helpers/convertStrFill";
import { Header, Segment } from "semantic-ui-react";
import { errorsState, gameWordState, statusState, styleState } from "../recoil/atoms";
import { STATUSES } from "../constants";

const Game = () => {
  const { randomDefinitions, randomWord } = getRandomWord();
  const [style] = useRecoilState(styleState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const [status, setStatus] = useRecoilState(statusState);
  const [letter, setLetter] = useState();
  const [word, setWord] = useState(randomWord);
  const [definitions, setDefinitions] = useState([]);
  const [gameWord, setGameWord] = useRecoilState(gameWordState);

  // When first render, create the game word
  useEffect(() => {
    setErrors(0);
    setStatus("");
    setWord(randomWord);
    setGameWord(convertStrFill(randomWord, "_"));
    randomDefinitions.then(({ definitions }) => {
      setDefinitions(definitions);
    });
  }, []);
  // TODO: refactor
  // TODO: do better logic!!!
  // TODO: think about styling
  // TODO: think about testing
  // TODO: think about animations and draw the parts of the hangman body
  // TODO: add i18n - English, Bulgarian - choose language

  useEffect(() => {
    if (letter && status === STATUSES.RESTART) {
      const { randomDefinitions, randomWord } = getRandomWord();

      setStatus("");
      setErrors(0);
      setWord(randomWord);
      setGameWord(convertStrFill(randomWord, "_"));
      randomDefinitions.then(({ definitions }) => {
        setDefinitions(definitions);
      });
    }
  }, [status, setWord, setErrors, setGameWord, setStatus]);

  return (
    <Segment>
      <Header as="h1" textAlign="center">
        <Header.Content>Hangman</Header.Content>
      </Header>
      <Drawing errors={errors} />
      <Word word={word} letter={letter} />
      <Keyboard letterPressed={setLetter} />
      <Status errors={errors} letter={letter} word={word} />
      <Def definitions={definitions} />
    </Segment>
  );
};

export default Game;
