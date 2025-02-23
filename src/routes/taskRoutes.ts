// import { Router, Request, Response, NextFunction } from 'express';
// import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController';
// import authMiddleware, { AuthRequest } from '../middlewares/authMiddleware';

// const router = Router();

// // Wrap each route handler in an async function to properly handle promises
// router.get('/tasks', 
//   authMiddleware as any,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await getTasks(req as AuthRequest, res);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post('/tasks', 
//   authMiddleware as any,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await createTask(req as AuthRequest, res);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.put('/tasks/:id', 
//   authMiddleware as any,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await updateTask(req as AuthRequest, res);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/tasks/:id', 
//   authMiddleware as any,
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await deleteTask(req as AuthRequest, res);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// export default router;
import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Tasks routes
router.get('/tasks', authMiddleware, getTasks);
router.post('/tasks', authMiddleware, createTask);
router.put('/tasks/:id', authMiddleware, updateTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

export default router;