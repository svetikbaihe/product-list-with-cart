import { useContext } from 'react'
import { Context } from '@app/providers/context/ContextProvider'
import { ProductType } from 'type/app'
import useRouterPathData from '../../../hooks/useRouterPathData'

const useContainer = (item: ProductType) => {
  const context = useContext(Context)

  const { getPathData } = useRouterPathData()

  const cart = context.state.cart

  const foundProduct = cart?.find(product => product.id === item?.id)
  const productAmount = foundProduct ? foundProduct.amount : 0

  const truncateString = (str: string, length: number): string => {
    return str.length > length ? str.slice(0, length) + '...' : str
  }

  return {
    productAmount,

    truncateString,
    getPathData,
  }
}

export default useContainer
