import React from 'react'
import { v4 as uuid } from 'uuid'
import { Card, Space, Typography } from 'antd'
import useContainer from './hook'
import AddToCart from '@modules/AddToCart'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { RoutesKeys } from '@constants/routes'
import styles from './styles.module.scss'

const { Meta } = Card

const { Title, Text } = Typography

const DessertDetails: React.FC = () => {
  const { dessert, getPathData } = useContainer()

  if (!dessert) {
    return null
  }

  return (
    <>
      <Link
        to={getPathData({
          pageKey: RoutesKeys.DESSERTS,
        })}
        className={styles.backBtn}
      >
        <HiOutlineArrowNarrowLeft />
        Back To Desserts
      </Link>
      <Card
        cover={
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={dessert?.image.desktop}
            />
            <source media="(min-width: 550px)" srcSet={dessert?.image.tablet} />
            <img
              alt={dessert?.image.alt}
              src={dessert?.image.mobile}
              className={styles.dessertDetailsImg}
            />
          </picture>
        }
        className={styles.dessertDetailsCard}
        classNames={{
          body: styles.cardBody,
        }}
      >
        <Meta
          title={
            <Title level={1} className={styles.dessertDetailsTitle}>
              {dessert?.name}
            </Title>
          }
          description={
            <Text className={styles.dessertDetailsPrice}>
              {'$' + dessert?.price.toFixed(2)}
            </Text>
          }
          className={styles.namePriceContainer}
        />
        <AddToCart item={dessert} />

        <Space direction="horizontal" className={styles.ingredients}>
          {dessert?.ingredients?.map(ingredient => (
            <span key={uuid()} className={styles.ingredient}>
              {ingredient}
            </span>
          ))}
        </Space>
      </Card>
    </>
  )
}

export default DessertDetails
