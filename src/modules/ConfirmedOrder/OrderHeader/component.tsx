import React from 'react'
import { Typography } from 'antd'
import styles from '../styles.module.scss'

const { Title, Text } = Typography

const OrderHeader: React.FC = () => {
  return (
    <>
      <img src="/icons/icon-order-confirmed.svg" className={styles.orderIcon} />

      <Title level={1} className={styles.titleOrder}>
        Order Confirmed
      </Title>

      <Text className={styles.textOrder}>We hope you enjoy your food!</Text>
    </>
  )
}

export default OrderHeader
