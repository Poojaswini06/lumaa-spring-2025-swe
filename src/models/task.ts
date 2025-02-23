import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import User from './user';

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public userId!: number;  // Changed from string to number
  public isComplete!: boolean;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,  // Changed to INTEGER to match User.id
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'tasks',
    timestamps: true,
  }
);

export default Task;