import chalk from 'chalk';

export default {
  debug: (msg: string) => console.log(`${chalk.black.cyanBright(' debug ')} [${new Date().toLocaleTimeString()}] ${msg}`),
  warn: (msg: string) => console.log(`${chalk.yellowBright('warn')} [${new Date().toLocaleTimeString()}] ${msg}`),
  error: (msg: string) => console.log(`${chalk.red('error')} [${new Date().toLocaleTimeString()}] ${msg}`),
  success: (msg: string) => console.log(`${chalk.black.greenBright(' success ')} [${new Date().toLocaleTimeString()}] ${msg}`),
};
