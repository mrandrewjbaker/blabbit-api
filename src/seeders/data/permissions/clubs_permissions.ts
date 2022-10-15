import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from ".";
import { IPermissionProperties } from "../../../models/permission";


export const seederDataObject___clubs_permissions: ISeederDataObject___PermissionsProperties = {
  "CLUBS___CREATE": {
    id: uuidv5('CLUBS___CREATE', uuidNamespace),
    key: 'CLUBS___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBS___READ": {
    id: uuidv5('CLUBS___READ', uuidNamespace),
    key: 'CLUBS___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBS___UPDATE": {
    id: uuidv5('CLUBS___UPDATE', uuidNamespace),
    key: 'CLUBS___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBS___DELETE": {
    id: uuidv5('CLUBS___DELETE', uuidNamespace),
    key: 'CLUBS___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___clubs_permissions: IPermissionProperties[] = Object.values(seederDataObject___clubs_permissions);