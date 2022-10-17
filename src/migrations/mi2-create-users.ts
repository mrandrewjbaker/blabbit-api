import { QueryInterface } from 'sequelize';
import { dataSchema___user } from '../models/user';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('users', dataSchema___user);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  }
};