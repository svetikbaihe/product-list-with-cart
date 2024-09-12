import React from 'react'
import DessertCard from './DessertCard'
import { Flex, Typography, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { items } from '@mock/items'
import styles from './styles.module.scss'

const { Title } = Typography

const DessertMenu: React.FC = () => {
  return (
    <Flex vertical align="center" justify="flex-start" className="m-6">
      <Flex justify="space-between" className="w-full">
        <Title className={styles.dessertMenuTitle}>Desserts</Title>
        <Button icon={<ShoppingCartOutlined />} className={styles.buttonCart} />
      </Flex>
      {items.map(item => (
        <DessertCard item={item} key={item.id} />
      ))}
    </Flex>
  )
}

export default DessertMenu
