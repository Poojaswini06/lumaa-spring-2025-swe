// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes';
// import taskRoutes from './routes/taskRoutes';
// import { syncDatabase } from './models/sync';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Task Management API' });
// });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);

// // Error handling middleware
// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!', error: err.message });
// });

// // Start server
// const startServer = async () => {
//   try {
//     await syncDatabase();
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   } catch (error) {
//     console.error('Failed to start server:', error);
//     process.exit(1);
//   }
// };

// startServer();
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Task Management API is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);  // This will handle all /api/tasks routes

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});