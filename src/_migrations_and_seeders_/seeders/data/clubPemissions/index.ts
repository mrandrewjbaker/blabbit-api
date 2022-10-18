import { IPermissionProperties } from "../../../../models/permission";
import { IClubPermissionProperties } from "../../../../models/clubPermission";

export interface ISeederDataObject___ClubPermissionsProperties {
  [key: string]: IPermissionProperties;
}

export const seederDataObject___clubPermissions: ISeederDataObject___ClubPermissionsProperties = {

}

export const seederData___clubPermissions: IClubPermissionProperties[] = Object.values(seederDataObject___clubPermissions);