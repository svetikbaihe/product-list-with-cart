import React, { StrictMode } from 'react'
import { ConfigProvider } from 'antd'
import DessertMenu from '@modules/DessertMenu'
import theme from '@theme/theme'
import './App.scss'

const App: React.FC = () => {
  return (
    <StrictMode>
      <ConfigProvider theme={theme}>
        <DessertMenu />
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
