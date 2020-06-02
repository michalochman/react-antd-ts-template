import { useContext, useEffect } from 'react'

import history from 'common/utils/history'
import UserContext from 'user/context/UserContext'
import { AUTHENTICATION } from 'user/models/Auth'
import { Permissions } from 'user/models/Permission'
import User from 'user/models/User'

export function useAuthenticatedUser(authentication?: AUTHENTICATION): User | undefined {
  const { user, setUser } = useContext(UserContext)
  const { authenticated } = user

  // Make permissions available here
  const permissions: Permissions = []

  // Set permissions
  useEffect(() => {
    if (permissions?.length && user.permissions !== permissions) {
      setUser(user => ({ ...user, permissions }))
    }
  }, [permissions, setUser, user.permissions])

  // Handle login
  useEffect(() => {
    if (authentication === AUTHENTICATION.REQUIRED && !authenticated) {
      history.replace('/user/login', { from: window.location.pathname })
    }
  }, [authentication, authenticated])

  return authenticated || authentication !== AUTHENTICATION.REQUIRED ? user : undefined
}

export default useAuthenticatedUser
