import { Router, Request, Response } from "express";
import { wordToGuess } from "./app";

const wordle = Router();

// wordle.get("/", (req: Request, res: Response) => {
//   res.send("enter the router");
// });

wordle.post("/compare", (req: Request, res: Response) => {
  const userInput: string = req.body.userInput;
  const wordStatus: string = "";
  if (userInput === wordToGuess) {
    res.send({ wordStatus });
  }

  let letterColor = "";
  for (let index = 0; index < wordToGuess.length; index++) {
    if (wordToGuess[index] === userInput[index]) {
      letterColor = "correctSpot";
    } else if (wordToGuess.includes(userInput[index])) {
      letterColor = "wrongSpot";
    } else {
      letterColor = "notInAnySpot";
    }
  }
  res.send({ letterColor, wordStatus });
});

export default wordle;
