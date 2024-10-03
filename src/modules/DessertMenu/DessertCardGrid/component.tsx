import React from 'react'
import cn from 'classnames'
import useContainer from './hook'
import { Card, Typography, Button } from 'antd'
import {
  ShoppingCartOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons'
import { DessertCardProps } from '../types'
import styles from './styles.module.scss'

const { Title, Text } = Typography

const DessertCardGrid: React.FC<DessertCardProps> = ({ item }) => {
  const {
    productAmount,

    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
  } = useContainer(item)

  const classNameActiveCover = cn({
    [styles.cardCoverActive]: productAmount >= 1,
  })

  return (
    <Card
      cover={
        <picture>
          <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
          <source media="(min-width: 640px)" srcSet={item.image.tablet} />
          <img alt={item.image.alt} src={item.image.mobile} />
        </picture>
      }
      className={styles.card}
      classNames={{
        body: styles.cardBody,
        cover: cn(styles.cardCover, classNameActiveCover),
      }}
    >
      {productAmount === 0 && (
        <Button
          icon={<ShoppingCartOutlined className={styles.iconCart} />}
          className={cn(styles.absolutePosition, styles.buttonAddProducts)}
          onClick={handleAddProductToCart}
        >
          Add to Cart
        </Button>
      )}

      {productAmount >= 1 && (
        <div
          className={cn(styles.divAddRemoveProducts, styles.absolutePosition)}
        >
          <Button
            icon={<MinusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={handleDecrement}
            className={styles.buttonMinusAndPlus}
          />

          <Text className={styles.counter}>{productAmount}</Text>

          <Button
            icon={<PlusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={handleIncrement}
            className={styles.buttonMinusAndPlus}
          />
        </div>
      )}
      <Title level={3} className={styles.cardCategory}>
        {item.category}
      </Title>

      <Title level={4}>{item.name}</Title>

      <Text className={styles.cardPrice}>{'$' + item.price.toFixed(2)}</Text>
    </Card>
  )
}

export default DessertCardGrid
