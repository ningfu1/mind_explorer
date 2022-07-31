import express from 'express';
import chalk from 'chalk';
import { app, server } from '../..';
import request from 'supertest';
import cache from '../../cache';
import { Step } from '../../../types/main.types';

afterAll(() => {
  server.close();
});

let App: express.Application = app;

describe(chalk.greenBright('ENDPOINTS'), () => {
  it('should respond to /healthcheck', async () => {
    const res = await request(App).get('/healthcheck');
    expect(res.statusCode).toBe(200);
  });

  it('should fail on step 1 without a valid session id', async () => {
    const res = await request(App).post('/quiz/1');
    expect(typeof res.body?.quiz?.test).toBe('undefined');
    expect(res.statusCode).toBe(400);
  });

  it('should send the first question with session id', async () => {
    const res = await request(App).post('/quiz/0');
    expect(typeof res.body?.quiz.test).toBe('string');
  });

  it('should not send quiz on step greater than data.length', async () => {
    const data: Step[] = cache.get('data');
    const res = await request(App).post(`/quiz/${data.length + 1}`);
    expect(res.body.quiz).toBe(undefined);
  });
});
