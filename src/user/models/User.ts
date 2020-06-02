import * as t from 'io-ts'
import { fromNullable } from 'io-ts-types/lib/fromNullable'

import { Permissions } from './Permission'

export const User = t.type({
  authenticated: t.boolean,
  permissions: fromNullable(Permissions, []),
})
export type User = t.TypeOf<typeof User>

export const UnknownUser: User = {
  authenticated: false,
  permissions: [],
}

export default User
