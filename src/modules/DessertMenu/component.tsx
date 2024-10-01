import React from 'react'
import DessertCard from './DessertCard'
import { Flex, Typography, Button } from 'antd'
import {
  ShoppingCartOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import useContainer from './hook'
import { items } from '@mock/items'
import styles from './styles.module.scss'

const { Title } = Typography

const DessertMenu: React.FC = () => {
  const { handleOpenModal } = useContainer()

  return (
    <Flex
      vertical
      align="center"
      justify="flex-start"
      className={styles.dessertsContainer}
    >
      <Flex
        justify="space-between"
        align="center"
        className={styles.dessertMenuTitleContainer}
      >
        <Title className={styles.dessertMenuTitle}>Desserts</Title>
        <div className={styles.buttonWrapper}>
          <Button icon={<AppstoreOutlined />} />
          <Button icon={<UnorderedListOutlined />} />
          <Button
            icon={<ShoppingCartOutlined />}
            className={styles.buttonCart}
            onClick={handleOpenModal}
          />
        </div>
      </Flex>
      <div className={styles.cardContainer}>
        {items.map(item => (
          <DessertCard item={item} key={item.id} />
        ))}
      </div>
    </Flex>
  )
}

export default DessertMenu
