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
  deleteProduct: (id: string) => void
  deleteZeroAmount: VoidFunction
  resetCart: VoidFunction
  switchToList: VoidFunction
  switchToGrid: VoidFunction
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
  switchToGrid: () => {},
  switchToList: () => {},

  state: {
    cart: [],
    modal: {
      type: null,
      modalProps: null,
    },
    isList: false,
  },
})

const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initialState: State = {
    cart: [],
    modal: {
      type: null,
      modalProps: null,
    },
    isList: false,
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

  const deleteProduct = (id: string) => {
    dispatch(actions.deleteProductAction(id))
  }

  const deleteZeroAmount = () => {
    dispatch(actions.deleteZeroAmountAction())
  }

  const resetCart = () => {
    dispatch(actions.resetCart())
  }

  const switchToList = () => {
    dispatch(actions.switchToList())
  }

  const switchToGrid = () => {
    dispatch(actions.switchToGrid())
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
    switchToGrid,
    switchToList,
  }

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export default ContextProvider
