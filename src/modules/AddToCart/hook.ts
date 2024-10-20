import { useCallback, useContext } from 'react'
import { useMatches } from 'react-router-dom'
import { Context } from '@app/providers/context/ContextProvider'
import { ProductType } from 'type/app'
import { RoutesKeys } from '@constants/routes'

const useContainer = (item: ProductType) => {
  const context = useContext(Context)

  const matches = useMatches()

  const isDessertDetails = matches.at(-1)?.id === RoutesKeys.DESSERT_DETAILS

  const isList = context.state.isList

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

  return {
    productAmount,
    isDessertDetails,
    isList,

    handleDecrement,
    handleIncrement,
    handleAddProductToCart,
  }
}

export default useContainer
