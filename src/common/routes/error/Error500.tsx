import React from 'react'
import { Result } from 'antd'

import ErrorNavigation from './ErrorNavigation'

function Error500() {
  return <Result status="500" title="Whoops!" subTitle="Sorry, something went wrong." extra={<ErrorNavigation />} />
}

export default Error500
