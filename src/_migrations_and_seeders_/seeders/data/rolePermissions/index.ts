import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";
import { IRoleProperties } from "../../../../models/role";
import { IRolePermissionProperties } from "../../../../models/rolePermission";
import { seederDataObject___roles } from "../roles";
import { seederDataObject___clubs_permissions } from "../permissions/clubs_permissions";
import { seederDataObject___clubPosts_permissions } from "../permissions/clubPosts_permissions";
import { seederDataObject___users_permissions } from "../permissions/users_permissions";

export interface ISeederData {
  [key: string]: IRoleProperties;
}



export const seederData___rolePermissions: IRolePermissionProperties[] = [
  {
    id: uuidv5('siteMember_CLUBS___READ', uuidNamespace),
    roleId: seederDataObject___roles.siteMember.id,
    permissionId: seederDataObject___clubs_permissions.CLUBS___READ.id,
    origin: 'site',    
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv5('siteMember_CLUBS___CREATE', uuidNamespace),
    roleId: seederDataObject___roles.siteMember.id,
    permissionId: seederDataObject___clubs_permissions.CLUBS___CREATE.id,
    origin: 'site',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv5('siteMember_CLUBPOSTS___READ', uuidNamespace),
    roleId: seederDataObject___roles.siteMember.id,
    permissionId: seederDataObject___clubPosts_permissions.CLUBPOSTS___READ.id,
    origin: 'site',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv5('siteMember_USERS___READ', uuidNamespace),
    roleId: seederDataObject___roles.siteMember.id,
    permissionId: seederDataObject___users_permissions.USERS___READ.id,
    origin: 'site',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]