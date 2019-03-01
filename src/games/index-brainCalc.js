import {
  header, condition, askName, greet, ask, isAnswerCorrect, randomNumber, randomOperator,
  ranOpWithTwoRanNum,
} from './functions';

const indexBrainCalc = (numOfQuestions) => {
  header('Welcome to the Brain Games!');
  condition('What is the result of the expression?');
  const name = askName('May I have your name? ');
  greet('Hello, ', name);
  const arrayOfOperations = ['-', '*', '+'];
  let correctAnswersCounter = 0;
  for (let i = 1; i <= numOfQuestions; i += 1) {
    const firstNumber = randomNumber(0, 10);
    const secondNumber = randomNumber(0, 10);
    const operator = randomOperator(arrayOfOperations);
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const userAnswer = ask('Question:', question, 'Your answer:');
    const rightAnswer = ranOpWithTwoRanNum(firstNumber, secondNumber, operator);
    const result = isAnswerCorrect(Number(userAnswer), rightAnswer);
    if (result) {
      correctAnswersCounter += 1;
      console.log('Correct!');
    }
    if (!result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name} !`);
    }
  }
};
export default indexBrainCalc;
