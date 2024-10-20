import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES, RoutesKeys } from '@constants/routes'
import useContainer from './hook'
import styles from './styles.module.scss'

const DeliveryPage: React.FC = () => {
  const { getPathData } = useContainer()

  return (
    <div className={styles.deliveryWrapper}>
      <div className={styles.deliveryText}>
        <p>
          You can order our desserts by calling{' '}
          <span className={styles.phoneText}>930-444-877.</span>
        </p>
        <p>We have two options of delivery: free and direct.</p>
        <p>
          For more information about free delivery, please visit{' '}
          {
            <Link
              to={getPathData({ pageKey: RoutesKeys.DELIVERY_FREE })}
              className={styles.deliveryLinks}
            >
              {' '}
              this page.
            </Link>
          }
        </p>
        <p>
          Please click{' '}
          {
            <Link
              to={getPathData({ pageKey: RoutesKeys.DELIVERY_DIRECT })}
              className={styles.deliveryLinks}
            >
              here
            </Link>
          }{' '}
          to learn more about direct delivery.
        </p>
        <p>For large orders, please contact us at least 48 hours in advance.</p>
      </div>

      <div className={styles.deliveryImg} />
    </div>
  )
}

DeliveryPage.displayName = ROUTES[RoutesKeys.DELIVERY].DISPLAY_NAME

export default DeliveryPage
