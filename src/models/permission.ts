import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';


export interface IPermissionProperties {
  id: string;
  key: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___permission = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  key: {
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

export interface IPermissionPropertiesCreate extends Optional<IPermissionProperties, 'id'> {}

class permission extends Model<IPermissionProperties, IPermissionPropertiesCreate>
implements IPermissionProperties{
  declare id: string;
  declare key: string;
  static associate(models: any){
    
  }
};

permission.init(dataSchema___permission, {
  sequelize: sequelizeResource,
  modelName: 'permission'
});

export default permission;

const addPermissionModelFunction = async (key: string) => {
  const addPermissionResult = await permission.create({key});
  return addPermissionResult;
}

export {
  addPermissionModelFunction,
};