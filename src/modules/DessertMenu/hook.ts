import { useCallback, useContext } from 'react'
import { Context } from '@app/providers/context/ContextProvider'

const useContainer = () => {
  const context = useContext(Context)

  const isList = context.state.isList

  const handleOpenModal = useCallback(() => {
    context.openModal({
      type: 'CART_MODAL',
      modalProps: null,
    })
  }, [])

  const handleSwitchList = useCallback(() => {
    context.switchToList()
  }, [])

  const handleSwitchGrid = useCallback(() => {
    context.switchToGrid()
  }, [])

  return {
    isList,

    handleOpenModal,
    handleSwitchList,
    handleSwitchGrid,
  }
}

export default useContainer
