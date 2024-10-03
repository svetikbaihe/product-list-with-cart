import React from 'react'
import styles from '../styles.module.scss'

const EmptyState: React.FC = () => {
  return (
    <div className={styles.emptyCart}>
      <img src="/icons/illustration-empty-cart.svg" />

      <p className={styles.emptyCartText}>Your added items will appear here</p>
    </div>
  )
}

export default EmptyState
