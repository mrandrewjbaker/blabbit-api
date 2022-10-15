import { QueryInterface } from 'sequelize';
import { seederData___statuses } from './data/statuses';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('statuses', seederData___statuses);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('statuses', {}, {});
  },
};