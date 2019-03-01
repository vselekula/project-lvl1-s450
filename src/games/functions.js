import readlineSync from 'readline-sync';

export const header = str => console.log(str);
export const condition = str => console.log(str);
export const askName = str => readlineSync.question(str);
export const greet = (str, name) => console.log(`${str} ${name} !`);
export const randomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min) * 10);
export const isEven = num => num % 2 === 0;
export const ask = (strQuestion, question, strAnswer) => readlineSync.question(`${strQuestion} ${question} \n${strAnswer} `);
export const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;
export const randomOperator = (arrayOfOperations) => {
  const opIndex = Math.floor(Math.random() * arrayOfOperations.length);
  return arrayOfOperations[opIndex];
};
export const ranOpWithTwoRanNum = (num1, num2, operator) => {
  let res;
  switch (operator) {
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '+':
      res = num1 + num2;
      break;
    default:
      break;
  }
  return res;
};
