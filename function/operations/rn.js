import { rename } from 'fs/promises'
import { resolve, parse } from "path";

import { currentDirectory } from '../currentDirectory.js';

const rn = async (pathToFile, newFileName) => {
    try {
      const file = resolve(pathToFile);
      const { dir } = parse(file);
      const pathFromFile = resolve(dir, newFileName);
      await rename(file, pathFromFile);
      currentDirectory()
      } catch (err) {
        console.log("Operation failed");
    }
};

export { rn }