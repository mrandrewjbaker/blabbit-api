import { QueryInterface } from 'sequelize';
import { seederData___permissions } from './data/permissions';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('clubPermissions', seederData___clubPermissions);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('clubPermissions', {}, {});
  },
};