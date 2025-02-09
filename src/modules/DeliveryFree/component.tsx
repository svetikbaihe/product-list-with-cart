import type React from 'react'
import DeliveryTypeWrapper from '@modules/DeliveryTypeWrapper/component'

const DeliveryFree: React.FC = () => {
  return (
    <DeliveryTypeWrapper infoDescription="If you would like free delivery, you can team up with other customers. Our courier will deliver your order along with others nearby. However, it may take more time—but you won’t have to pay!" />
  )
}

export default DeliveryFree
