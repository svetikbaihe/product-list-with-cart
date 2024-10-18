import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './Router'

const RoutesProvider: React.FC = () => {
  return <RouterProvider router={Router} />
}

export default RoutesProvider
