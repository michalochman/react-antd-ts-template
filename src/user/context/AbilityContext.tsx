import { createContext } from 'react'
import { defineAbility } from '@casl/ability'

import User, { UnknownUser } from 'user/models/User'

export function defineAbilityFor(user: User) {
  return defineAbility(can => {
    can('use', 'App')

    if (user.authenticated) {
      user.permissions.map(([action, subject]) => can(action, subject))
    }
  })
}

const defaultAbility = defineAbilityFor(UnknownUser)

export const AbilityContext = createContext(defaultAbility)

export default AbilityContext
