import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';

type TRolePermissionOrigin = 'site' | 'club';

export interface IRolePermissionProperties {
  id: string;
  roleId: string;
  permissionId: string;
  origin: TRolePermissionOrigin;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___rolePermission = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  roleId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  permissionId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
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

export interface IRolePermissionPropertiesCreate extends Optional<IRolePermissionProperties, 'id'> {}

class rolePermission extends Model<IRolePermissionProperties, IRolePermissionPropertiesCreate>
implements IRolePermissionProperties{
  declare id: string;
  declare roleId: string;
  declare permissionId: string;
  declare origin: TRolePermissionOrigin;
  static associate(models: any){
    
  }
};

rolePermission.init(dataSchema___rolePermission, {
  sequelize: sequelizeResource,
  modelName: 'rolePermission'
});

export default rolePermission;

const addRolePermissionsModelFunction = async (roleId: string, permissionId: string, origin: TRolePermissionOrigin) => {
  const addRolePermissionsResult = await rolePermission.create({roleId, permissionId, origin});
  return addRolePermissionsResult;
}

export {
  addRolePermissionsModelFunction,
};