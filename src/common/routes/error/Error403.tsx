import React from 'react'
import { Result } from 'antd'

import ErrorNavigation from './ErrorNavigation'

function Error403() {
  return (
    <Result
      status="403"
      title="Forbidden"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<ErrorNavigation />}
    />
  )
}

export default Error403
