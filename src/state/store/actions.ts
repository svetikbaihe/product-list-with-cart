import { ProductType } from 'type/app'
import { ACTION_TYPES } from './type'
import type { Action } from './type'

export const openModalAction = (): Action => ({
  type: ACTION_TYPES.OPEN_MODAL,
  payload: undefined,
})

export const closeModalAction = (): Action => ({
  type: ACTION_TYPES.CLOSE_MODAL,
  payload: undefined,
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

export const deleteProductAction = (id: Pick<ProductType, 'id'>): Action => ({
  type: ACTION_TYPES.DELETE_PRODUCT,
  payload: id,
})
