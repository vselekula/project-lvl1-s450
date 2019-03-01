import readlineSync from 'readline-sync';

export const header = str => console.log(str);
export const condition = str => console.log(str);
export const askName = str => readlineSync.question(str);
export const greet = (str, name) => console.log(`${str} ${name} !`);
export const randomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min) * 10);
export const isEven = num => num % 2 === 0;
export const ask = (str, question) => readlineSync.question(`${str} ${question} `);
export const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;
export const randomOperator = (arrayOfOperations) => {
  const opIndex = Math.floor(Math.random() * arrayOfOperations.length);
  return arrayOfOperations[opIndex];
};
