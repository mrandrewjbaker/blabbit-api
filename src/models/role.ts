import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

type TRoleType = 'site' | 'club';

export interface IRoleProperties {
  id: string;
  name: string;
  type: TRoleType;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___role = {
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
  type: {
    type: DataTypes.STRING,
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

export interface IRolePropertiesCreate extends Optional<IRoleProperties, 'id'> {}

class role extends Model<IRoleProperties, IRolePropertiesCreate>
implements IRoleProperties{
  declare id: string;
  declare name: string;
  declare type: TRoleType;
  static associate(models: any){
    
  }
};

role.init(dataSchema___role, {
  sequelize: sequelizeResource,
  modelName: 'role'
});

export default role;

const addRoleModelFunction = async (name: string, type: TRoleType) => {
  const addRoleResult = await role.create({name, type});
  return addRoleResult;
}

export {
  addRoleModelFunction,
};