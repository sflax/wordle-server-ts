import { words } from "./words";

export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  console.log(`this is the word ${randomWord.toUpperCase()}`);

  return randomWord.toUpperCase();
};
