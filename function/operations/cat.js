import { createReadStream } from 'fs'
import { resolve } from "path";
import { pipeline } from "stream/promises";
import { Writable } from "stream";

import { currentDirectory } from '../currentDirectory.js';

const cat = async (pathToFile) => {
  try {
    const file = resolve(pathToFile);
    const read = createReadStream(file, "utf-8");

    await pipeline(read, new Writable({
      decodeStrings: false,
      write(chunk, _, callback) {
        console.log(chunk);
        callback();
      },
    }));
    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export { cat }