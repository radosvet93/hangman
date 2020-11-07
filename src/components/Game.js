import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Keyboard from "./Keyboard";
import Word from "./Word";
import Drawing from "./Drawing";
import Status from "./Status";
import Def from "./Def";
import { getRandomWord } from "../helpers/getRandomWord";
import { convertStrFill } from "../helpers/convertStrFill";
import { Header, Segment, Grid, Button, ButtonGroup } from "semantic-ui-react";
import { errorsState, gameWordState, statusState, styleState } from "../recoil/atoms";
import { STATUSES } from "../constants";
import Example from "./Example";
import Image from "./Image";

const Game = () => {
  const style = useRecoilValue(styleState);
  const [errors, setErrors] = useRecoilState(errorsState);
  const [status, setStatus] = useRecoilState(statusState);
  const [letter, setLetter] = useState();
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [isDefVisible, setIsDefVisible] = useState(false);
  const [isExampleVisible, setIsExampleVisible] = useState(false);
  const setGameWord = useSetRecoilState(gameWordState);

  const showImage = () => {
    setIsImageVisible(true);
  };

  const showDef = () => {
    setIsDefVisible(true);
  };

  const showExample = () => {
    setIsExampleVisible(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const gameStart = useCallback(() => {
    const { randomDefinitions, randomWord } = getRandomWord();

    setDefinitions([]);
    setStatus("");
    setErrors(0);
    setWord(randomWord);
    setGameWord(convertStrFill(randomWord, "_"));
    randomDefinitions.then(({ definitions }) => {
      setDefinitions(definitions);
    });
  });

  // When first render, create the game word
  useEffect(() => {
    gameStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // TODO: refactor
  // TODO: do better logic!!!
  // TODO: think about styling
  // TODO: think about testing
  // TODO: think about animations and draw the parts of the hangman body
  // TODO: add i18n - English, Bulgarian - choose language

  useEffect(() => {
    if (status === STATUSES.RESTART) {
      gameStart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <Segment raised padded style={{ ...style.bg, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
      <Header as="h1" textAlign="center">
        <Header.Content>Mr. Hangman</Header.Content>
      </Header>
      <Grid>
        <Grid.Column width={6}>
          <Drawing errors={errors} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Word word={word} letter={letter} />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Keyboard word={word} letterPressed={setLetter} />
          </Grid.Column>
        </Grid.Row>
        <ButtonGroup fluid>
          {!isDefVisible && <Button onClick={() => showDef()}>Show Definition</Button>}
          {!isExampleVisible && <Button onClick={() => showExample()}>Show Example</Button>}
          {!isImageVisible && <Button onClick={() => showImage()}>Show Image</Button>}
        </ButtonGroup>
        <Grid.Row>
          <Grid.Column>
            <Grid columns="3">
              {isDefVisible && <Def definitions={definitions} />}
              {isExampleVisible && <Example definitions={definitions} />}
              {isImageVisible && <Image word={word} definitions={definitions} />}
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Status errors={errors} letter={letter} word={word} />
    </Segment>
  );
};

export default Game;
