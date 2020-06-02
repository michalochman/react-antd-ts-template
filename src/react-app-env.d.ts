/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_NAME: string
    REACT_APP_RELEASE_ENVIRONMENT: string
    REACT_APP_SENTRY_DSN: string
    REACT_APP_VERSION: string
  }
}
