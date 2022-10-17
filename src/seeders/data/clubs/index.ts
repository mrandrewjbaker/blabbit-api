import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";
import { IClubProperties } from "../../../models/club";
import { seederDataObject___statuses } from "../statuses";

export interface ISeederDataObject___ClubProperties {
  [key: string]: IClubProperties;
}

export const seederDataObject___clubs: ISeederDataObject___ClubProperties = {
  "blabbit": {
    id: uuidv5('blabbit', uuidNamespace),
    name: 'blabbit',
    description: 'This is the blabbit club, primarily for staff and admins of the blabbit app.',
    open: false,
    slugName: 'blabbit',
    memberCount: 2,
    statusId: seederDataObject___statuses.active.id,
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  "webdev":{
    id: uuidv5('webdev', uuidNamespace),
    name: 'webdev',
    description: 'This is the webdev club, primarily for web developers.',
    open: true,
    slugName: 'webdev',
    memberCount: 1,
    statusId: seederDataObject___statuses.active.id,
    createdAt: new Date(),
    updatedAt: new Date()
  }
};

export const seederData___clubs: IClubProperties[] = Object.values(seederDataObject___clubs);