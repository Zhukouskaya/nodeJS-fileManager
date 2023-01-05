import { resolve } from 'path'
import { open } from 'fs/promises'

import { currentDirectory } from '../currentDirectory.js';

const add = async (nameFile) => {
    try {
      const path = resolve(process.cwd(), nameFile);
      (await open(path, 'w')).close() ;
      currentDirectory();
    } catch (err) {
      console.error ('Operation failed')
    }
};


export { add }
