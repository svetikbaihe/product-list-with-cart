import { useCallback, useContext } from 'react'
import { Context } from '@state/context/ContextProvider'
import { ProductType } from 'type/app'

const useContainer = (item: ProductType) => {
  const context = useContext(Context)

  const cart = context.state.cart

  const foundProduct = cart?.find(product => product.id === item?.id)
  const productAmount = foundProduct ? foundProduct.amount : 0

  const handleIncrement = useCallback(() => {
    context.incrementProduct({ id: item?.id })
  }, [cart])

  const handleDecrement = useCallback(() => {
    context.decrementProduct({ id: item?.id })
    context.deleteZeroAmount()
  }, [cart])

  const handleAddProductToCart = useCallback(() => {
    context.addProductToCart(item)
  }, [cart])

  return {
    productAmount,
    
    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
  }
}

export default useContainer
