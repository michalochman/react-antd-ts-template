import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import 'common/utils/sentry'
import UserContext, { useUserContext } from 'user/context/UserContext'

import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

function WrappedApp() {
  const userContext = useUserContext()

  return (
    <StrictMode>
      <UserContext.Provider value={userContext}>
        <App />
      </UserContext.Provider>
    </StrictMode>
  )
}

ReactDOM.render(<WrappedApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
