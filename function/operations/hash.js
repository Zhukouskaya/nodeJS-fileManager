
import { createHash } from 'crypto'
import  { readFile } from 'fs/promises'

import { currentDirectory } from '../currentDirectory.js';

const hash = async (file) => {
    try {
        const hash = createHash('sha256').update(await readFile(file)).digest('hex')
        console.log(hash)
        currentDirectory();
    } catch (err) {
      throw console.error ('Operation failed')
    }
};

export { hash };