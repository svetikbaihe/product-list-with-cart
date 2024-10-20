import React from 'react'
import { ROUTES, RoutesKeys } from '@constants/routes'
import DessertDetails from '@modules/DessertDetails'
import styles from './styles.module.scss'

const DessertDetailsPage: React.FC = () => {
  return <DessertDetails />
}

DessertDetailsPage.displayName = ROUTES[RoutesKeys.DESSERT_DETAILS].DISPLAY_NAME

export default DessertDetailsPage
