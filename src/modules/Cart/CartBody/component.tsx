import React from 'react'
import { Typography, Button } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import useContainer from '../hook'
import styles from '../styles.module.scss'

const { Text } = Typography

const CartBody: React.FC = () => {
  const { cart, handleDeleteProduct } = useContainer()

  return (
    <ul>
      {cart.map(product => {
        return (
          <li key={product.id} className={styles.liProductPosition}>
            <div className={styles.cartInfoBlock}>
              <div>
                <Text className={styles.productName}>{product.name}</Text>
                <div className={styles.priceQuantity}>
                  <Text className={styles.productQuantity}>
                    {product.amount + 'x'}
                  </Text>
                  <Text className={styles.productPrice}>
                    {'@ ' + '$' + product.price.toFixed(2)}
                  </Text>
                  <Text className={styles.individualTotalPrice}>
                    {'$' + (product.amount * product.price).toFixed(2)}
                  </Text>
                </div>
              </div>
              <Button
                type="text"
                icon={
                  <CloseCircleOutlined className={styles.productDeleteIcon} />
                }
                onClick={handleDeleteProduct(product.id)}
                className={styles.productDeleteBtn}
              />
            </div>
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

export default CartBody
