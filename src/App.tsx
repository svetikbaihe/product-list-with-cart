import React, { StrictMode } from 'react'
import { ConfigProvider } from 'antd'
import DessertMenu from '@modules/DessertMenu'
import ContextProvider from '@state/context/ContextProvider'
import RootModal from '@modules/RootModal'
import theme from '@theme/theme'
import './App.scss'

const App: React.FC = () => {
  return (
    <StrictMode>
      <ConfigProvider theme={theme}>
        <ContextProvider>
          <DessertMenu />
          <RootModal />
        </ContextProvider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
