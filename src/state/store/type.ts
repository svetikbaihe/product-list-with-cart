import { ModalAction } from '@modules/RootModal/types'
import { ProductType } from 'type/app'

export enum ACTION_TYPES {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  DELETE_ZERO_AMOUNT = 'DELETE_ZERO_AMOUNT',
  RESET_CART = 'RESET_CART',
  SWITCH_TO_LIST = 'SWITCH_TO_LIST',
  SWITCH_TO_GRID = 'SWITCH_TO_GRID',
}

export interface CartProduct extends ProductType {
  amount: number
}

export interface Modal {
  type: ModalAction['type'] | null
  modalProps: ModalAction['modalProps'] | null
}

export interface State {
  cart: CartProduct[]
  modal: Modal
  isList: Boolean
}

export interface ActionItem<T, P> {
  type: T
  payload: P
}

export type Action =
  | ActionItem<ACTION_TYPES.ADD_PRODUCT_TO_CART, ProductType>
  | ActionItem<ACTION_TYPES.OPEN_MODAL, Modal>
  | ActionItem<ACTION_TYPES.CLOSE_MODAL, undefined>
  | ActionItem<ACTION_TYPES.INCREMENT_PRODUCT, Pick<ProductType, 'id'>>
  | ActionItem<ACTION_TYPES.DECREMENT_PRODUCT, Pick<ProductType, 'id'>>
  | ActionItem<ACTION_TYPES.DELETE_PRODUCT, string>
  | ActionItem<ACTION_TYPES.DELETE_ZERO_AMOUNT, undefined>
  | ActionItem<ACTION_TYPES.RESET_CART, undefined>
  | ActionItem<ACTION_TYPES.SWITCH_TO_LIST, undefined>
  | ActionItem<ACTION_TYPES.SWITCH_TO_GRID, undefined>
