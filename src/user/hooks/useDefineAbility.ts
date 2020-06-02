import { useContext } from 'react'

import { defineAbilityFor } from 'user/context/AbilityContext'
import UserContext from 'user/context/UserContext'

export function useDefineAbility() {
  const { user } = useContext(UserContext)

  return defineAbilityFor(user)
}
