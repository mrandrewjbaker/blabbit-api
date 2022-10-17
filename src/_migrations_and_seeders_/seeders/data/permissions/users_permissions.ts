import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from ".";
import { IPermissionProperties } from "../../../../models/permission";


export const seederDataObject___users_permissions: ISeederDataObject___PermissionsProperties = {
  "USERS___CREATE": {
    id: uuidv5('USERS___CREATE', uuidNamespace),
    key: 'USERS___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "USERS___READ": {
    id: uuidv5('USERS___READ', uuidNamespace),
    key: 'USERS___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "USERS___UPDATE": {
    id: uuidv5('USERS___UPDATE', uuidNamespace),
    key: 'USERS___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "USERS___DELETE": {
    id: uuidv5('USERS___DELETE', uuidNamespace),
    key: 'USERS___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___users_permissions: IPermissionProperties[] = Object.values(seederDataObject___users_permissions);