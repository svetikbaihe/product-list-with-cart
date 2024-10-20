import type React from 'react'
import DeliveryTypeWrapper from '@modules/DeliveryTypeWrapper/component'

const DeliverDirect: React.FC = () => {
  return (
    <DeliveryTypeWrapper
      infoDescription="Direct deliveries go straight to your location from the store. A
        delivery fee depends on the order. Delivery is free for orders over $25."
    />
  )
}

export default DeliverDirect
