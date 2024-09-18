import express, { Request, Response } from 'express';
import notFound from './middleware/notFount';
import router from './router';
const app = express();

app.use(express.json());
app.use(notFound);
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
