import type React from 'react'
import DeliveryDirect from '@modules/DeliveryDirect/component'
import { ROUTES, RoutesKeys } from '@constants/routes'

const DeliveryDirectPage: React.FC = () => {
  return <DeliveryDirect />
}

DeliveryDirectPage.displayName = ROUTES[RoutesKeys.DELIVERY_DIRECT].DISPLAY_NAME

export default DeliveryDirectPage
