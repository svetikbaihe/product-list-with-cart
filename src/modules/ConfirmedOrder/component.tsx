import React from 'react'
import { Modal } from 'antd'
import OrderHeader from './OrderHeader'
import OrderBody from './OrderBody'
import OrderFooter from './OrderFooter'
import useContainer from './hook'
import styles from './styles.module.scss'

const ConfirmedOrder: React.FC = () => {
  const { handleCloseModal } = useContainer()

  return (
    <Modal
      open
      onCancel={handleCloseModal}
      cancelButtonProps={{
        className: styles.cancelBtn,
      }}
      okButtonProps={{
        className: styles.okBtnCart,
      }}
      classNames={{
        header: styles.headerContainer,
        body: styles.body,
      }}
      title={<OrderHeader />}
      className={styles.order}
    >
      <OrderBody />

      <OrderFooter />
    </Modal>
  )
}

export default ConfirmedOrder
