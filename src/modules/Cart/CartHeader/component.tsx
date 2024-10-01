import React from 'react'
import { Typography } from 'antd'
import useContainer from '../hook'
import styles from '../styles.module.scss'

const { Title } = Typography

const CartHeader: React.FC = () => {
  const { cartProductAmount } = useContainer()

  return (
    <Title level={2} className={styles.title}>
      {'Your Cart ' + '(' + cartProductAmount + ')'}
    </Title>
  )
}

export default CartHeader
