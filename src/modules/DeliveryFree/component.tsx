import type React from 'react'
import DeliveryTypeWrapper from '@modules/DeliveryTypeWrapper/component'

const DeliveryFree: React.FC = () => {
  return (
    <DeliveryTypeWrapper
      infoDescription="If you would like to have a free delivery, you can 'cooperate' with
        other customers. Our courier will deliver your order along with other
        orders near you. It takes more time, however, you do not need to pay!"
    />
  )
}

export default DeliveryFree
