import React from 'react'
import cn from 'classnames'
import useContainer from './hook'
import { TABLET_QUERY } from '@constants/app'
import { useMediaQuery } from 'react-responsive'
import { Card, Typography, Button } from 'antd'
import {
  ShoppingCartOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons'
import { DessertCardProps } from '../types'
import styles from './styles.module.scss'

const { Title, Text } = Typography

const DessertCardList: React.FC<DessertCardProps> = ({ item }) => {
  const isTablet = useMediaQuery({ query: TABLET_QUERY })

  const {
    productAmount,

    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
    truncateString,
  } = useContainer(item)

  const classNameActiveCover = cn({
    [styles.cardCoverActive]: productAmount >= 1,
  })

  return (
    <Card
      cover={
        <picture>
          <img alt={item.image.alt} src={item.image.thumbnail} />
        </picture>
      }
      className={styles.card}
      classNames={{
        body: styles.cardBody,
        cover: cn(styles.cardCover, classNameActiveCover),
      }}
    >
      <div className={styles.cardInfoWrapper}>
        <Title level={3} className={styles.cardCategory}>
          {item.category}
        </Title>

        <Title level={4} className={styles.cardTitle}>
          {isTablet ? item.name : truncateString(item.name, 10)}
        </Title>

        <Text className={styles.cardPrice}>{'$' + item.price.toFixed(2)}</Text>
      </div>

      {productAmount === 0 && (
        <Button
          icon={<ShoppingCartOutlined className={styles.iconCart} />}
          className={styles.buttonAddProducts}
          onClick={handleAddProductToCart}
        ></Button>
      )}

      {productAmount >= 1 && (
        <div className={styles.divAddRemoveProducts}>
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
    </Card>
  )
}

export default DessertCardList
