import React from 'react'
import { Modal } from 'antd'
import EmptyState from './EmptyState'
import CartBody from './CartBody'
import CartFooter from './CartFooter'
import CartHeader from './CartHeader'
import useContainer from './hook'
import styles from './styles.module.scss'

const Cart: React.FC = () => {
  const { cartProductAmount, handleCloseModal } = useContainer()

  return (
    <Modal
      title={<CartHeader />}
      open
      onCancel={handleCloseModal}
      cancelButtonProps={{
        className: styles.cancelBtn,
      }}
      okButtonProps={{
        className: styles.okBtnCart,
      }}
      className={styles.cart}
    >
      {cartProductAmount === 0 && <EmptyState />}

      {cartProductAmount > 0 && (
        <>
          <CartBody />

          <CartFooter />
        </>
      )}
    </Modal>
  )
}

export default Cart
