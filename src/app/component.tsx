import React, { StrictMode } from 'react'
import { ConfigProvider } from 'antd'
import ContextProvider from '@app/providers/context/ContextProvider'
import RoutesProvider from './providers/Routes'
import theme from '@theme/theme'

const App: React.FC = () => {
  return (
    <StrictMode>
      <ConfigProvider theme={theme}>
        <ContextProvider>
          <RoutesProvider />
        </ContextProvider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default App
