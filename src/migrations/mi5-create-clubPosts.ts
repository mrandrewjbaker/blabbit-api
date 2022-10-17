import { QueryInterface } from 'sequelize';
import { dataSchema___clubPost } from '../models/clubPost';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('users', dataSchema___clubPost);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  }
};