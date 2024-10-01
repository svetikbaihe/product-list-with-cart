import { useContext } from 'react'
import { Context } from '@state/context/ContextProvider'
import { ProductType } from 'type/app'

const useContainer = () => {
  const context = useContext(Context)

  const handleOpenModal = () => {
    context.openModal({
      type: 'CART_MODAL',
      modalProps: null,
    })
  }

  const cart = context.state.cart

  const handleIncrement = (id: Pick<ProductType, 'id'>) => {
    context.incrementProduct(id)
  }

  const handleDecrement = (id: Pick<ProductType, 'id'>) => {
    context.decrementProduct(id)
  }

  const handleAddProductToCart = (product: ProductType) => {
    context.addProductToCart(product)
  }

  const handleDeleteZeroAmount = () => {
    context.deleteZeroAmount()
  }

  return {
    cart,

    handleOpenModal,
    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
    handleDeleteZeroAmount,
  }
}

export default useContainer
