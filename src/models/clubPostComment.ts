import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';


export interface IClubPostCommentProperties {
  id: string;
  clubPostId: string;
  parentClubPostCommentId: string | null;
  userId: string;
  statusId: string;
  body: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___clubPost = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  clubPostId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  parentClubPostCommentId: {
    type: DataTypes.UUID,
    allowNull: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  statusId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  body: {
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

export interface IClubPostCommentPropertiesCreate extends Optional<IClubPostCommentProperties, 'id'> {}

class clubPostComment extends Model<IClubPostCommentProperties, IClubPostCommentPropertiesCreate>
implements IClubPostCommentProperties{
  declare id: string;
  declare clubPostId: string;
  declare parentClubPostCommentId: string | null;
  declare userId: string;
  declare statusId: string;
  declare body: string;
  static associate(models: any){
    
  }
};
clubPostComment.init(dataSchema___clubPost ,{
  sequelize: sequelizeResource,
  modelName: 'clubPostComment',
});

export default clubPostComment;

const addClubPostCommentModelFunction = async (clubPostId: string, parentClubPostCommentId: string | null, userId: string, statusId: string, body: string) => {
  const addClubPostCommentResult = await clubPostComment.create({
    clubPostId,
    parentClubPostCommentId,
    userId,
    statusId,
    body
  });
  return addClubPostCommentResult;
}

const getAllClubPostCommentsByClubPostIdModelFunction = async (clubPostId: string) => {
  const getAllClubPostsByClubIdResult = await clubPostComment.findAll({where: {clubPostId}});
  return getAllClubPostsByClubIdResult;
}

export { 
  addClubPostCommentModelFunction,
  getAllClubPostCommentsByClubPostIdModelFunction
};