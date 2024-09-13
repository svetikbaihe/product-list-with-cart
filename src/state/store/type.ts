import { ProductType } from 'type/app'

export enum ACTION_TYPES {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export interface CartProduct extends ProductType {
  amount: number
}

export interface State {
  cart: CartProduct[]
}

export interface ActionItem<T, P> {
  type: T
  payload: P
}

export type Action =
  | ActionItem<ACTION_TYPES.OPEN_MODAL, undefined>
  | ActionItem<ACTION_TYPES.CLOSE_MODAL, undefined>
  | ActionItem<ACTION_TYPES.INCREMENT_PRODUCT, Pick<ProductType, 'id'>>
  | ActionItem<ACTION_TYPES.DECREMENT_PRODUCT, Pick<ProductType, 'id'>>
  | ActionItem<ACTION_TYPES.DELETE_PRODUCT, Pick<ProductType, 'id'>>
