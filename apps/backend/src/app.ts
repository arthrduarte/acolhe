import express, { Express, Request, Response } from 'express';
import { connectDB } from './db/db';
import dotenv from 'dotenv'
import { clerkMiddleware } from '@clerk/express'

dotenv.config();

const app: Express = express();
app.use(clerkMiddleware())
const port = process.env.PORT || 3001;

app.use(express.json());

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server' );
});

try {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
} catch (error) {
  console.error('Error starting the server:', error);
} 