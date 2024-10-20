import React from 'react'
import cn from 'classnames'
import useContainer from './hook'
import { TABLET_QUERY } from '@constants/app'
import { useMediaQuery } from 'react-responsive'
import { Card, Typography } from 'antd'
import { DessertCardProps } from '../types'
import AddToCart from '@modules/AddToCart'
import { Link } from 'react-router-dom'
import { RoutesKeys } from '@constants/routes'
import styles from './styles.module.scss'

const { Title, Text } = Typography

const DessertCardList: React.FC<DessertCardProps> = ({ item }) => {
  const isTablet = useMediaQuery({ query: TABLET_QUERY })

  const {
    productAmount,

    truncateString,
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
            <img alt={item.image.alt} src={item.image.thumbnail} />
          </picture>
        </Link>
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

      <AddToCart item={item} />
    </Card>
  )
}

export default DessertCardList
