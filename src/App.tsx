import React, { StrictMode } from "react";
import { ConfigProvider } from "antd";
import theme from '../theme';
import './App.scss';

const App: React.FC = () => {

  return (
    <StrictMode>
      <ConfigProvider theme={theme}>
        
      </ConfigProvider>
    </StrictMode>
  )
}

export default App;
