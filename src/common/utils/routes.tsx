import { AUTHENTICATION } from 'user/models/Auth'
import { Permissions } from 'user/models/Permission'

export type Route = {
  authentication?: AUTHENTICATION
  authenticationRedirection?: string
  component?: string
  exact?: boolean
  layout?: 'Fullscreen' | 'Modular'
  permissions?: Permissions
  routes?: Record<string, Route>
  title?: string
}

export type FlatRoute = Omit<Route, 'routes'> & {
  breadcrumbs: { path: string; breadcrumbName: string }[]
  path: string
}

export type RenderableFlatRoute = Omit<FlatRoute, 'component'> & Required<Pick<FlatRoute, 'component'>>

// Routes without component defined are not renderable and are used for organization
export function isRenderableRoute(route: Route): route is RenderableFlatRoute {
  return route.component != null
}

export function flattenRoutes(routes?: Record<string, Route>, parent?: FlatRoute): FlatRoute[] {
  const emptyList: FlatRoute[] = []

  if (!routes) {
    return emptyList
  }

  return Object.keys(routes)
    .reduce((routeList, path) => {
      const route = routes[path]
      const children = route.routes
      const fullPath = `${parent?.path?.replace(/\/$/, '') ?? ''}${path}`
      const breadcrumbs = route.title ? [{ path: route.component ? fullPath : '', breadcrumbName: route.title }] : []
      const flatRoute = {
        authentication: parent?.authentication,
        layout: parent?.layout,
        permissions: parent?.permissions,
        ...route,
        breadcrumbs: breadcrumbs,
        path: fullPath,
      }

      delete route.routes

      if (flatRoute.component) {
        routeList.push(flatRoute)
      }

      if (children) {
        flattenRoutes(children, flatRoute).forEach(child => {
          routeList.push({
            ...child,
            breadcrumbs: breadcrumbs.concat(child.breadcrumbs),
          })
        })
      }

      return routeList
    }, emptyList)
    .flat()
}
