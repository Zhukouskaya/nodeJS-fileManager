
import { readdir } from 'fs/promises';
import { currentDirectory } from '../currentDirectory.js';

const ls = async () => {
    try {
        const filesDir = await readdir(process.cwd())
        console.table(filesDir)
        currentDirectory()
    } catch (err) {
        console.error ('Operation failed')
    }
};

export { ls }