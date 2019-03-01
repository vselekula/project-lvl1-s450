import {
  header, condition, askName, greet, ask, isAnswerCorrect, randomNumber, isEven,
} from './functions';

const indexBrainEven = (numOfQuestions) => {
  header('Welcome to the Brain Games!');
  condition('Answer "yes" if number even otherwise answer "no".');
  const name = askName('May I have your name? ');
  greet('Hi', name);
  let correctAnswersCounter = 0;
  for (let i = 1; i <= numOfQuestions; i += 1) {
    const question = randomNumber(0, 10);
    const answer = ask('Is this number even:', question, 'Your answer:');
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    const result = isAnswerCorrect(answer, rightAnswer);
    if (result) {
      correctAnswersCounter += 1;
      console.log('Correct!');
    }
    if (!result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default indexBrainEven;
