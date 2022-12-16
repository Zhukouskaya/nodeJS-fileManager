import { ls } from './operations/ls.js'
import { up } from './operations/up.js';
import { add } from './operations/add.js';
import { rem } from './operations/rm.js'; 
import { hash } from './operations/hash.js';

const commands = ['cd', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress']; 
const commandsWithoutArgs = ['up', 'ls', '.exit']; 

function handler (rl, command) {
  command = command.trim();
  let operation = command.split(' ');
  try {
    if (operation.length === 1 && commandsWithoutArgs.filter(word => word === command).toString() === command) {
      switch(command.toString()) {
        case 'up':  up(); break
        case 'ls':  ls(); break
        case '.exit':  this.close(); break
      }
    } else if ((operation.length === 2 && commands.filter(word => word === operation[0]).toString() === operation[0])) {
      // console.log(`command: ${operation[0]}, args: ${operation[1]}`)
      switch (operation[0].toString()) {
        case 'rm': rem(operation[1].toString()); break
        case 'add': add(operation[1].toString()); break
        case 'hash': hash(operation[1].toString()); break
      }
    } 
    else {
      throw new Error ('Invalid input')
    }} catch (err) { 
      console.error ('Invalid input')
    }
  }

export { handler }