import { ProductType } from 'type/app'
import { ACTION_TYPES } from './type'
import type { Action, Modal } from './type'

export const openModalAction = (modalType: Modal): Action => ({
  type: ACTION_TYPES.OPEN_MODAL,
  payload: modalType,
})

export const closeModalAction = (): Action => ({
  type: ACTION_TYPES.CLOSE_MODAL,
  payload: undefined,
})

export const addProductToCartAction = (product: ProductType): Action => ({
  type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
  payload: product,
})

export const incrementProductAction = (
  id: Pick<ProductType, 'id'>
): Action => ({
  type: ACTION_TYPES.INCREMENT_PRODUCT,
  payload: id,
})

export const decrementProductAction = (
  id: Pick<ProductType, 'id'>
): Action => ({
  type: ACTION_TYPES.DECREMENT_PRODUCT,
  payload: id,
})

export const deleteProductAction = (id: string): Action => ({
  type: ACTION_TYPES.DELETE_PRODUCT,
  payload: id,
})

export const deleteZeroAmountAction = (): Action => ({
  type: ACTION_TYPES.DELETE_ZERO_AMOUNT,
  payload: undefined,
})

export const resetCart = (): Action => ({
  type: ACTION_TYPES.RESET_CART,
  payload: undefined,
})

export const switchToList = (): Action => ({
  type: ACTION_TYPES.SWITCH_TO_LIST,
  payload: undefined,
})

export const switchToGrid = (): Action => ({
  type: ACTION_TYPES.SWITCH_TO_GRID,
  payload: undefined,
})
