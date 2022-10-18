import { Model } from 'sequelize';

import { sequelizeResource } from '../resources/resource.sequelize';
import { dataSchema___permission, IPermissionProperties, IPermissionPropertiesCreate } from './permission';


export interface IClubPermissionProperties extends IPermissionProperties {};

export const dataSchema___clubPermission = dataSchema___permission;

export interface IClubPermissionPropertiesCreate extends IPermissionPropertiesCreate {};

class clubPermission extends Model<IClubPermissionProperties, IClubPermissionPropertiesCreate>
implements IClubPermissionProperties{
  declare id: string;
  declare key: string;
  static associate(models: any){
    
  }
};

clubPermission.init(dataSchema___clubPermission, {
  sequelize: sequelizeResource,
  modelName: 'clubPermission'
});

export default clubPermission;

const addClubPermissionModelFunction = async (key: string) => {
  const addClubPermissionResult = await clubPermission.create({key});
  return addClubPermissionResult;
}

export {
  addClubPermissionModelFunction,
};