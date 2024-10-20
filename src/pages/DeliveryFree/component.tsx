import type React from 'react'
import DeliveryFree from '@modules/DeliveryFree/component'
import { ROUTES, RoutesKeys } from '@constants/routes'

const DeliveryFreePage: React.FC = () => {
  return <DeliveryFree />
}

DeliveryFreePage.displayName = ROUTES[RoutesKeys.DELIVERY_FREE].DISPLAY_NAME

export default DeliveryFreePage
