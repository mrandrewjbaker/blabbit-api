import { QueryInterface } from 'sequelize';
import { seederData___Club } from './data/clubs';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('clubs', seederData___Club);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('clubs', {}, {});
  },
};