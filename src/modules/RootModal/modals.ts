import { MODAL_TYPE as CART } from '@modules/Cart'
import { MODAL_TYPE as ORDER } from '@modules/ConfirmedOrder'
import Cart from '@modules/Cart'
import ConfirmedOrder from '@modules/ConfirmedOrder'

const modals = {
  [CART]: Cart,
  [ORDER]: ConfirmedOrder,
}

export default modals
