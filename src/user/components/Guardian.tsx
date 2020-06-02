import React from 'react'

import useAuthentication from 'user/hooks/useAuthentication'
import { AUTHENTICATION } from 'user/models/Auth'
import { Permissions } from 'user/models/Permission'

interface GuardianProps {
  authentication?: AUTHENTICATION
  authenticationRedirection?: string
  children: React.ReactElement
  permissions?: Permissions
}

function Guardian({ authentication, authenticationRedirection, children, permissions = [] }: GuardianProps) {
  const auth = useAuthentication({ authentication, authenticationRedirection, permissions })
  if (auth.state) {
    return auth.state
  }

  return children
}

export default Guardian
