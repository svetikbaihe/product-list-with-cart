import React from 'react'
import { Outlet } from 'react-router-dom'
import { LAYOUT, LayoutKeys } from '@constants/layout'
import { Component as RootModal } from '@modules/RootModal/lazy'

const BaseLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <RootModal />
    </>
  )
}

BaseLayout.displayName = LAYOUT[LayoutKeys.BASE_LAYOUT].DISPLAY_NAME

export default BaseLayout
