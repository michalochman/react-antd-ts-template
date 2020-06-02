import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Divider, Menu } from 'antd'
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'

import logo from './logo.svg'

// Captures all props provided by Menu so they do not raise React DOM attribute validation errors
function MenuDivider() {
  return <Divider />
}

function Navigation() {
  const { pathname } = useLocation()

  const defaultSelectedKeys = [pathname]
  const defaultOpenKeys = pathname
    .split('/')
    .reduce((acc, curr) => acc.concat(`${acc[acc.length - 1]?.replace(/\/$/, '') ?? ''}/${curr}`), [] as string[])

  return (
    <Menu mode="inline" defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
        <img alt="logo" src={logo} width={32} />
      </div>
      <Menu.Item icon={<HomeOutlined />} key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <MenuDivider />
      <Menu.SubMenu key="/user" icon={<UserOutlined />} title="User">
        <Menu.Item key="/user/settings">
          <Link to="/user/settings">Settings</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item icon={<LogoutOutlined />} key="/user/logout">
        <Link to="/user/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navigation
