import { QueryInterface } from 'sequelize';
import { seederData___roles } from './data/roles';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('roles', seederData___roles);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('roles', {}, {});
  },
};