import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

type TRolePermissionsOrigin = 'site' | 'club';

export interface IRolePermissionsProperties {
  id: string;
  roleId: string;
  permissionIds: string[];
  origin: TRolePermissionsOrigin;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IRolePermissionsPropertiesCreate extends Optional<IRolePermissionsProperties, 'id'> {}

class rolePermissions extends Model<IRolePermissionsProperties, IRolePermissionsPropertiesCreate>
implements IRolePermissionsProperties{
  declare id: string;
  declare roleId: string;
  declare permissionIds: string[];
  declare origin: TRolePermissionsOrigin;
  static associate(models: any){
    
  }
};
rolePermissions.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  roleId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  permissionIds: {
    type: DataTypes.ARRAY(DataTypes.UUID),
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  sequelize: sequelizeResource,
  modelName: 'rolePermissions'
});
export default rolePermissions;

const addRolePermissionsModelFunction = async (roleId: string, permissionIds: string[], origin: TRolePermissionsOrigin) => {
  const addRolePermissionsResult = await rolePermissions.create({roleId, permissionIds, origin});
  return addRolePermissionsResult;
}
  

export {
  addRolePermissionsModelFunction,
};