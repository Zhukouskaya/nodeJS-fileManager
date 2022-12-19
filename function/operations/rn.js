import { rename } from 'fs/promises'

import { currentDirectory } from '../currentDirectory.js';

const rn = async (pathToFile, newFilename) => {
    try {
      const path = resolve(pathToFile);
      await rm(path);
      currentDirectory();
    } catch (err) {
      console.error ('Operation failed')
    }
};

export { rn }