import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getRandomWord } from "./getRandomWord";
import wordle from "./gameLogic";

const app = express();
const port = 3008;
app.use(cors());
//the gate :)
app.use("/word", wordle);
app.use(bodyParser.json());

export const wordToGuess = getRandomWord();
app.get("/", (req: Request, res: Response) => {
  res.send(getRandomWord());
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
