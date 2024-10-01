import React from 'react'
import { Card, Typography, Button } from 'antd'
import {
  ShoppingCartOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons'
import { DessertCardProps } from '../types'
import cn from 'classnames'
import styles from './styles.module.scss'
import useContainer from '../hook'

const { Title, Text } = Typography

const DessertCard: React.FC<DessertCardProps> = ({ item }) => {
  const {
    cart,
    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
    handleDeleteZeroAmount,
  } = useContainer()
  const foundProduct = cart.find(product => product.id === item.id)

  const productAmount = foundProduct ? foundProduct.amount : 0

  const handleAddToCart = () => {
    handleAddProductToCart(item)
  }

  const handlePlus = () => {
    handleIncrement({ id: item.id })
  }

  const handleMinus = () => {
    handleDecrement({ id: item.id })
    handleDeleteZeroAmount()
  }

  const classNameActiveCover = cn({
    [styles.cardCoverActive]: productAmount >= 1,
  })

  return (
    <Card
      cover={<picture>
        <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
        <source media="(min-width: 640px)" srcSet={item.image.tablet} />
        <img
          alt={item.image.alt}
          src={item.image.mobile}
        />
      </picture>}
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
          onClick={handleAddToCart}
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
            onClick={handleMinus}
            className={styles.buttonMinusAndPlus}
          />

          <Text className={styles.counter}>{productAmount}</Text>

          <Button
            icon={<PlusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={handlePlus}
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

export default DessertCard
