import { ls } from './operations/ls.js'
import { up } from './operations/up.js';
import { mv } from './operations/mv.js'; 
import { cd } from './operations/cd.js';
import { add } from './operations/add.js';
import { rem } from './operations/rm.js'; 
import { hash } from './operations/hash.js'

const commandCheek = ["cat","rn","cp","os","compress","decompress"]


const commandsWithoutArgs = ['up', 'ls', '.exit']; 
const commandsWithTwoArgs = ['cd', 'cat', 'add', 'rn', 'cp', 'rm', 'os', 'hash', 'compress', 'decompress']; 
const commandsWithThreeArgs = ['mv']; 

function handler (rl, command) {
  command = command.trim();
  let operation = command.split(' ');
  // console.log('handler:', operation)
  try {
    if (operation.length === 1 && commandsWithoutArgs.filter(word => word === command).toString() === command) {
      switch(command.toString()) {
        case 'up':  up(); break
        case 'ls':  ls(); break
        case '.exit':  this.close(); break
      }
    } else if (operation.length === 2 && commandsWithTwoArgs.filter(word => word === operation[0]).toString() === operation[0]) {
      // console.log(`command: ${operation[0]}, args: ${operation[1]}`)
      let args = operation[1].toString();
      switch (operation[0].toString()) {
        case 'rm': rem(args); break
        case 'cd': cd(args); break
        case 'add': add(args); break
        case 'hash': hash(args); break
      }
    } else if (operation.length === 3 && commandsWithThreeArgs.filter(word => word === operation[0]).toString() === operation[0]) {
      // console.log(`command: ${operation[0]}, args: ${[operation[1], operation[2]]}`)
      switch (operation[0].toString()) {
        case 'mv': mv(operation[1], operation[2]); break
        case 'rn': rn(operation[1], operation[2]); break
      }
    }
    else {
      throw new Error ('Invalid input')
    }} catch (err) { 
      console.error ('Invalid input')
    }
  }

export { handler }


