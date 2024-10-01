import React, { PropsWithChildren, useReducer, createContext } from 'react'
import { Modal, State } from '@state/store/type'
import { reducer } from '@state/store/reducer'
import { actions } from '@state/store'
import { ProductType } from 'type/app'

export interface ContextProps {
  openModal: (modalType: Modal) => void
  closeModal: VoidFunction
  addProductToCart: (product: ProductType) => void
  incrementProduct: (id: Pick<ProductType, 'id'>) => void
  decrementProduct: (id: Pick<ProductType, 'id'>) => void
  deleteProduct: (id: number) => void
  deleteZeroAmount: VoidFunction
  resetCart: VoidFunction
  state: State
}

export const Context = createContext<ContextProps>({
  openModal: () => {},
  closeModal: () => {},
  incrementProduct: () => {},
  decrementProduct: () => {},
  deleteProduct: () => {},
  addProductToCart: () => {},
  deleteZeroAmount: () => {},
  resetCart: () => {},
  state: {
    cart: [],
    modal: {
      type: null,
      modalProps: null,
    },
  },
})

const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initialState: State = {
    cart: [],
    modal: {
      type: null,
      modalProps: null,
    },
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const openModal = (modalType: Modal) => {
    dispatch(actions.openModalAction(modalType))
  }

  const closeModal = () => {
    dispatch(actions.closeModalAction())
  }

  const incrementProduct = (id: Pick<ProductType, 'id'>) => {
    dispatch(actions.incrementProductAction(id))
  }

  const addProductToCart = (product: ProductType) => {
    dispatch(actions.addProductToCartAction(product))
  }

  const decrementProduct = (id: Pick<ProductType, 'id'>) => {
    dispatch(actions.decrementProductAction(id))
  }

  const deleteProduct = (id: number) => {
    dispatch(actions.deleteProductAction(id))
  }

  const deleteZeroAmount = () => {
    dispatch(actions.deleteZeroAmountAction())
  }

  const resetCart = () => {
    dispatch(actions.resetCart())
  }

  const store = {
    state,

    openModal,
    closeModal,
    incrementProduct,
    decrementProduct,
    deleteProduct,
    addProductToCart,
    deleteZeroAmount,
    resetCart,
  }

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export default ContextProvider
