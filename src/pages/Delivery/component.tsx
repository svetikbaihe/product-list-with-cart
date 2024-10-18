import React from 'react'
import { ROUTES, RoutesKeys } from '@constants/routes'
import styles from './styles.module.scss'

const DeliveryPage: React.FC = () => {
  return (
    <div className={styles.deliveryWrapper}>
      <div className={styles.deliveryText}>
        <p>
          You can order our desserts by calling{' '}
          <span className={styles.phoneText}>090-444-87-98.</span>
        </p>
        <p>Delivery is free for orders over $25.</p>
        <p>For large orders, please contact us at least 48 hours in advance.</p>
      </div>

      <div className={styles.deliveryImg} />
    </div>
  )
}

DeliveryPage.displayName = ROUTES[RoutesKeys.DELIVERY].DISPLAY_NAME

export default DeliveryPage
