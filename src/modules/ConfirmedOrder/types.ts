import { MODAL_TYPE } from "./constants"; 

export interface OrderProps {

}

export interface OrderModal {
  type: typeof MODAL_TYPE,
  modalProps: OrderProps
}