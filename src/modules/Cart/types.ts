import { MODAL_TYPE } from './constants'

export interface CartProps {}

export interface CartModal {
  type: typeof MODAL_TYPE
  modalProps: CartProps
}
