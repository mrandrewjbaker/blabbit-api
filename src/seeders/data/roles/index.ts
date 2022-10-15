import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";
import { IRoleProperties } from "../../../models/role";

export interface ISeederDataObject___Roles {
  [key: string]: IRoleProperties;
}

export const seederDataObject___roles: ISeederDataObject___Roles = {
  "siteMember": {
    id: uuidv5('siteMember', uuidNamespace),
    name: 'siteMember',
    type: 'site',
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  "siteAdministrator": {
    id: uuidv5('siteAdministrator', uuidNamespace),
    name: 'siteAdministrator',
    type: 'site',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "siteModerator": {
    id: uuidv5('siteModerator', uuidNamespace),
    name: 'siteModerator',
    type: 'site',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "clubMember": {
    id: uuidv5('clubMember', uuidNamespace),
    name: 'clubMember',
    type: 'club',
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  "clubAdministrator": {
    id: uuidv5('clubAdministrator', uuidNamespace),
    name: 'clubAdministrator',
    type: 'club',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "clubModerator": {
    id: uuidv5('clubModerator', uuidNamespace),
    name: 'clubModerator',
    type: 'club',
    createdAt: new Date(),
    updatedAt: new Date()
  },
};

export const seederData___roles: IRoleProperties[] = Object.values(seederDataObject___roles);