import { QueryInterface } from 'sequelize';
import { dataSchema___permission } from '../models/permission';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('permissions', dataSchema___permission);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('permissions');
  }
};