import { Request, Response } from 'express';
import { Step, Store } from '../../types/main.types';
import logger from '../utils/logger';
import cache from '../cache';

const quiz = {
  next: (set: [Step], step: number) => set[step],
  write_answer: (sid: string, score: number, store: Store): void => {
    store.results.push(score);
    cache.set(sid, store, 15 * 60);
  },
};

const evaluate_answer = (answer: string, set: [Step], step: number): number => {
  logger.debug(`evaluating answer on test ${step}`);
  return set[step]?.choices.find((choice) => choice.answer === answer)?.point;
};

// add up all scores
const process_result = (results: [number]) => {
  let score = 0;
  results.forEach((r) => (score += r));
  return score > (results.length * 3) / 2 ? 'extrovert' : 'introvert';
};

const handle = (req: Request, res: Response) => {
  const answer = req.body?.answer;
  const { step } = req.params;
  const { sid } = req.cookies;
  const store: Store = cache.get(sid);

  if (answer) {
    let score = evaluate_answer(answer, store.set, Number(step) - 1);
    quiz.write_answer(sid, score, store);
  }

  const test = quiz.next(store.set, Number(step));

  if (test) {
    return res.status(200).json({
      quiz: { ...test, choices: test.choices.map((choice) => choice.answer) },
    });
  }
  cache.del(sid);
  const result: string = process_result(store.results);
  res.status(200).json({
    result,
  });
};

export default { handle };
