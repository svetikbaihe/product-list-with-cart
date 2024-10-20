import React from 'react'
import { ROUTES, RoutesKeys } from '@constants/routes'
import DessertDetails from '@modules/DessertDetails'

const DessertDetailsPage: React.FC = () => {
  return <DessertDetails />
}

DessertDetailsPage.displayName = ROUTES[RoutesKeys.DESSERT_DETAILS].DISPLAY_NAME

export default DessertDetailsPage
