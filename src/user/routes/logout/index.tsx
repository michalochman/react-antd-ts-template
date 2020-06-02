import { useContext, useEffect } from 'react'
import { queryCache } from 'react-query'

import history from 'common/utils/history'
import UserContext from 'user/context/UserContext'
import { UnknownUser } from 'user/models/User'

function UserLogoutRoute() {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    // Clear user session
    setUser(UnknownUser)
    queryCache.clear()
    history.replace('/')
  })

  return null
}

export default UserLogoutRoute
