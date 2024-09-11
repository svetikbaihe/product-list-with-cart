import React, { StrictMode } from "react";
import { ConfigProvider } from 'antd'
import theme from '@theme/theme'
import './App.scss';

const items = [
  {
    image: {
      thumbnail: '/images/thumbnail/image-waffle-thumbnail.jpg',
      mobile: '/images/mobile/image-waffle-mobile.jpg',
      tablet: '/images/tablet/image-waffle-tablet.jpg',
      desktop: '/images/desktop/image-waffle-desktop.jpg',
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-creme-brulee-thumbnail.jpg',
      mobile: '/images/mobile/image-creme-brulee-mobile.jpg',
      tablet: '/images/tablet/image-creme-brulee-tablet.jpg',
      desktop: '/images/desktop/image-creme-brulee-desktop.jpg',
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-macaron-thumbnail.jpg',
      mobile: '/images/mobile/image-macaron-mobile.jpg',
      tablet: '/images/tablet/image-macaron-tablet.jpg',
      desktop: '/images/desktop/image-macaron-desktop.jpg',
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-tiramisu-thumbnail.jpg',
      mobile: '/images/mobile/image-tiramisu-mobile.jpg',
      tablet: '/images/tablet/image-tiramisu-tablet.jpg',
      desktop: '/images/desktop/image-tiramisu-desktop.jpg',
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-baklava-thumbnail.jpg',
      mobile: '/images/mobile/image-baklava-mobile.jpg',
      tablet: '/images/tablet/image-baklava-tablet.jpg',
      desktop: '/images/desktop/image-baklava-desktop.jpg',
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-meringue-thumbnail.jpg',
      mobile: '/images/mobile/image-meringue-mobile.jpg',
      tablet: '/images/tablet/image-meringue-tablet.jpg',
      desktop: '/images/desktop/image-meringue-desktop.jpg',
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-cake-thumbnail.jpg',
      mobile: '/images/mobile/image-cake-mobile.jpg',
      tablet: '/images/tablet/image-cake-tablet.jpg',
      desktop: '/images/desktop/image-cake-desktop.jpg',
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-brownie-thumbnail.jpg',
      mobile: '/images/mobile/image-brownie-mobile.jpg',
      tablet: '/images/tablet/image-brownie-tablet.jpg',
      desktop: '/images/desktop/image-brownie-desktop.jpg',
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
  },
  {
    image: {
      thumbnail: '/images/thumbnail/image-panna-cotta-thumbnail.jpg',
      mobile: '/images/mobile/image-panna-cotta-mobile.jpg',
      tablet: '/images/tablet/image-panna-cotta-tablet.jpg',
      desktop: '/images/desktop/image-panna-cotta-desktop.jpg',
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
  },
]

const App: React.FC = () => {
  return( 
    <StrictMode>
      <ConfigProvider theme={theme}>
        
      </ConfigProvider>
    </StrictMode>
  )
}

export default App;
