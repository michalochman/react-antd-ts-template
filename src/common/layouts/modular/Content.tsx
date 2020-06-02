import React from 'react'
import { BackTop, Layout } from 'antd'

const backTopStyle: React.CSSProperties = {
  bottom: 16,
  right: 24,
}

interface Props {
  children: React.ReactNode
}

function Content({ children }: Props) {
  return (
    <Layout.Content>
      {children}
      <BackTop style={backTopStyle} />
    </Layout.Content>
  )
}

export default Content
