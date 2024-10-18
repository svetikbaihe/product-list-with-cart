import React from 'react'
import { ROUTES, RoutesKeys } from '@constants/routes'
import styles from './styles.module.scss'

const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.parallax1}></div>
      <p className={styles.homeText}>-20% Special offer for Haloween!</p>
      <div className={styles.parallax2}></div>
    </>
  )
}

HomePage.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME

export default HomePage
