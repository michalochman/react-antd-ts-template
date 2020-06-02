import React, { Suspense } from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { ReactQueryConfigProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ConfigProvider, PageHeader } from 'antd'

import ErrorBoundary from 'common/components/ErrorBoundary'
import LoadingFallback from 'common/components/LoadingFallback'
import Navigation from 'common/components/Navigation'
import FullscreenLayout from 'common/layouts/fullscreen'
import ModularLayout from 'common/layouts/modular'
import history from 'common/utils/history'
import AbilityContext from 'user/context/AbilityContext'
import { useDefineAbility } from 'user/hooks/useDefineAbility'
import Guardian from 'user/components/Guardian'

import routes from './routes'

const queryConfig = {
  refetchOnWindowFocus: false,
}

function getRouteIndex(component: string) {
  // webpackMode to consider:
  // lazy - best for code splitting, but in naive implementation it will show fallback UI until route chunk is loaded
  // lazy-once - better for code splitting, puts all routes in  a single chunk
  // eager - uses existing chunk, no code splitting
  return React.lazy(() =>
    import(
      // only index.tsx files inside `routes` directories (and their subdirectories) are considered as route indexes
      /* webpackInclude: /routes\/.*?index\.tsx/ */
      /* webpackMode: "lazy-once" */
      `./${component}/index.tsx`
    )
  )
}

function App() {
  const ability = useDefineAbility()

  // show loading fallback until we know user authentication state
  if (!ability.can('use', 'App')) {
    return <LoadingFallback />
  }

  const routesWithModularLayout = routes.filter(route => route.layout === 'Modular')
  const routesWithFullscreenLayout = routes.filter(route => route.layout === 'Fullscreen')

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <AbilityContext.Provider value={ability}>
        <Suspense fallback={<LoadingFallback />}>
          <ErrorBoundary>
            <ConfigProvider pageHeader={{ ghost: false }}>
              <Router history={history}>
                {/* This switch handles different layouts */}
                <Switch>
                  {/* Routes using modular layout */}
                  <Route exact path={routesWithModularLayout.map(route => route.path)}>
                    <ModularLayout
                      render={({ Body, Content, Header, Sider }) => {
                        return (
                          <Switch>
                            {routesWithModularLayout.map(route => {
                              const RouteIndex = getRouteIndex(route.component)

                              // Setting static key on purpose here, so the route is not unmounted when navigating.
                              // Switch ensures only there will evet by only one Route component rendered at any time.
                              const routeKey = 'current'

                              return (
                                <Route exact={route.exact} key={routeKey} path={route.path}>
                                  <Guardian
                                    authentication={route.authentication}
                                    authenticationRedirection={route.authenticationRedirection}
                                    permissions={route.permissions}
                                  >
                                    <>
                                      <Sider>
                                        <Navigation />
                                      </Sider>
                                      <Body>
                                        <Header>
                                          <PageHeader
                                            title={route.title}
                                            breadcrumb={{
                                              itemRender: item =>
                                                item.path ? (
                                                  <Link to={item.path}>{item.breadcrumbName}</Link>
                                                ) : (
                                                  item.breadcrumbName
                                                ),
                                              routes: route.breadcrumbs,
                                            }}
                                          />
                                        </Header>
                                        <Content>
                                          <RouteIndex />
                                        </Content>
                                      </Body>
                                    </>
                                  </Guardian>
                                </Route>
                              )
                            })}
                          </Switch>
                        )
                      }}
                    />
                  </Route>
                  {/* Routes using fullscreen layout */}
                  <Route exact path={routesWithFullscreenLayout.map(route => route.path)}>
                    <FullscreenLayout
                      render={({ Content }) => (
                        <Switch>
                          {routesWithFullscreenLayout.map(route => {
                            const RouteIndex = getRouteIndex(route.component)

                            // Setting static key on purpose here, so the route is not unmounted when navigating.
                            // Switch ensures only there will evet by only one Route component rendered at any time.
                            const routeKey = 'current'

                            return (
                              <Route exact={route.exact} key={routeKey} path={route.path}>
                                <Guardian
                                  authentication={route.authentication}
                                  authenticationRedirection={route.authenticationRedirection}
                                  permissions={route.permissions}
                                >
                                  <RouteIndex Content={Content} />
                                </Guardian>
                              </Route>
                            )
                          })}
                        </Switch>
                      )}
                    />
                  </Route>
                </Switch>
              </Router>
              <ReactQueryDevtools initialIsOpen={false} />
            </ConfigProvider>
          </ErrorBoundary>
        </Suspense>
      </AbilityContext.Provider>
    </ReactQueryConfigProvider>
  )
}

export default App
