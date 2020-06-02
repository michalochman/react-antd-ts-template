import React from 'react'
import * as Sentry from '@sentry/browser'

import ErrorRoute from 'common/routes/error'

interface Props {}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error | null, errorInfo: object) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorRoute type={500} />
    }

    return this.props.children
  }
}
