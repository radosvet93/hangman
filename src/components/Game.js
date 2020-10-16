import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Keyboard from "./Keyboard";
import Word from "./Word";
import Drawing from "./Drawing";
import Status from "./Status";
import Def from "./Def";
import { getRandomWord } from "../helpers/getRandomWord";
import { convertStrFill } from "../helpers/convertStrFill";
import { Header, Segment, Grid } from "semantic-ui-react";
import { errorsState, gameWordState, statusState, styleState } from "../recoil/atoms";
import { STATUSES } from "../constants";

const Game = () => {
  const { randomDefinitions, randomWord } = getRandomWord();
  const style = useRecoilValue(styleState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const [status, setStatus] = useRecoilState(statusState);
  const [letter, setLetter] = useState();
  const [word, setWord] = useState(randomWord);
  const [definitions, setDefinitions] = useState([]);
  const setGameWord = useSetRecoilState(gameWordState);

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

      setDefinitions([]);
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
    <Segment raised padded style={{ ...style.bg, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
      <Header as="h1" textAlign="center">
        <Header.Content>Hangman</Header.Content>
      </Header>
      <Grid columns="equal">
        <Grid.Column>
          <Drawing errors={errors} />
        </Grid.Column>
        <Grid.Column>
          <Word word={word} letter={letter} />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Keyboard letterPressed={setLetter} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Def definitions={definitions} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Status errors={errors} letter={letter} word={word} />
    </Segment>
  );
};

export default Game;
