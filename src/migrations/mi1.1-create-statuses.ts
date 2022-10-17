import { QueryInterface } from 'sequelize';
import { dataSchema___status } from '../models/status';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('statuses', dataSchema___status);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('statuses');
  }
};