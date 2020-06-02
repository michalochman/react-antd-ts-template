import React from 'react'
import { Result } from 'antd'

import ErrorNavigation from './ErrorNavigation'

function Error404() {
  return (
    <Result
      status="404"
      title="Not Found"
      subTitle="Sorry, the page you visited does not exist."
      extra={<ErrorNavigation />}
    />
  )
}

export default Error404
