import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAbility } from '@casl/react'

import LoadingFallback from 'common/components/LoadingFallback'
import ErrorRoute from 'common/routes/error'
import AbilityContext from 'user/context/AbilityContext'
import { AUTHENTICATION } from 'user/models/Auth'
import { Permissions } from 'user/models/Permission'

import useAuthenticatedUser from './useAuthenticatedUser'

interface UseAuthenticationConfig {
  authentication?: AUTHENTICATION
  authenticationRedirection?: string
  permissions: Permissions
}

interface UseAuthenticationReturn {
  state?: React.ReactElement
}

function useAuthentication(config: UseAuthenticationConfig): UseAuthenticationReturn {
  const ability = useAbility(AbilityContext)
  const user = useAuthenticatedUser(config.authentication)

  // User is authenticated but authentication is disabled - invalid view
  if (user?.authenticated && config.authentication === AUTHENTICATION.FORBIDDEN) {
    return { state: <ErrorRoute type={404} /> }
  }

  // User is authenticated and permissions are required, but none are set yet
  if (user?.authenticated && config.permissions.length > 0 && user.permissions.length === 0) {
    return { state: <LoadingFallback /> }
  }

  const authorized = config?.permissions?.every(([action, subject]) => ability.can(action, subject))

  // User is not authenticated or not authorized
  if (!user || !authorized) {
    if (config.authenticationRedirection) {
      return { state: <Redirect to={config.authenticationRedirection} /> }
    }

    return { state: <ErrorRoute type={403} /> }
  }

  return {}
}

export default useAuthentication
