import { Action, ACTION_TYPES, State } from './type'

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL:
      return {
        ...state,
        modal: {
          type: action.payload.type,
          modalProps: action.payload.modalProps,
        },
      }
    case ACTION_TYPES.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          type: null,
          modalProps: null,
        },
      }
    case ACTION_TYPES.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, amount: 1 }],
      }
    case ACTION_TYPES.INCREMENT_PRODUCT:
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      }
    case ACTION_TYPES.DECREMENT_PRODUCT:
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      }
    case ACTION_TYPES.DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
      }
    case ACTION_TYPES.DELETE_ZERO_AMOUNT:
      return {
        ...state,
        cart: state.cart.filter(product => product.amount !== 0),
      }
    case ACTION_TYPES.RESET_CART:
      return {
        ...state,
        cart: [],
        modal: {
          type: null,
          modalProps: null,
        },
      }
    default:
      return state
  }
}
