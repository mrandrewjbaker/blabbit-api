import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';


export interface IClubRolePermissionProperties {
  id: string;
  clubId: string;
  clubRoleId: string;
  clubPermissionId: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___clubRolePermission = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  clubId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  clubRoleId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  clubPermissionId: {
    type: DataTypes.UUID,
    allowNull: false,
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

export interface IClubRolePermissionPropertiesCreate extends Optional<IClubRolePermissionProperties, 'id'> {}

class clubRolePermission extends Model<IClubRolePermissionProperties, IClubRolePermissionPropertiesCreate>
implements IClubRolePermissionProperties{
  declare id: string;
  declare clubId: string;
  declare clubRoleId: string;
  declare clubPermissionId: string;
  static associate(models: any){
    
  }
};

clubRolePermission.init(dataSchema___clubRolePermission, {
  sequelize: sequelizeResource,
  modelName: 'clubRolePermission'
});

export default clubRolePermission;

const addClubRolePermissionsModelFunction = async (clubId: string, clubRoleId: string, clubPermissionId: string) => {
  const addRolePermissionsResult = await clubRolePermission.create({clubId, clubRoleId, clubPermissionId});
  return addRolePermissionsResult;
}

export {
  addClubRolePermissionsModelFunction,
};