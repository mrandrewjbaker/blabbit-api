import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from ".";
import { IPermissionProperties } from "../../../../models/permission";

export const seederDataObject___permissions_permissions: ISeederDataObject___PermissionsProperties = {
  "PERMISSIONS___CREATE": {
    id: uuidv5('PERMISSIONS___CREATE', uuidNamespace),
    key: 'PERMISSIONS___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  "PERMISSIONS___READ": {
    id: uuidv5('PERMISSIONS___READ', uuidNamespace),
    key: 'PERMISSIONS___READ',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "PERMISSIONS___UPDATE": {
    id: uuidv5('PERMISSIONS___UPDATE', uuidNamespace),
    key: 'PERMISSIONS___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "PERMISSIONS___DELETE": {
    id: uuidv5('PERMISSIONS___DELETE', uuidNamespace),
    key: 'PERMISSIONS___DELETE',
    createdAt: new Date(),
    updatedAt: new Date()
  },
}

export const seederData___permissions_permissions: IPermissionProperties[] = Object.values(seederDataObject___permissions_permissions);