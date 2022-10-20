import { IRoleProperties } from "../../../../models/role";
import { IRolePermissionProperties } from "../../../../models/rolePermission";
import { seederData___siteMember_rolePermissions } from "./siteMember_rolePermissions";

export interface ISeederData {
  [key: string]: IRoleProperties;
}



export const seederData___rolePermissions: IRolePermissionProperties[] = [
  ...seederData___siteMember_rolePermissions
]