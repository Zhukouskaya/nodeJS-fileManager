import { readdir } from "fs/promises";
import { resolve } from "path";

import { currentDirectory } from '../currentDirectory.js';

const ls = async () => {
  try {
    const _path = process.cwd();
    const _result = (await readdir(_path, { withFileTypes: true })).reduce(
      (acc, item) => {
        const _isDirectory = item.isDirectory();
        const _item = {
          Name: item.name,
          Type: _isDirectory ? 'directory' : 'file',
        };
        return {
          ...acc,
          ...(_isDirectory
            ? { dir: [...acc.dir, _item] }
            : { files: [...acc.files, _item] }),
        };
      },
      { dir: [], files: [] }
    );

    console.table([..._result.dir, ..._result.files]);
    return done();
    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export { ls }