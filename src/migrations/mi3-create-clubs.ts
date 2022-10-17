import { QueryInterface } from 'sequelize';
import { dataSchema___club } from '../models/club';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubs', dataSchema___club);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubs');
  }
};