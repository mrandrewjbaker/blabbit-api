import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';


export interface IClubPostProperties {
  id: string;
  clubId: string;
  userId: string;
  statusId: string;
  title: string;
  body: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IClubPostPropertiesCreate extends Optional<IClubPostProperties, 'id'> {}

class clubPost extends Model<IClubPostProperties, IClubPostPropertiesCreate>
implements IClubPostProperties{
  declare id: string;
  declare clubId: string;
  declare userId: string;
  declare statusId: string;
  declare title: string;
  declare body: string;
  static associate(models: any){
    
  }
};
clubPost.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  clubId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  statusId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
},{
  sequelize: sequelizeResource,
  modelName: 'clubPost',
});
export default clubPost;

const addClubPostModelFunction = async (clubId: string, userId: string, statusId: string, title: string, body: string) => {
  const addClubPostResult = await clubPost.create({
    clubId,
    userId,
    statusId,
    title,
    body
  });
  return addClubPostResult;
}

const getAllClubPostsByClubIdModelFunction = async (clubId: string) => {
  const getAllClubPostsByClubIdResult = await clubPost.findAll({where: {clubId}});
  return getAllClubPostsByClubIdResult;
}

export { 
  addClubPostModelFunction,
  getAllClubPostsByClubIdModelFunction
};