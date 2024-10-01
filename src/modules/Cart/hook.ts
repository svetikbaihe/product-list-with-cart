import { useContext, useMemo } from 'react'
import { Context } from '@state/context/ContextProvider'

const useContainer = () => {
  const context = useContext(Context)

  const cart = context.state.cart

  const handleCloseModal = () => {
    context.closeModal()
  }

  const handleOpenModal = () => {
    context.openModal({
      type: 'ORDER_MODAL',
      modalProps: null,
    })
  }

  const handleDeleteProduct = (id: number) => () => {
    context.deleteProduct(id)
  }

  const cartTotalPrice = useMemo(() => {
    return cart
      .reduce((acc, product) => acc + product.amount * product.price, 0)
      .toFixed(2)
  }, [cart])

  const cartProductAmount = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.amount, 0)
  }, [cart])

  return {
    cart,
    cartTotalPrice,
    cartProductAmount,

    handleCloseModal,
    handleDeleteProduct,
    handleOpenModal,
  }
}

export default useContainer
