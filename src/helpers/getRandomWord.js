import { words } from "../constants";

export const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
