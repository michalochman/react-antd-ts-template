import React from 'react'
import { Layout } from 'antd'

import Content from './Content'

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  overflow: 'auto',
}

export interface FullscreenLayoutRenderProps {
  Content: ({ children }: { children: React.ReactNode }) => React.ReactElement
}

interface Props {
  render: (props: FullscreenLayoutRenderProps) => React.ReactNode
}

function FullscreenLayout({ render }: Props) {
  return (
    <Layout style={layoutStyle}>
      {render({
        Content,
      })}
    </Layout>
  )
}

export default FullscreenLayout
