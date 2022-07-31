import express, { Application } from 'express';
import dotenv from 'dotenv';
import http from 'node:http';
import logger from './utils/logger';
import { setQuizData } from './providers';
import router from './http/express.router';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

// create express listener function
const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(router);

const PORT = process.env.PORT || 2700;

const server = http.createServer(app);
server.listen(PORT, () => {
  logger.success(`Server is listening on port ${PORT}`);
  setQuizData();
});

export { app, server };
