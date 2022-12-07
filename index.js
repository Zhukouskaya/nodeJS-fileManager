import { toGreeting } from './function/toGreeting.js';
// import { toGoodbye } from './function/toGoodbye.js';
import { currentDirectory } from './function/currentDirectory.js';
import { homedir } from 'os'
import { chdir } from 'process'

const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];

chdir(homedir())

process.stdin.on('data', data => {
  
});

toGreeting();
currentDirectory();

// process.on('exit', (code) => {
//   setTimeout(() => {
//     console.log(`Thank you for using File Manager, ${username}, goodbye!`);
//   }, 1000);
// });

