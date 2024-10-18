import React, { useContext } from 'react'
import { Context } from '@app/providers/context/ContextProvider'
import modals from './modals'

const RootModal: React.FC = () => {
  const context = useContext(Context)

  const { type, modalProps } = context.state.modal

  if (!type) {
    return null
  }

  const Component = modals[type as keyof typeof modals]

  return <Component {...modalProps} />
}

export default RootModal
