import {
  Model, 
  DataTypes, Optional,
} from 'sequelize';
import { seederDataObject___roles } from '../seeders/data/roles';


import { sequelizeResource, } from '../resources/resource.sequelize';


export interface IClubUserMemberProperties {
  id: string;
  clubId: string;
  userId: string;
  roleId: string;
  dateEffective: Date;
  dateExpires: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IClubUserMemberPropertiesCreate extends Optional<IClubUserMemberProperties, 'id'> { }

class clubUserMember extends Model<IClubUserMemberProperties, IClubUserMemberPropertiesCreate>
  implements IClubUserMemberProperties {
  declare id: string;
  declare clubId: string;
  declare userId: string;
  declare roleId: string;
  declare dateEffective: Date;
  declare dateExpires: Date | null;

  static associate(models: any,) {

  }
};
clubUserMember.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    clubId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dateEffective: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeResource,
    modelName: 'clubUserMember',
  },
);
export default clubUserMember;

const addClubUserMemberModelFunction = async (
  clubId: string, 
  userId: string, 
  dateEffective: Date, 
  dateExpires: Date | null
) => {
  const addClubUserMemberModel = await clubUserMember.create({
    clubId,
    userId,
    roleId: seederDataObject___roles.member.id,
    dateEffective,
    dateExpires,
  });
  
  return addClubUserMemberModel;
}

export {
  addClubUserMemberModelFunction,
};