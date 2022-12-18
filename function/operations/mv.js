import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream';
import { rm } from 'fs/promises'

import { currentDirectory } from '../currentDirectory.js';

const mv = async ([pathToFile, pathToNewDirectory]) => {
  try {
    const read = createReadStream(pathToFile);
    const write = createWriteStream(pathToNewDirectory);
    await pipeline(read, write);
    await rm(path);
    currentDirectory();
  } catch (err) {
    console.error ('Operation failed')
  }
};

export { mv }