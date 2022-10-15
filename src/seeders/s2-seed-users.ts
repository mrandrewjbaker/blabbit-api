import { QueryInterface } from 'sequelize';
import { seedUsersData } from './data/users';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('users', seedUsersData);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('users', {}, {});
  },
};