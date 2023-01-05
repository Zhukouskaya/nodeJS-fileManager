import readline from 'readline';
import { homedir } from 'os'

import { toGreeting } from './function/toGreeting.js';
import { toGoodbye } from './function/toGoodbye.js';
import { currentDirectory } from './function/currentDirectory.js';
import { handler } from './function/handler.js';

process.chdir(homedir());

toGreeting();
currentDirectory();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', handler.bind(rl, rl.input))
    .on('SIGINT', ()=> rl.close())
    .on('close', ()=> toGoodbye())