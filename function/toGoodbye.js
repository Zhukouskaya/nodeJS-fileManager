import { username } from './toGreeting.js'

const toGoodbye = () => {
  process.on('exit', (code) => {
    setTimeout(() => {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    }, 1000);
  });
};

export { toGoodbye }