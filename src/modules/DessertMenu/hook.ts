import { useCallback, useContext } from 'react'
import { Context } from '@state/context/ContextProvider'

const useContainer = () => {
  const context = useContext(Context)

  const handleOpenModal = useCallback(() => {
    context.openModal({
      type: 'CART_MODAL',
      modalProps: null,
    })
  }, [])

  return {
    handleOpenModal,
  }
}

export default useContainer
