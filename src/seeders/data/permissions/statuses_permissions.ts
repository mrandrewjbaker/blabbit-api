import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from ".";
import { IPermissionProperties } from "../../../models/permission";


export const seederDataObject___statuses_permissions: ISeederDataObject___PermissionsProperties = {
  "STATUSES___CREATE": {
    id: uuidv5('STATUSES___CREATE', uuidNamespace),
    key: 'STATUSES___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "STATUSES___READ": {
    id: uuidv5('STATUSES___READ', uuidNamespace),
    key: 'STATUSES___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "STATUSES___UPDATE": {
    id: uuidv5('STATUSES___UPDATE', uuidNamespace),
    key: 'STATUSES___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "STATUSES___DELETE": {
    id: uuidv5('STATUSES___DELETE', uuidNamespace),
    key: 'STATUSES___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___statuses_permissions: IPermissionProperties[] = Object.values(seederDataObject___statuses_permissions);