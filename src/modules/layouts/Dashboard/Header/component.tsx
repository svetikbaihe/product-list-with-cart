import React from 'react'
import { Button, Typography } from 'antd'
import styles from './styles.module.scss'

const { Title } = Typography

const Header: React.FC = () => {
  return (
    <header className={styles.dashboardHeader}>
      <Title className={styles.dashboardHeaderTitle}>Honey Kitchen</Title>
      <nav className={styles.dashboardHeaderNav}>
        <Button href="/" type="text" className={styles.button}>
          Home
        </Button>

        <Button href="/desserts" type="text" className={styles.button}>
          Desserts
        </Button>

        <Button href="/delivery" type="text" className={styles.button}>
          Delivery
        </Button>
      </nav>
    </header>
  )
}

export default Header
