import readlineSync from 'readline-sync';
const getName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

export const actual;