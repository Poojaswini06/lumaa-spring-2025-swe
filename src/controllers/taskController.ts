import { Response } from 'express';
import Task from '../models/task';
import { AuthRequest } from '../middlewares/authMiddleware';

export const getTasks = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.userId } });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const createTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { title, description } = req.body;
  try {
    const newTask = await Task.create({
      title,
      description,
      userId: req.userId,
      isComplete: false
    });
    res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description, isComplete } = req.body;
  try {
    const task = await Task.findOne({ where: { id, userId: req.userId } });
    if (!task) {
      res.status(404).json({ message: 'Task not found.' });
      return;
    }
    await task.update({
      title: title || task.title,
      description: description || task.description,
      isComplete: isComplete !== undefined ? isComplete : task.isComplete
    });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const deleteTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id, userId: req.userId } });
    if (!task) {
      res.status(404).json({ message: 'Task not found.' });
      return;
    }
    await task.destroy();
    res.json({ message: 'Task deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};