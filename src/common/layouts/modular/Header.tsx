import React from 'react'
import { Layout } from 'antd'

const headerStyle: React.CSSProperties = {
  position: 'relative',
}

interface Props {
  children: React.ReactNode
}

function Header({ children }: Props) {
  return <Layout.Header style={headerStyle}>{children}</Layout.Header>
}

export default Header
