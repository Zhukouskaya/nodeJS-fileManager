import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";

import { currentDirectory } from '../currentDirectory.js';

const cp = async (pathToFile, pathToNewDirectory) => {
  try {
    const file = resolve(pathToFile);
    const { base } = parse(file);

    const newPath = resolve(pathToNewDirectory, base);
    const read = createReadStream(file);
    const write = createWriteStream(newPath);

    await pipeline(read, write);

    currentDirectory();
  } catch (err) {
    console.log("Operation failed");
  }
};

export { cp };