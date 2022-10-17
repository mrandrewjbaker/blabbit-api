import { IPermissionProperties } from "../../../../models/permission";
import { seederDataObject___clubPosts_permissions } from "./clubPosts_permissions";
import { seederDataObject___clubs_permissions } from "./clubs_permissions";
import { seederDataObject___permissions_permissions } from "./permissions_permissions";
import { seederDataObject___roles_permissions } from "./roles_permissions";
import { seederDataObject___statuses_permissions } from "./statuses_permissions";
import { seederDataObject___users_permissions } from "./users_permissions";

export interface ISeederDataObject___PermissionsProperties {
  [key: string]: IPermissionProperties;
}

export const seederDataObject___permissions: ISeederDataObject___PermissionsProperties = {
  ...seederDataObject___statuses_permissions,
  ...seederDataObject___roles_permissions,
  ...seederDataObject___permissions_permissions,
  ...seederDataObject___users_permissions,
  ...seederDataObject___clubs_permissions,
  ...seederDataObject___clubPosts_permissions,

};

export const seederData___permissions: IPermissionProperties[] = Object.values(seederDataObject___permissions);