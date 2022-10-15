import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { seederDataObject___statuses } from '../seeders/data/statuses';


import { sequelizeResource } from '../resources/resource.sequelize';


export interface IClubProperties {
  id: string;
  name: string;
  description: string;
  open: boolean;
  slugName: string;
  memberCount: number;
  statusId: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IClubPropertiesCreate extends Optional<IClubProperties, 'id'> {}

class club extends Model<IClubProperties, IClubPropertiesCreate>
implements IClubProperties{
  declare id: string;
  declare name: string;
  declare description: string;
  declare open: boolean;
  declare slugName: string;
  declare memberCount: number;
  declare statusId: string;
  static associate(models: any){
    
  }
};
club.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  open: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  slugName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  memberCount: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  statusId: {
    type: DataTypes.STRING,
    allowNull: false
  },

},{
  sequelize: sequelizeResource,
  modelName: 'user'
});
export default club;

const registerClubhModelFunction = async (name: string, description: string, open: boolean, slugName: string) => {
  const registerClubResult = await club.create({
    name,
    description,
    open,
    slugName,
    memberCount: 0,
    statusId: seederDataObject___statuses.pending.id
  });
  return registerClubResult;
}

const getAllClubsModelFunction = async () => {
  const getAllClubsResult = await club.findAll();
  return getAllClubsResult;
}


export { 
  registerClubhModelFunction,
  getAllClubsModelFunction
};