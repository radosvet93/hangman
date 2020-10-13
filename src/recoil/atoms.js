import { atom } from "recoil";

export const errorsState = atom({
  key: "errors",
  default: 0,
});

export const gameStartedState = atom({
  key: "gameStarted",
  default: false,
});

export const statusState = atom({
  key: "status",
  default: "",
});

export const disabledKeyboardState = atom({
  key: "disabledKeyboard",
  default: false,
});

export const wordState = atom({
  key: "word",
  default: "",
});

export const gameWordState = atom({
  key: "gameWord",
  default: "",
});

export const styleState = atom({
  key: "style",
  default: {
    paddingXS: {
      padding: "0.5rem",
    },
    paddingSM: {
      padding: "0.75rem",
    },
    paddingMD: {
      padding: "1rem",
    },
    paddingLG: {
      padding: "1.25rem",
    },
    marginXS: {
      margin: "0.5rem",
    },
    marginSM: {
      margin: "0.75rem",
    },
    marginMD: {
      margin: "1rem",
    },
    marginLG: {
      margin: "1.25rem",
    },
    line: {
      stroke: "black",
      strokeWidth: "4px",
      strokeLinecap: "round",
    },
    circle: {
      stroke: "black",
      strokeWidth: "4px",
      fill: "transparent",
    },
  },
});
