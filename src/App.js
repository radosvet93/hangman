import React from "react";
import Game from "./components/Game";
import { RecoilRoot } from "recoil";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <RecoilRoot>
    <Container>
      <Game />
    </Container>
  </RecoilRoot>
);

export default App;
