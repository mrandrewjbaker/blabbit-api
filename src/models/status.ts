import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';

type TStatusType = 'generic' | 'user'; 

export interface IStatusProperties {
  id: string;
  name: string;
  type: TStatusType;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___status = {
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

export interface IStatusPropertiesCreate extends Optional<IStatusProperties, 'id'> {}

class status extends Model<IStatusProperties, IStatusPropertiesCreate>
implements IStatusProperties{
  declare id: string;
  declare name: string;
  declare type: TStatusType;
  static associate(models: any){
    
  }
};

status.init(dataSchema___status, {
  sequelize: sequelizeResource,
  modelName: 'status'
});

export default status;

const addStatusModelFunction = async (name: string, type: TStatusType) => {
  const addStatusResult = await status.create({name, type});
  return addStatusResult;
}

const getAllStatusesModelFunction = async () => {
  const getAllStatusResult = await status.findAll();
  return getAllStatusResult;
}

const getStatusByIdModelFunction = async (id: string) => {
  const getStatusByIdResult = await status.findOne({where: {id}});
  return getStatusByIdResult;
}
  

export { 
  addStatusModelFunction,
  getAllStatusesModelFunction,
  getStatusByIdModelFunction
};