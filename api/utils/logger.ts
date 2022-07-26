import chalk from 'chalk';

export default {
  info: (msg: string) => console.log(`${chalk.black.bgCyan(' INFO ')} [${new Date().toLocaleTimeString()}] ${msg}`),
  warn: (msg: string) => console.log(`${chalk.yellowBright('WARNING')} [${new Date().toLocaleTimeString()}] ${msg}`),
  debug: (msg: string) => console.log(`${chalk.red('DEBUG')} [${new Date().toLocaleTimeString()}] ${msg}`),
  success: (msg: string) => console.log(`${chalk.black.bgGreenBright(' SUCCESS ')} [${new Date().toLocaleTimeString()}] ${msg}`),
};
