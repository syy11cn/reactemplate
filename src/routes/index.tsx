import type { RouteObject } from 'react-router-dom'
import NotFound from '~/pages/404'
import Index from '~/pages/index'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
