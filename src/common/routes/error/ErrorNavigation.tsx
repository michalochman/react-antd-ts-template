import React from 'react'
import { Button } from 'antd'
import { ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons'

import history from 'common/utils/history'

function ErrorNavigation() {
  return (
    <>
      <Button type="primary" onClick={() => window.history.back()} icon={<ArrowLeftOutlined />}>
        Go Back
      </Button>
      <Button type="primary" onClick={() => history.push('/')} icon={<HomeOutlined />}>
        Home
      </Button>
    </>
  )
}

export default ErrorNavigation
