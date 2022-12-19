import { cpus, userInfo, EOL, homedir } from "os";

import { currentDirectory } from '../currentDirectory.js';

const os = async (arg) => {
  try {
    switch (arg) {
      case "--EOL":
        console.log(JSON.stringify(EOL));
        break;

      case "--cpus":
        const cpusInfo = cpus().map(({ model, speed }) => ({
          model,
          speed: (speed / 1000).toFixed(2),
        }));
        console.table(cpusInfo);
        console.log(`length ${cpusInfo.length}`);
        break;

      case "--homedir":
        console.log(homedir());
        break;

      case "--username":
        console.log(userInfo().username);
        break;

      case "--architecture":
        console.log(process.arch);
        break;

      default:
        throw new Error("Invalid input");
    }

    currentDirectory();
  } catch (error) {
    console.log(error);
  }
};

export { os };