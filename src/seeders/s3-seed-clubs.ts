import { QueryInterface } from 'sequelize';
import { seederData___clubs } from './data/clubs';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('clubs', seederData___clubs);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('clubs', {}, {});
  },
};