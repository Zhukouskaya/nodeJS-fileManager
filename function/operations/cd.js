import { currentDirectory } from '../currentDirectory.js';

const cd = async (pathToDirectory) => {
    try {
      process.chdir(pathToDirectory)
      currentDirectory();
    } catch (err) {
      console.error ('Operation failed')
    }
};

export { cd }