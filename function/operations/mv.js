import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";

import { currentDirectory } from '../currentDirectory.js';

const mv = async (pathToFile, pathToNewDirectory) => {
  try {
    const path = resolve(pathToFile);
    const { base } = parse(path);

    const newDirectoryPath = resolve(pathToNewDirectory, base);
    const read = createReadStream(path);
    const write = createWriteStream(newDirectoryPath);

    await pipeline(read, write);
    await rm(filePath);

    currentDirectory();
  } catch (err) {
    console.log("Operation failed");
  }
};

export { mv };