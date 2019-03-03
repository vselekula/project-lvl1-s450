#!/usr/bin/env node
import { cons, car, cdr } from 'hexlet-pairs';
import brainGames from '..';

const condition = 'What is the result of the expression?';
const arrayOfOperators = ['+', '-', '*'];
const generateData = () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const operation = arrayOfOperators[Math.floor(Math.random() * 3)];
  return cons(a, cons(operation, b));
};
const calculateExpression = (expression) => {
  const x = car(expression);
  const operation = car(cdr(expression));
  const y = cdr(cdr(expression));
  switch (operation) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Как так получилось — не понятно');
  }
};
const game = () => {
  const items = generateData();
  const rightAnswer = calculateExpression(items);
  return { rightAnswer, items };
};

export default () => {
  brainGames(condition, game);
};
