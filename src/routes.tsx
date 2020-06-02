import { flattenRoutes, isRenderableRoute, Route } from 'common/utils/routes'
import { AUTHENTICATION } from 'user/models/Auth'

export const routes: Record<string, Route> = {
  '/': {
    authentication: AUTHENTICATION.REQUIRED,
    component: 'home/routes/home',
    exact: true,
    layout: 'Modular',
    routes: {
      '/user': {
        authentication: AUTHENTICATION.REQUIRED,
        layout: 'Modular',
        routes: {
          '/login': {
            authentication: AUTHENTICATION.FORBIDDEN,
            component: 'user/routes/login',
            exact: true,
            layout: 'Fullscreen',
          },
          '/logout': {
            component: 'user/routes/logout',
            exact: true,
            layout: 'Fullscreen',
          },
          '/settings': {
            component: 'user/routes/settings',
            exact: true,
            title: 'Settings',
          },
        },
        title: 'User',
      },
    },
    title: 'Home',
  },
  '*': {
    component: 'common/routes/error',
    layout: 'Fullscreen',
  },
}

export default flattenRoutes(routes).filter(isRenderableRoute)
