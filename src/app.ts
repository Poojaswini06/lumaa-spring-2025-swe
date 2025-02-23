import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/api', taskRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
