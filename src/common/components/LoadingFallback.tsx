import React from 'react'
import { Spin } from 'antd'

import FullscreenLayout from 'common/layouts/fullscreen'

function LoadingFallback() {
  return (
    <FullscreenLayout
      render={({ Content }) => (
        <Content>
          <Spin />
        </Content>
      )}
    />
  )
}

export default LoadingFallback
