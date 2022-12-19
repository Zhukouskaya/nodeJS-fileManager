import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";

import { currentDirectory } from '../currentDirectory.js';

const mv = async (pathToFile, pathToNewDirectory) => {
  try {
    const file = resolve(pathToFile);
    const { base } = parse(file);

    const newDirectoryPath = resolve(pathToNewDirectory, base);
    const read = createReadStream(file);
    const write = createWriteStream(newDirectoryPath);

    await pipeline(read, write);
    await rm(file);

    currentDirectory();
  } catch (err) {
    console.log("Operation failed");
  }
};

export { mv };