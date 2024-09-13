import { Action, ACTION_TYPES, State } from './type'

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL:
      return state
    case ACTION_TYPES.CLOSE_MODAL:
      return state
    case ACTION_TYPES.INCREMENT_PRODUCT:
      return {
        cart: state.cart.filter(product =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      }
    case ACTION_TYPES.DECREMENT_PRODUCT:
      return {
        cart: state.cart.filter(product =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      }
    case ACTION_TYPES.DELETE_PRODUCT:
      return {
        cart: state.cart.filter(product => product.id !== action.payload.id),
      }
    default:
      return state
  }
}
