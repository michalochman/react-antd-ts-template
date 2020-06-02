import React, { useCallback, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Card, Form, PageHeader, notification } from 'antd'

import { FullscreenLayoutRenderProps } from 'common/layouts/fullscreen'
import history from 'common/utils/history'
import UserContext from 'user/context/UserContext'

const cardStyle = { maxWidth: 480, width: '100%' }

function UserLoginRoute({ Content }: FullscreenLayoutRenderProps) {
  const { setUser } = useContext(UserContext)
  const location = useLocation<{ from?: string }>()

  const onFinish = useCallback(async () => {
    try {
      // Set authenticated state
      setUser(user => ({ ...user, authenticated: true }))

      // Redirect back to previous location or to home on success
      const redirectUrl = location.state.from ?? '/'
      history.replace(redirectUrl)
    } catch {
      notification.error({
        description: 'Unable to log in with provided credentials.',
        message: 'Authentication error',
      })
    }
  }, [location, setUser])

  return (
    <Content>
      <PageHeader ghost title="Login" />
      <Card style={cardStyle}>
        <Form onFinish={onFinish} size="large">
          <Form.Item style={{ marginBottom: 0 }}>
            <Button htmlType="submit" type="primary">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  )
}

export default UserLoginRoute
