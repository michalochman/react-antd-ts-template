import React from 'react'
import { Layout } from 'antd'

interface Props {
  children: React.ReactNode
}

function Body({ children }: Props) {
  return <Layout>{children}</Layout>
}

export default Body
