import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";

import { ISeederDataObject___PermissionsProperties } from ".";
import { IPermissionProperties } from "../../../../models/permission";


export const seederDataObject___clubPosts_permissions: ISeederDataObject___PermissionsProperties = {
  "CLUBPOSTS___CREATE": {
    id: uuidv5('CLUBPOSTS___CREATE', uuidNamespace),
    key: 'CLUBPOSTS___CREATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBPOSTS___READ": {
    id: uuidv5('CLUBPOSTS___READ', uuidNamespace),
    key: 'CLUBPOSTS___READ',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBPOSTS___UPDATE": {
    id: uuidv5('CLUBPOSTS___UPDATE', uuidNamespace),
    key: 'CLUBPOSTS___UPDATE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  "CLUBPOSTS___DELETE": {
    id: uuidv5('CLUBPOSTS___DELETE', uuidNamespace),
    key: 'CLUBPOSTS___DELETE',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export const seederData___clubPosts_permissions: IPermissionProperties[] = Object.values(seederDataObject___clubPosts_permissions);