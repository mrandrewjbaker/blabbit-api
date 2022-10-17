import {
  Model, 
  DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource, } from '../resources/resource.sequelize';
import { seederDataObject___roles } from '../_migrations_and_seeders_/seeders/data/roles';


export interface IClubUserProperties {
  id: string;
  clubId: string;
  userId: string;
  roleId: string;
  dateEffective: Date;
  dateExpires: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export const dataSchema___clubUser = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  clubId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  roleId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  dateEffective: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dateExpires: {
    type: DataTypes.DATE,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}

export interface IClubUserPropertiesCreate extends Optional<IClubUserProperties, 'id'> {}

class clubUser extends Model<IClubUserProperties, IClubUserPropertiesCreate>
  implements IClubUserProperties {
  declare id: string;
  declare clubId: string;
  declare userId: string;
  declare roleId: string;
  declare dateEffective: Date;
  declare dateExpires: Date | null;

  static associate(models: any) {

  }
};


clubUser.init(dataSchema___clubUser, {
    sequelize: sequelizeResource,
    modelName: 'clubUser',
  },
);

export default clubUser;

const addClubUserModelFunction = async (
  clubId: string,
  userId: string,
  dateEffective: Date, 
  dateExpires: Date | null
) => {
  const addClubUserModel = await clubUser.create({
    clubId,
    userId,
    roleId: seederDataObject___roles.member.id,
    dateEffective,
    dateExpires,
  });
  
  return addClubUserModel;
}

export {
  addClubUserModelFunction,
};