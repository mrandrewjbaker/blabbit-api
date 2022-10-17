import { QueryInterface } from 'sequelize';
import { seederData___permissions } from './data/permissions';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('permissions', seederData___permissions);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('permissions', {}, {});
  },
};