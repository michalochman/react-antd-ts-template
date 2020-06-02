import React from 'react'

import FullscreenLayout from 'common/layouts/fullscreen'

import Error403 from './Error403'
import Error404 from './Error404'
import Error500 from './Error500'

export enum ErrorType {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  ERROR = 500,
}

interface Props {
  type?: ErrorType
}

const errorComponents = new Map([
  [ErrorType.FORBIDDEN, Error403],
  [ErrorType.NOT_FOUND, Error404],
  [ErrorType.ERROR, Error500],
])

function ErrorRoute({ type = 404 }: Props) {
  let ErrorComponent = errorComponents.get(type) ?? Error404

  return (
    <FullscreenLayout
      render={({ Content }) => (
        <Content>
          <ErrorComponent />
        </Content>
      )}
    />
  )
}

export default ErrorRoute
