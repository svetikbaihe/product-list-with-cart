import { useCallback, useContext, useMemo } from 'react'
import { Context } from '@state/context/ContextProvider'

const useContainer = () => {
  const context = useContext(Context)

  const cart = context.state.cart

  const handleCloseModal = useCallback(() => {
    context.closeModal()
  }, [])

  const resetCart = useCallback(() => {
    context.resetCart()
  }, [])

  const orderTotalPrice = useMemo(() => {
    return cart
      .reduce((acc, product) => acc + product.amount * product.price, 0)
      .toFixed(2)
  }, [])

  const truncateString = (str: string, length: number): string => {
    return str.length > length ? str.slice(0, length) + '...' : str
  }

  return {
    cart,
    orderTotalPrice,

    handleCloseModal,
    resetCart,
    truncateString,
  }
}

export default useContainer
