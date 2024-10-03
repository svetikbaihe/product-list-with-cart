import React from 'react'
import cn from 'classnames'
import DessertCardList from './DessertCardList'
import DessertCardGrid from './DessertCardGrid'
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
  const { isList, handleOpenModal, handleSwitchGrid, handleSwitchList } =
    useContainer()

  const classNameSwitchToList = cn({
    [styles.cardContainerList]: isList,
  })

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
          <Button
            icon={<AppstoreOutlined />}
            onClick={handleSwitchGrid}
            className={cn(styles.buttonMenu, {
              [styles.buttonMenuFocused]: !isList,
            })}
          />

          <Button
            icon={<UnorderedListOutlined />}
            onClick={handleSwitchList}
            className={cn(styles.buttonMenu, {
              [styles.buttonMenuFocused]: isList,
            })}
          />

          <Button
            icon={<ShoppingCartOutlined />}
            className={styles.buttonMenu}
            onClick={handleOpenModal}
          />
        </div>
      </Flex>

      <div className={cn(styles.cardContainerGrid, classNameSwitchToList)}>
        {items.map(item =>
          isList ? (
            <DessertCardList item={item} key={item.id} />
          ) : (
            <DessertCardGrid item={item} key={item.id} />
          )
        )}
      </div>
    </Flex>
  )
}

export default DessertMenu
