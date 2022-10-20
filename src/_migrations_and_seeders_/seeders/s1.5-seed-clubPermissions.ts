import { QueryInterface } from 'sequelize';
import { seederData___clubPermissions } from './data/clubPemissions';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('clubPermissions', seederData___clubPermissions);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('clubPermissions', {}, {});
  },
};