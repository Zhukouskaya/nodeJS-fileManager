import { homedir } from 'os'
import { EventEmitter } from 'events'
import readline from 'readline';

import { toGreeting } from './function/toGreeting.js';
import { toGoodbye } from './function/toGoodbye.js';
import { currentDirectory } from './function/currentDirectory.js';
import { handler } from './function/handler.js';
import { test } from './function/test.js';

// npm run start -- --username=your_username

process.chdir(homedir());

toGreeting();
currentDirectory();

const emitter = new EventEmitter().setMaxListeners(0);

emitter
  .on('up', test)
//   .on('cd',function)
//   .on('ls',function)
//   .on('cat',function)
//   .on('add',function)
//   .on('rn',function)
//   .on('cp',function)
//   .on('mv',function)
//   .on('rm',function)
//   .on('os',function)
//   .on('hash',function)
//   .on('compress',function)
//   .on('decompress',function)

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', handler.bind(rl, emitter))
    .on('SIGINT', ()=> rl.close())
    .on('close', ()=> toGoodbye())