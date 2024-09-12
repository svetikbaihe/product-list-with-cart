import React, { useState } from 'react'
import { Card, Typography, Button } from 'antd'
import {
  ShoppingCartOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons'
import { DessertCardProps } from '../types'
import cn from 'classnames'
import styles from './styles.module.scss'

const { Title, Text } = Typography

const DessertCard: React.FC<DessertCardProps> = ({ item }) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const classNameActiveCover = cn({
    [styles.cardCoverActive]: count >= 1,
  })

  return (
    <Card
      cover={<img alt={item.image.alt} src={item.image.mobile} />}
      className={styles.card}
      classNames={{
        body: styles.cardBody,
        cover: cn(styles.cardCover, classNameActiveCover),
      }}
    >
      {count === 0 && (
        <Button
          icon={<ShoppingCartOutlined className={styles.iconCart} />}
          className={cn(styles.absolutePosition, styles.buttonAddProducts)}
          onClick={increment}
        >
          Add to Cart
        </Button>
      )}

      {count >= 1 && (
        <div
          className={cn(styles.divAddRemoveProducts, styles.absolutePosition)}
        >
          <Button
            icon={<MinusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={decrement}
            className={styles.buttonMinusAndPlus}
          />

          <Text className={styles.counter}>{count}</Text>

          <Button
            icon={<PlusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={increment}
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
