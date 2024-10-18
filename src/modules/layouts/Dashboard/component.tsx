import React from 'react'
import { Outlet } from 'react-router-dom'
import { LAYOUT, LayoutKeys } from '@constants/layout'
import Header from './Header'

const DashboardLayout: React.FC = () => {
  return (
    <div className="relative h-full">
      <Header />

      <main className="h-full">
        <Outlet />
      </main>
    </div>
  )
}

DashboardLayout.displayName = LAYOUT[LayoutKeys.DASHBOARD_LAYOUT].DISPLAY_NAME

export default DashboardLayout
