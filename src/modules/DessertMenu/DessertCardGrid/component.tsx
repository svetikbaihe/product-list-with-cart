import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import useContainer from './hook'
import { Card, Typography } from 'antd'
import { DessertCardProps } from '../types'
import { RoutesKeys } from '@constants/routes'
import AddToCart from '@modules/AddToCart'
import styles from './styles.module.scss'

const { Title, Text } = Typography

const DessertCardGrid: React.FC<DessertCardProps> = ({ item }) => {
  const {
    productAmount,

    getPathData,
  } = useContainer(item)

  const classNameActiveCover = cn({
    [styles.cardCoverActive]: productAmount >= 1,
  })

  return (
    <Card
      cover={
        <Link
          to={getPathData({
            pageKey: RoutesKeys.DESSERT_DETAILS,
            params: {
              dessertId: item.id,
            },
          })}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
            <source media="(min-width: 640px)" srcSet={item.image.tablet} />
            <img alt={item.image.alt} src={item.image.mobile} />
          </picture>
        </Link>
      }
      className={styles.card}
      classNames={{
        body: styles.cardBody,
        cover: cn(styles.cardCover, classNameActiveCover),
      }}
    >
      <AddToCart item={item} />
      <Title level={3} className={styles.cardCategory}>
        {item.category}
      </Title>

      <Title level={4}>{item.name}</Title>

      <Text className={styles.cardPrice}>{'$' + item.price.toFixed(2)}</Text>
    </Card>
  )
}

export default DessertCardGrid
