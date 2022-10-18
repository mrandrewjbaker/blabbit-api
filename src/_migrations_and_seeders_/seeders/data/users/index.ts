import { IUserProperties } from "../../../../models/user";
import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";
import { seederDataObject___statuses } from "../statuses";
import { seederDataObject___roles } from "../roles";

export const seederData___users: IUserProperties[] = [
  {
    id: uuidv5('babbitAdmin', uuidNamespace),
    username: 'babbitAdmin',
    email: 'admin@blabbit.com',
    password: '$2b$10$bBDtyWu3wPVTYvr.OO4dheGlXx26ofc1CR7m3lnWFNBwmqHKtQ5Km',
    statusId: seederDataObject___statuses.verified.id,
    roleId: seederDataObject___roles.siteAdministrator.id,
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  {
    id: uuidv5('userSiteMember_1', uuidNamespace),
    username: 'userSiteMember_1',
    email: 'userSiteMember_1@email.com',
    password: '$2b$10$bBDtyWu3wPVTYvr.OO4dheGlXx26ofc1CR7m3lnWFNBwmqHKtQ5Km',
    statusId: seederDataObject___statuses.verified.id,
    roleId: seederDataObject___roles.siteMember.id,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: uuidv5('userSiteMember_2', uuidNamespace),
    username: 'userSiteMember_2',
    email: 'userSiteMember_2@email.com',
    password: '$2b$10$bBDtyWu3wPVTYvr.OO4dheGlXx26ofc1CR7m3lnWFNBwmqHKtQ5Km',
    statusId: seederDataObject___statuses.verified.id,
    roleId: seederDataObject___roles.siteMember.id,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: uuidv5('webdevClubAdmin', uuidNamespace),
    username: 'webdevClubAdmin',
    email: 'webdevClubAdmin@email.com',
    password: '$2b$10$bBDtyWu3wPVTYvr.OO4dheGlXx26ofc1CR7m3lnWFNBwmqHKtQ5Km',
    statusId: seederDataObject___statuses.verified.id,
    roleId: seederDataObject___roles.siteMember.id,
    createdAt: new Date(),
    updatedAt: new Date()
  },

];