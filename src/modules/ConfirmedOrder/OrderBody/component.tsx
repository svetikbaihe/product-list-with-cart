import React from 'react'
import useContainer from '../hook'
import { Typography } from 'antd'
import { MOBILE_M_QUERY } from '@constants/app'
import { useMediaQuery } from 'react-responsive'
import styles from '../styles.module.scss'

const { Text } = Typography

const OrderBody: React.FC = () => {
  const { cart, orderTotalPrice, truncateString } = useContainer()

  const isMobileM = useMediaQuery({ query: MOBILE_M_QUERY })

  return (
    <div className={styles.orderModal}>
      <ul className={styles.productList}>
        {cart.map(product => (
          <li key={product.id} className={styles.liProduct}>
            {isMobileM && (
              <img
                src={product.image.thumbnail}
                className={styles.orderProductImg}
              />
            )}

            <div className={styles.nameAmountPriceContainer}>
              <Text className={styles.productName}>
                {isMobileM
                  ? truncateString(product.name, 10)
                  : truncateString(product.name, 20)}
              </Text>

              <div>
                <Text className={styles.productQuantity}>
                  {product.amount + 'x'}
                </Text>

                <Text className={styles.productPrice}>
                  {'@ ' + '$' + product.price.toFixed(2)}
                </Text>
              </div>
            </div>

            <Text className={styles.individualTotalPrice}>
              {'$' + (product.amount * product.price).toFixed(2)}
            </Text>
          </li>
        ))}
      </ul>

      <hr />

      <div className={styles.orderTotalContainer}>
        <Text className={styles.orderTotalTitle}>Order Total</Text>

        <Text className={styles.orderTotalSum}>{'$' + orderTotalPrice}</Text>
      </div>
    </div>
  )
}

export default OrderBody
