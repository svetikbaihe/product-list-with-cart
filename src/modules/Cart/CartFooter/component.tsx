import React from 'react'
import { Typography, Button } from 'antd'
import useContainer from '../hook'
import styles from '../styles.module.scss'

const { Text } = Typography

const CartFooter: React.FC = () => {
  const { cartTotalPrice, handleOpenModal } = useContainer()

  return (
    <div>
      <div className={styles.orderTotalSumContainer}>
        <Text className={styles.orderTotalTitle}>Order Total</Text>

        <Text className={styles.orderTotalSum}>{'$' + cartTotalPrice}</Text>
      </div>

      <div className={styles.carbonNeutralContainer}>
        <img
          src="/icons/icon-carbon-neutral.svg"
          className={styles.carbonImg}
        />

        <p>
          This is a{' '}
          <span className={styles.carbonAccentText}>carbon-neutral</span>{' '}
          delivery
        </p>
      </div>

      <Button
        shape="round"
        className={styles.submitBtn}
        type="primary"
        onClick={handleOpenModal}
      >
        Confirm Order
      </Button>
    </div>
  )
}

export default CartFooter
