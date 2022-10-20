import { IPermissionProperties } from "../../../../models/permission";
import { IClubPermissionProperties } from "../../../../models/clubPermission";
import { seederDataObject___clubs_permissions } from "./clubs_permissions";
import { seederDataObject___clubUsers_permissions } from "./clubUsers_permissions";
import { seederDataObject___clubPosts_permissions } from "./clubPosts_permissions";

export interface ISeederDataObject___ClubPermissionsProperties {
  [key: string]: IPermissionProperties;
}

export const seederDataObject___clubPermissions: ISeederDataObject___ClubPermissionsProperties = {
  ...seederDataObject___clubs_permissions,
  ...seederDataObject___clubUsers_permissions,
  ...seederDataObject___clubPosts_permissions
}

export const seederData___clubPermissions: IClubPermissionProperties[] = Object.values(seederDataObject___clubPermissions);