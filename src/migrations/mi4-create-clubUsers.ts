import { QueryInterface } from 'sequelize';
import { dataSchema___clubUser } from '../models/clubUser';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubUsers', dataSchema___clubUser);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubUsers');
  }
};