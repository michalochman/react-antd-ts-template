import { createContext, useEffect, useState } from 'react'
import { useSessionStorageState } from '@umijs/hooks'

import User, { UnknownUser } from 'user/models/User'

interface UserContext {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const UserContext = createContext<UserContext>({
  user: UnknownUser,
  setUser: user => user,
})

export function useUserContext() {
  const [authenticated, setAuthenticated] = useSessionStorageState<string>('authenticated', '')
  const [user, setUser] = useState<User>({
    ...UnknownUser,
    authenticated: authenticated === 'true',
  })

  useEffect(() => {
    if (`${user.authenticated}` !== authenticated) {
      setAuthenticated(`${user.authenticated}`)
    }
  }, [authenticated, setAuthenticated, user.authenticated])

  return { user, setUser }
}

export default UserContext
