import React from 'react'
import DessertMenu from '@modules/DessertMenu'
import { ROUTES, RoutesKeys } from '@constants/routes'

const DessertsPage: React.FC = () => {
  return <DessertMenu />
}

DessertsPage.displayName = ROUTES[RoutesKeys.DESSERTS].DISPLAY_NAME

export default DessertsPage
