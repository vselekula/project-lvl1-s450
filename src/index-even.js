import readlineSync from 'readline-sync';

const headerEven = () => console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const askName = () => readlineSync.question('May I have your name? ');
const greet = name => console.log(`Hi ${name} !`);
const randomNumber = () => Math.floor(Math.random() * 10);
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
const askNumber = num => readlineSync.question(`Is this number even: ${num} `);
const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;

const evenGame = () => {
  headerEven();
  const name = askName();
  greet(name);
  let correctAnswersCounter = 0;
  let questionsCounter = 1;
  while (questionsCounter <= 3) {
    const number = randomNumber();
    const answer = askNumber(number);
    const rightAnswer = isEven(number);
    const result = isAnswerCorrect(answer, rightAnswer);
    if (result === true) {
      correctAnswersCounter += 1;
      questionsCounter += 1;
      console.log('Correct!');
    }
    if (result === false) {
      questionsCounter = 4;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}\n Let's try again, ${name}`);
    }
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};
export default evenGame;
