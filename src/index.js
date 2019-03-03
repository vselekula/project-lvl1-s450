import { car, cdr, isPair } from 'hexlet-pairs';
import {
  header, askName, win, answerIsIncorrect, answerIsCorrect, greet, ask,
} from './games/functions';

const numOfQuestion = 3;
const toString = (pair) => {
  if (isPair(pair)) {
    const left = toString(car(pair));
    const right = toString(cdr(pair));
    return `${left} ${right}`;
  }
  return String(pair);
};

export default (condition, game) => {
  header();
  if (condition !== undefined) {
    console.log(`${condition}\n`);
  }
  const userName = askName();
  greet(userName);
  if (game !== undefined) {
    const iter = (acc) => {
      if (acc === 0) {
        win(userName);
        return;
      }
      const { rightAnswer, items } = game();
      const userAnswer = ask(toString(items));
      if (String(rightAnswer) === userAnswer) {
        answerIsCorrect();
        iter(acc - 1);
      } else {
        answerIsIncorrect(userAnswer, rightAnswer, userName);
      }
    };
    iter(numOfQuestion);
  }
};
