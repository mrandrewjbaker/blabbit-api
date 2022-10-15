import { QueryInterface, DataTypes, AbstractDataTypeConstructor } from 'sequelize';




module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('clubUserModeration', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      clubId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      dateEffective: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('clubUserModeration');
  }
};