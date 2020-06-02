import React from 'react'
import { Layout } from 'antd'

interface Props {
  children: React.ReactNode
}

function Sider({ children }: Props) {
  return (
    <Layout.Sider collapsible theme="light">
      {children}
    </Layout.Sider>
  )
}

export default Sider
