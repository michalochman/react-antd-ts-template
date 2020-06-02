import React from 'react'
import { Layout } from 'antd'

const contentStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 16,
}

interface Props {
  children: React.ReactNode
}

function Content({ children }: Props) {
  return <Layout.Content style={contentStyle}>{children}</Layout.Content>
}

export default Content
