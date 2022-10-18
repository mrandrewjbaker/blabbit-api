import { QueryInterface } from 'sequelize';
import { dataSchema___role } from '../../models/role';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubRoles', dataSchema___role);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubRoles');
  }
};