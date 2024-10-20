import { createBrowserRouter } from 'react-router-dom'
import { LAYOUT, LayoutKeys } from '@constants/layout'
import { ROUTES, RoutesKeys } from '@constants/routes'

const Router = createBrowserRouter([
  {
    id: LAYOUT[LayoutKeys.BASE_LAYOUT].KEY,
    path: LAYOUT[LayoutKeys.BASE_LAYOUT].PATH,
    lazy: () => import('@modules/layouts/Base/lazy'),
    errorElement: <div>404</div>,
    children: [
      {
        id: LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].KEY,
        path: LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].PATH,
        lazy: () => import('@modules/layouts/Dashboard/lazy'),
        errorElement: <div>404</div>,
        children: [
          {
            id: ROUTES[RoutesKeys.DESSERTS].KEY,
            path: ROUTES[RoutesKeys.DESSERTS].PATH,
            lazy: () => import('@pages/Desserts/lazy'),
          },
          {
            id: ROUTES[RoutesKeys.HOME].KEY,
            path: ROUTES[RoutesKeys.HOME].PATH,
            lazy: () => import('@pages/Home/lazy'),
          },
          {
            id: ROUTES[RoutesKeys.DELIVERY].KEY,
            path: ROUTES[RoutesKeys.DELIVERY].PATH,
            lazy: () => import('@pages/Delivery/lazy'),
          },
          {
            id: ROUTES[RoutesKeys.DESSERT_DETAILS].KEY,
            path: ROUTES[RoutesKeys.DESSERT_DETAILS].PATH,
            lazy: () => import('@pages/DessertDetails/lazy')
          }
        ],
      },
    ],
  },
])

export default Router
