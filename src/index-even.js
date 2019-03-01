import readlineSync from 'readline-sync';

const header = str => console.log(str);
const condition = str => console.log(str);
const askName = str => readlineSync.question(str);
const greet = (str, name) => console.log(`${str} ${name} !`);
const randomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min) * 10);
const isEven = num => num % 2 === 0;
const askNumber = (str, question) => readlineSync.question(`${str} ${question} `);
const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;

const evenGame = (numOfQuestions) => {
  header('Welcome to the Brain Games!');
  condition('Answer "yes" if number even otherwise answer "no".');
  const name = askName('May I have your name? ');
  greet('Hi', name);
  let correctAnswersCounter = 0;
  for (let i = 1; i <= numOfQuestions; i += 1) {
    const question = randomNumber(0, 10);
    const answer = askNumber('Is this number even:', question);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    const result = isAnswerCorrect(answer, rightAnswer);
    if (result) {
      correctAnswersCounter += 1;
      console.log('Correct!');
    }
    if (!result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};
export default evenGame;
