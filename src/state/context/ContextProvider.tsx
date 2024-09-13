import React, { PropsWithChildren, useReducer, createContext } from 'react'
import { State } from '@state/store/type'
import { reducer } from '@state/store/reducer'
import { actions } from '@state/store'
import { ProductType } from 'type/app'

export interface ContextProps {
  openModal: () => void
  closeModal: () => void
  incrementProduct: (id: Pick<ProductType, 'id'>) => void
  decrementProduct: (id: Pick<ProductType, 'id'>) => void
  deleteProduct: (id: Pick<ProductType, 'id'>) => void
  state: State
}

export const Context = createContext<ContextProps>({
  openModal: () => {},
  closeModal: () => {},
  incrementProduct: () => {},
  decrementProduct: () => {},
  deleteProduct: () => {},
  state: {
    cart: [],
  },
})

const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initialState: State = {
    cart: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const openModal = () => {
    dispatch(actions.openModalAction())
  }

  const closeModal = () => {
    dispatch(actions.closeModalAction())
  }

  const incrementProduct = (id: Pick<ProductType, 'id'>) => {
    dispatch(actions.incrementProductAction(id))
  }

  const decrementProduct = (id: Pick<ProductType, 'id'>) => {
    dispatch(actions.decrementProductAction(id))
  }

  const deleteProduct = (id: Pick<ProductType, 'id'>) => {
    dispatch(actions.deleteProductAction(id))
  }

  const store = {
    state,
    openModal,
    closeModal,
    incrementProduct,
    decrementProduct,
    deleteProduct,
  }

  return <Context.Provider value={store}>{children}</Context.Provider>
}

export default ContextProvider
