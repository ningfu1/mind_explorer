import chalk from 'chalk';
import { Step } from '../../../types/main.types';
import cache from '../../cache';
import { setQuizData } from '../../providers';

describe(chalk.greenBright('SETUP'), () => {
  it('should use a test environment', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

  it('shoud start with a clean cache', () => {
    const data = cache.get('data');
    expect(data).toBe(undefined);
  });

  it('should seed the in-memory db', async () => {
    await setQuizData();
    const data: Step[] = cache.get('data');
    expect(typeof data.length).toBe('number');
  });
});
