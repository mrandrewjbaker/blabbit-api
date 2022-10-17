import { IPermissionProperties } from "../../../models/permission";
import { v5 as uuidv5 } from "uuid";
import { ISeederDataObject___PermissionsProperties } from ".";
import { uuidNamespace } from "../d00-options";


export const seederDataObject___roles_permissions: ISeederDataObject___PermissionsProperties = {
  "ROLES___CREATE": {
    id: uuidv5('ROLES___CREATE', uuidNamespace),
    key: 'ROLES___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "ROLES___READ": {
    id: uuidv5('ROLES___READ', uuidNamespace),
    key: 'ROLES___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "ROLES___UPDATE": {
    id: uuidv5('ROLES___UPDATE', uuidNamespace),
    key: 'ROLES___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "ROLES___DELETE": {
    id: uuidv5('ROLES___DELETE', uuidNamespace),
    key: 'ROLES___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___roles_permissions: IPermissionProperties[] = Object.values(seederDataObject___roles_permissions);