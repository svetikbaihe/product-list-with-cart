import React from 'react'
import { Button } from 'antd'
import useContainer from '../hook'
import styles from '../styles.module.scss'

const OrderFooter: React.FC = () => {
  const { resetCart } = useContainer()
  return (
    <Button
      type="primary"
      shape="round"
      className={styles.startNewOrderBtn}
      onClick={resetCart}
    >
      Start New Order
    </Button>
  )
}

export default OrderFooter
