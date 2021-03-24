import { exec, spawn } from 'child_process';

/**
 * returns a Promise which fulfills with the result of a shell command
 * rejects with stderr
 * @see https://gist.github.com/jmptable/7a3aa580efffdef50fa9f0dd3d068d6f
 * @param command
 */
export const run = async (command: string) => {
  return new Promise<string>((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }

      if (stderr) {
        reject(new Error(stderr));
        return;
      }

      resolve(stdout);
    });
  });
};

/**
 * returns Promise which fulfills with true if command exists
 * @param cmd
 */
export const exists = async (cmd: string) => {
  const stdout = await run(`which ${cmd}`);
  if (stdout.trim().length === 0) {
    // maybe an empty command was supplied?
    // are we running on Windows??
    return Promise.reject(new Error('No output'));
  }
}

/**
 * returns Promise which fulfills with true if command exists
 * @param cmd
 */
 export const existsAlt = async (cmd: string) => {
  return new Promise((resolve) => {
    spawn("type", [cmd]).on('exit', (code) => {
      resolve(code === 0 ? true : false)
    });
  });
}