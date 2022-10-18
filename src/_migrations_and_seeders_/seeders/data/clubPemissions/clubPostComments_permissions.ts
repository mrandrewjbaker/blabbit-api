import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from "../permissions";
import { IPermissionProperties } from "../../../../models/permission";


export const seederDataObject___clubPostComments_permissions: ISeederDataObject___PermissionsProperties = {
  "CLUBPOSTCOMMENTS___CREATE": {
    id: uuidv5('CLUBPOSTCOMMENTS___CREATE', uuidNamespace),
    key: 'CLUBPOSTCOMMENTS___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBPOSTCOMMENTS___READ": {
    id: uuidv5('CLUBPOSTCOMMENTS___READ', uuidNamespace),
    key: 'CLUBPOSTCOMMENTS___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBPOSTCOMMENTS___UPDATE": {
    id: uuidv5('CLUBPOSTCOMMENTS___UPDATE', uuidNamespace),
    key: 'CLUBPOSTCOMMENTS___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBPOSTCOMMENTS___DELETE": {
    id: uuidv5('CLUBPOSTCOMMENTS___DELETE', uuidNamespace),
    key: 'CLUBPOSTCOMMENTS___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___clubPostComments_permissions: IPermissionProperties[] = Object.values(seederDataObject___clubPostComments_permissions);