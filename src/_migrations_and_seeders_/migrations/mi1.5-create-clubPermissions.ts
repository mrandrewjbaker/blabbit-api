import { QueryInterface } from 'sequelize';
import { dataSchema___clubPermission } from '../../models/clubPermission';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubPermissions', dataSchema___clubPermission);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubPermissions');
  }
};