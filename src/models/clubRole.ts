import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';


export interface IClubRoleProperties {
  id: string;
  name: string;
  clubId: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___clubRole = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clubId: {
    type: DataTypes.UUID,
    allowNull: false
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

export interface IClubRolePropertiesCreate extends Optional<IClubRoleProperties, 'id'> {}

class clubRole extends Model<IClubRoleProperties, IClubRolePropertiesCreate>
implements IClubRoleProperties{
  declare id: string;
  declare name: string;
  declare clubId: string;
  static associate(models: any){
    
  }
};

clubRole.init(dataSchema___clubRole, {
  sequelize: sequelizeResource,
  modelName: 'clubRole'
});

export default clubRole;

const addClubRoleModelFunction = async (name: string, clubId: string) => {
  const addRoleResult = await clubRole.create({name, clubId});
  return addRoleResult;
}

export {
  addClubRoleModelFunction,
};