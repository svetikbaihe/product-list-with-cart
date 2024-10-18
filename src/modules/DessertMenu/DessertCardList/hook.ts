import { useCallback, useContext } from 'react'
import { Context } from '@app/providers/context/ContextProvider'
import { ProductType } from 'type/app'

const useContainer = (item: ProductType) => {
  const context = useContext(Context)

  const cart = context.state.cart

  const foundProduct = cart?.find(product => product.id === item?.id)
  const productAmount = foundProduct ? foundProduct.amount : 0

  const handleIncrement = useCallback(() => {
    context.incrementProduct({ id: item?.id })
  }, [])

  const handleDecrement = useCallback(() => {
    context.decrementProduct({ id: item?.id })
    context.deleteZeroAmount()
  }, [])

  const handleAddProductToCart = useCallback(() => {
    context.addProductToCart(item)
  }, [])

  const truncateString = (str: string, length: number): string => {
    return str.length > length ? str.slice(0, length) + '...' : str
  }

  return {
    productAmount,

    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
    truncateString,
  }
}

export default useContainer
