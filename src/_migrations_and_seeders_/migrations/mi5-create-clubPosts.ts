import { QueryInterface } from 'sequelize';
import { dataSchema___clubPost } from '../../models/clubPost';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubPosts', dataSchema___clubPost);
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubPosts');
  }
};