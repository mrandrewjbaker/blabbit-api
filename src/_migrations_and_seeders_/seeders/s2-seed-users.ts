import { QueryInterface } from 'sequelize';
import { seederData___users } from './data/users';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('users', seederData___users);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('users', {}, {});
  },
};