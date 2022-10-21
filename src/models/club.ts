import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { seederDataObject___statuses } from '../_migrations_and_seeders_/seeders/data/statuses';


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

export const dataSchema___club = {
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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  statusId: {
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

club.init(dataSchema___club, {
  sequelize: sequelizeResource,
  modelName: 'club'
});

export default club;

const clubCreateModelFunction = async (name: string, description: string, open: boolean, slugName: string) => {
  const registerClubResult = await club.create({
    name,
    description,
    open,
    slugName,
    memberCount: 0,
    statusId: seederDataObject___statuses.pending.id
  });
  return registerClubResult.toJSON();
}

const clubsGetAllModelFunction = async () => {
  const getAllClubsResult = await club.findAll();
  return getAllClubsResult;
}

const clubGetByIdModelFunction = async (id: string) => {
  const getClubByIdResult = await club.findByPk(id);
  return getClubByIdResult;
}

const clubUpdateByIdModelFunction = async (id: string, name: string, description: string, open: boolean, slugName: string) => {
  console.log('clubUpdateModelFunction');
  const updateClubResult = await club.update({
    name,
    description,
    open,
    slugName
  }, {
    where: {
      id
    }
  });
  return updateClubResult;
}



export { 
  clubCreateModelFunction,
  clubsGetAllModelFunction,
  clubGetByIdModelFunction,
  clubUpdateByIdModelFunction,
};