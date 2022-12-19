
import path, { resolve } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";

import { currentDirectory } from '../currentDirectory.js';

const decompress = async (pathToFile, pathToDestination) => {
  try {
    const filePath = resolve(pathToFile);
    const extname = path.extname(filePath);
    const baseName = path.basename(filePath, extname);

    if (extname !== '.br') {
      throw new Error("Invalid file extension");
    }

    const destinationPath = resolve(pathToDestination, baseName);
    const read = createReadStream(filePath);
    const write = createWriteStream(destinationPath);

    read.pipe(createBrotliDecompress()).pipe(write)
    currentDirectory();
  } catch (error) {
    console.log(error);
    console.log("Operation failed");
  }
};

export { decompress }