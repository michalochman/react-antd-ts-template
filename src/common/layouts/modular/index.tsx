import React from 'react'
import { Layout } from 'antd'

import Body from './Body'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
}

export interface ModularLayoutRenderProps {
  Body: ({ children }: { children: React.ReactNode }) => React.ReactElement
  Content: ({ children }: { children: React.ReactNode }) => React.ReactElement
  Header: ({ children }: { children: React.ReactNode }) => React.ReactElement
  Sider: ({ children }: { children: React.ReactNode }) => React.ReactElement
}

interface Props {
  render: (props: ModularLayoutRenderProps) => React.ReactNode
}

function ModularLayout({ render }: Props) {
  return (
    <Layout style={layoutStyle}>
      {render({
        Body,
        Content,
        Header,
        Sider,
      })}
    </Layout>
  )
}

export default ModularLayout
