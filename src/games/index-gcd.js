import {car, cdr, cons} from "hexlet-pairs";
import brainGames from "../index";

const condition = 'Find the greatest common divisor of given numbers.';
const generateData = () => {
  const a = Math.floor((Math.random() * 100) + 1);
  const b = Math.floor((Math.random() * 100) + 1);
  return cons(a, b);
};
const calculateDividor = (x, y) => {
    if (y === 0) {
      return x;
    }
    return calculateDividor(y, x % y);
};

const game = () => {
  const items = generateData();
  const rightAnswer = calculateDividor(car(items), cdr(items));
  return { rightAnswer, items };
};

export default () => {
  brainGames(condition, game);
};