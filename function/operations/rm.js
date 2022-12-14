import { rm } from 'fs/promises'

import { currentDirectory } from '../currentDirectory.js';

const rem = async (path) => {
    try {
      await rm(path);
      currentDirectory();
    } catch (err) {
      console.error ('Operation failed')
    }
};

export { rem }