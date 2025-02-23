import { Router, Request, Response, NextFunction } from 'express';
import * as authController from '../controllers/authController';

const router = Router();

// Wrap the controller functions to handle async
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authController.register(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authController.login(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;