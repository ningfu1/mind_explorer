import express, { Application } from 'express';
import dotenv from 'dotenv';
import http from 'node:http';
import logger from './utils/logger';
import { setQuizData, generate } from './providers';
import cache from './cache';

dotenv.config();

// create express listener function
const app: Application = express();

const PORT = process.env.PORT || 2700;

const server = http.createServer(app);
server.listen(PORT, () => {
  logger.success(`Server is listening on port ${PORT}`);
  setQuizData();
});
