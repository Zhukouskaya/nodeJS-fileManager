import { homedir } from 'os'
import { EventEmitter, on } from 'events'
import readline from 'readline';

import { toGreeting } from './function/toGreeting.js';
import { toGoodbye } from './function/toGoodbye.js';
import { currentDirectory } from './function/currentDirectory.js';

const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];

process.chdir(homedir());

toGreeting();
currentDirectory();

const emitter = new EventEmitter().setMaxListeners(0);

// emitter
//   .on('up',function)
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

  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
  })
    .on('SIGINT', ()=> rl.close())
    .on('close', ()=> toGoodbye())