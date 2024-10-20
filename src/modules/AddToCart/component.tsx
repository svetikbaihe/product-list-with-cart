import type React from 'react'
import cn from 'classnames'
import { Button, Typography } from 'antd'
import {
  ShoppingCartOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons'
import useContainer from './hook'
import { AddToCartProps } from './types'
import styles from './styles.module.scss'

const { Text } = Typography

const AddToCart: React.FC<AddToCartProps> = ({ item }) => {
  const {
    productAmount,
    isDessertDetails,
    isList,

    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
  } = useContainer(item)

  return (
    <>
      {productAmount === 0 && (
        <Button
          icon={<ShoppingCartOutlined className={styles.iconCart} />}
          className={cn(styles.buttonAddProducts, {
            [styles.relativePosition]: isDessertDetails,
            [styles.absolutePosition]: !isList || isDessertDetails,
          })}
          onClick={handleAddProductToCart}
        >
          {!isList || isDessertDetails ? 'Add to Cart' : ''}
        </Button>
      )}

      {productAmount >= 1 && (
        <div
          className={cn({
            [styles.relativePosition]: isDessertDetails,
            [styles.absolutePosition]: !isList || isDessertDetails,
            [styles.divAddRemoveProducts]: !isList || isDessertDetails,
          })}
        >
          <Button
            icon={<MinusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={handleDecrement}
            className={styles.buttonMinusAndPlus}
          />

          <Text
            className={cn(styles.counter, {
              [styles.counterList]: isList,
            })}
          >
            {productAmount}
          </Text>

          <Button
            icon={<PlusCircleTwoTone twoToneColor="hsl(14, 86%, 42%)" />}
            shape="circle"
            onClick={handleIncrement}
            className={styles.buttonMinusAndPlus}
          />
        </div>
      )}
    </>
  )
}

export default AddToCart
