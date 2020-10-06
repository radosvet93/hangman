import React from "react";
import Game from "./components/Game";
import { RecoilRoot } from "recoil";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid } from "semantic-ui-react";

const App = () => {
  return (
    <RecoilRoot>
      <Container>
        <Game />
      </Container>
    </RecoilRoot>
  );
};

export default App;
