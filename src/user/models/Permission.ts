import * as t from 'io-ts'

import { fromEnum } from 'common/utils/io-ts'

export enum ACTION {
  CREATE = 'create',
  DELETE = 'delete',
  MANAGE = 'manage', // manage is a special @casl alias that is a union of all other action types (i.e. can do anything)
  READ = 'read',
  UPDATE = 'update',
}
export const Action = fromEnum('Action', ACTION)
export type Action = t.TypeOf<typeof Action>

export const Permission = t.tuple([Action, t.string])
export type Permission = t.TypeOf<typeof Permission>

export const Permissions = t.readonlyArray(Permission)
export type Permissions = t.TypeOf<typeof Permissions>

export default Permission
