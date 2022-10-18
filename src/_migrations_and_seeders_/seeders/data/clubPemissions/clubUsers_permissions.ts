import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from "../permissions";
import { IPermissionProperties } from "../../../../models/permission";


export const seederDataObject___clubUsers_permissions: ISeederDataObject___PermissionsProperties = {
  "CLUBUSERS___CREATE": {
    id: uuidv5('CLUBUSERS___CREATE', uuidNamespace),
    key: 'CLUBUSERS___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBUSERS___READ": {
    id: uuidv5('CLUBUSERS___READ', uuidNamespace),
    key: 'CLUBUSERS___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBUSERS___UPDATE": {
    id: uuidv5('CLUBUSERS___UPDATE', uuidNamespace),
    key: 'CLUBUSERS___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBUSERS___DELETE": {
    id: uuidv5('CLUBUSERS___DELETE', uuidNamespace),
    key: 'CLUBUSERS___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___clubUsers_permissions: IPermissionProperties[] = Object.values(seederDataObject___clubUsers_permissions);