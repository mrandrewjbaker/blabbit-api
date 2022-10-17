import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';
import bcrypt from 'bcrypt';

import { seederDataObject___statuses } from '../_migrations_and_seeders_/seeders/data/statuses';
import { seederDataObject___roles } from '../_migrations_and_seeders_/seeders/data/roles';



export interface IUserProperties {
  id: string;
  email: string;
  username: string;
  password: string;
  statusId: string;
  roleId: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export const dataSchema___user = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statusId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  roleId: {
    type: DataTypes.UUID,
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

export interface IUserPropertiesCreate extends Optional<IUserProperties, 'id'> {}

class user extends Model<IUserProperties, IUserPropertiesCreate>
implements IUserProperties{
  declare id: string;
  declare email: string;
  declare username: string;
  declare password: string;
  declare statusId: string;
  declare roleId: string;
  static associate(models: any){
    
  }
};

user.init(dataSchema___user, {
  sequelize: sequelizeResource,
  modelName: 'user'
});

export default user;

const registerUserAuthModelFunction = async (email: string, username: string, password: string) => {
  const saltedPassword = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltedPassword);

  const registerUserAuthResult = await user.create({
    email: email,
    username: username,
    password: hashedPassword,
    statusId: seederDataObject___statuses.unverified.id,
    roleId: seederDataObject___roles.siteMember.id,
  });
  return registerUserAuthResult
}

const loginUserAuthModelFunction = async (username: string, password: string) => {
  let loginUserAuthLResult = await user.findOne({
    where: {
      username: username
    },
  });
  if (!loginUserAuthLResult) {
    return null;
  }
  const isValid = await bcrypt.compare(password, loginUserAuthLResult.password);
  if (!isValid) {
    return null;
  }

  const loginUserAuthLResultCleaned = {
    id: loginUserAuthLResult.id,
    username: loginUserAuthLResult.username,
    email: loginUserAuthLResult.email,
  }
  return loginUserAuthLResultCleaned;
}

const getUserByEmailModelFunction = async (email: string) => {
  const userAuthGetByEmailResult = await user.findOne({
    where: {
      email: email
    },
  });
  return userAuthGetByEmailResult;
}

const getUserByUsernameModelFunction = async (username: string) => {
  const userAuthGetByUsernameResult = await user.findOne({
    where: {
      username: username
    },
  });
  return userAuthGetByUsernameResult;
}

const getUserRoleByIdModelFunction = async (userId: string) => {
  const userRoleByIdResult = await user.findOne({
    where: {
      id: userId
    },
  });
  return userRoleByIdResult;
}

export { 
  registerUserAuthModelFunction,
  loginUserAuthModelFunction,
  getUserByEmailModelFunction,
  getUserByUsernameModelFunction,
  getUserRoleByIdModelFunction
};