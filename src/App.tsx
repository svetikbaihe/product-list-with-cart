import React, { StrictMode } from "react";
import { Typography, ConfigProvider } from "antd";
import theme from '../theme';
import './App.scss';

const { Title, Text } = Typography;


const App: React.FC = () => {

  return (
    <StrictMode>
      <ConfigProvider theme={theme}>
        <Title className="font-bold">Order Confirmed</Title>

        <Title level={2} className="text-error font-bold">Your Cart</Title>

        <Title level={3} type='secondary'>We hope you enjoy your food!</Title>

        <Title level={4} className="font-bold">Classic Tiramisu</Title>

        <Text className="text-xs">$7.00</Text>
        <Text className="text-sm">$7.00</Text>
        <Text>$7.00</Text>

        <Title level={5} className="font-bold" type='secondary'>Tiramisu</Title>
      </ConfigProvider>
    </StrictMode>
  )
}

export default App;
