import type { RouteObject } from 'react-router-dom'
import Index from '~/pages/index'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
]
