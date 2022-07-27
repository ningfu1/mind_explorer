import fs from 'fs';
import { Step } from '../../types/main.types';
import cache from '../cache';
import logger from '../utils/logger';

const setQuizData = () => {
  logger.info('seeding database');
  const quiz_data: [Step] = JSON.parse(
    fs.readFileSync(`${__dirname}/data.json`, {
      encoding: 'utf-8',
    })
  );

  cache.set('data', quiz_data);
};

/* generate random set of questions for a single user */
const generate = (data: [Step]) => {
  logger.info('generating random set of questions');
  data.forEach((item, index) => {
    let randomIndex = Math.floor(Math.random() * (data.length - 1));
    [data[index], data[randomIndex]] = [data[randomIndex], data[index]];
  });

  return data.slice(0, 5);
};

export { setQuizData, generate };
