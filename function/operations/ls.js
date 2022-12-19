import { readdir } from "fs/promises";
import { resolve } from "path";

import { currentDirectory } from '../currentDirectory.js';

const ls = async () => {
  try {
    const curDirectory = resolve(process.cwd());
    const files = (await readdir(curDirectory, { withFileTypes: true })).map((el) => {
      return {
        Name: el.name,
        Type: el.isDirectory() ? "directory" : "file",
      };
    });
    console.table(files)
    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export { ls }