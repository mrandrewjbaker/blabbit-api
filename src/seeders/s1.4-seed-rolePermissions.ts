import { QueryInterface } from 'sequelize';
import { seederData___rolePermissions } from './data/rolePermissions';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('rolePermissions', seederData___rolePermissions);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('rolePermissions', {}, {});
  },
};