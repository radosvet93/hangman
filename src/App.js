import React from "react";
import Game from "./components/Game";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <Game />
      </div>
    </RecoilRoot>
  );
};

export default App;
