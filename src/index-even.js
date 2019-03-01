import readlineSync from 'readline-sync';

const headerEven = () => console.log('Welcome to the Brain Games!');
const conditionEven = () => console.log('Answer "yes" if number even otherwise answer "no".');
const askName = () => readlineSync.question('May I have your name? ');
const greet = name => console.log(`Hi ${name} !`);
const randomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min) * 10);
const isEven = num => num % 2 === 0;
const askNumber = num => readlineSync.question(`Is this number even: ${num} `);
const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;

const evenGame = () => {
  headerEven();
  conditionEven();
  const name = askName();
  greet(name);
  let correctAnswersCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const question = randomNumber(0, 10);
    const answer = askNumber(question);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    const result = isAnswerCorrect(answer, rightAnswer);
    if (result) {
      correctAnswersCounter += 1;
      console.log('Correct!');
    }
    if (!result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}\n Let's try again, ${name}`);
    }
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};
export default evenGame;
