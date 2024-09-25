import express, { Request, Response } from 'express';
import notFound from './middleware/notFount';
import router from './router';
import globalErrorHandler from './middleware/GlobalErrorHandler';

const app = express();

app.use(express.json());
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running perfectly!!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
