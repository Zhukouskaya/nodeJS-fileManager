import { ls } from './operations/ls.js'
import { up } from './operations/up.js';

const commands = ['cd', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress']; 
const commandsWithoutArgs = ['up', 'ls', '.exit']; 

function handler (rl, command) {
  command = command.trim();
  let operation = command.split(' ');
  // console.log(`handler test: ${operation}`, typeof(operation))
  try {
    if (operation.length === 1 && commandsWithoutArgs.filter(word => word === command).toString() === command) {
      switch(command.toString()) {
        case 'up':  up(); break
        case 'ls':  ls(); break
        case '.exit':  this.close(); break
      }
    } else if ((operation.length === 2 && commandsWithoutArgs.filter(word => word === command).toString() === operation[0])) {
      console.log(`command: ${operation[0]}, args: ${operation[1]}`)
    } 
    else {
      throw new Error ('Invalid input')
    }} catch (err) { 
      console.error ('Invalid input')
    }
  }

export {handler}