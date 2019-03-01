import {
  header, condition, askName, greet, ask, isAnswerCorrect, randomNumber, randomOperator,
} from './functions';

const brainCalc = () => {
  header('Welcome to the Brain Games!');
  condition('What is the result of the expression?');
  const name = askName('May I have your name? ');
  greet('Hello, ', name);
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const arrayOfOperations = ['-', '*', '+'];
  const operator = randomOperator(arrayOfOperations);
  const question = () => `${firstNumber} ${operator} ${secondNumber}`;
  const userAnswer = ask('Question: ', question);
  const correctAnswerIs = () => {
    let res;
    switch (operator) {
      case '-':
        res = firstNumber - secondNumber;
        break;
      case '*':
        res = firstNumber * secondNumber;
        break;
      case '+':
        res = firstNumber + secondNumber;
        break;
      default:
        break;
    }
    return res;
  };
  console.log(isAnswerCorrect, userAnswer, correctAnswerIs);
};
export default brainCalc;
