
import path, { resolve } from "path";

import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";

import { currentDirectory } from '../currentDirectory.js';

const compress = async (pathToFile, pathToDestination) => {
  try {
    const filePath = resolve(pathToFile);
    const extname = path.extname(filePath);
    const baseName = path.basename(filePath, extname);
    const destinationPath = resolve(pathToDestination, `${baseName}.br`);
    const read = createReadStream(path.basename(filePath));
    const write = createWriteStream(destinationPath);

    read.pipe(createBrotliCompress()).pipe(write)
    currentDirectory();
  } catch (err) {
    console.log("Operation failed");
  }
};
export { compress }