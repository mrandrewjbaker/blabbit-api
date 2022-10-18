import { QueryInterface } from 'sequelize';
import { dataSchema___rolePermission } from '../../models/rolePermission';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubRolePermissions', dataSchema___rolePermission);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubRolePermissions');
  }
};