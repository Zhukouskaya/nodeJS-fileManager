import { currentDirectory } from '../currentDirectory.js';

const up = async () => {
  try {
    process.chdir('..')
    currentDirectory()
  } catch (err) {
    console.error ('Operation failed')
  }
};

export { up }