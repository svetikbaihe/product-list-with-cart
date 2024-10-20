import React from 'react'
import useContainer from './hook'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { RoutesKeys } from '@constants/routes'
import styles from './styles.module.scss'

const { Title } = Typography

const Header: React.FC = () => {
  const { getPathData } = useContainer()
  return (
    <header className={styles.dashboardHeader}>
      <Title className={styles.dashboardHeaderTitle}>Honey Kitchen</Title>
      <nav className={styles.dashboardHeaderNav}>
        <Link
          to={getPathData({
            pageKey: RoutesKeys.HOME,
          })}
          className={styles.button}
        >
          Home
        </Link>
        <Link
          to={getPathData({
            pageKey: RoutesKeys.DESSERTS,
          })}
          className={styles.button}
        >
          Desserts
        </Link>
        <Link
          to={getPathData({
            pageKey: RoutesKeys.DELIVERY,
          })}
          className={styles.button}
        >
          Delivery
        </Link>
      </nav>
    </header>
  )
}

export default Header
