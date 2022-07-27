import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import cache from '../cache';
import crypto from 'node:crypto';
import { generate } from '../providers';

const uuid = {
  get: () => crypto.randomUUID(),
};

const validate_sid = (req: Request, res: Response, next: NextFunction) => {
  const sid = req.cookies?.sid;
  const store = cache.get(`${sid}`);
  const { step } = req.params;

  if (!store && step !== '0') return res.status(400).json('Session has expired. Try again!');
  if (!store) {
    let id = uuid.get();
    res.cookie('sid', id, { maxAge: 15 * 60 * 1000 });
    // proceed the request with the recently signed cookie
    req.cookies = {
      sid: id,
    };
    cache.set(
      id,
      {
        set: generate(cache.get('data')),
        results: [],
      },
      60 * 15
    );
  }
  next();
};

export default {
  validate_sid,
};
