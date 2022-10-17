import { v5 as uuidv5 } from "uuid";
import { uuidNamespace } from "../d00-options";
import { IStatusProperties } from "../../../../models/status";

export interface ISeederDataObject___Statuses {
  [key: string]: IStatusProperties;
}

export const seederDataObject___statuses: ISeederDataObject___Statuses = {
  "active": {
    id: uuidv5('active', uuidNamespace),
    name: 'active',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  "inactive": {
    id: uuidv5('inactive', uuidNamespace),
    name: 'inactive',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "pending": {
    id: uuidv5('pending', uuidNamespace),
    name: 'pending',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "verified": {
    id: uuidv5('verified', uuidNamespace),
    name: 'verified',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "unverified": {
    id: uuidv5('unverified', uuidNamespace),
    name: 'unverified',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "locked": {
    id: uuidv5('locked', uuidNamespace),
    name: 'locked',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "unlocked": {
    id: uuidv5('unlocked', uuidNamespace),
    name: 'unlocked',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "deleted": {
    id: uuidv5('deleted', uuidNamespace),
    name: 'deleted',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "banned": {
    id: uuidv5('banned', uuidNamespace),
    name: 'banned',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  "suspended": {
    id: uuidv5('suspended', uuidNamespace),
    name: 'suspended',
    type: "generic",
    createdAt: new Date(),
    updatedAt: new Date()
  },

};

export const seederData___statuses: IStatusProperties[] = Object.values(seederDataObject___statuses);