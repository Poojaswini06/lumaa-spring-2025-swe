import sequelize from '../config/db';
import User from './user';
import Task from './task';

export const syncDatabase = async () => {
  try {
    // Drop existing tables
    await sequelize.drop();
    console.log('All tables dropped!');

    // Relationships
    Task.belongsTo(User, { foreignKey: 'userId' });
    User.hasMany(Task, { foreignKey: 'userId' });

    // Sync all models
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Unable to sync database:', error);
    throw error;
  }
};