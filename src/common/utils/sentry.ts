import * as Sentry from '@sentry/browser'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_RELEASE_ENVIRONMENT ?? 'development',
    release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
  })
}
