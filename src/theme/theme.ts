import { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {
    fontFamily: 'RedHatText, sans-serif',
  },
  components: {
    Button: {
      defaultHoverColor: 'hsl(14, 86%, 42%)',
      defaultHoverBorderColor: 'hsl(14, 86%, 42%)',
      colorPrimary: 'hsl(14, 86%, 42%)',
      colorPrimaryHover: 'hsl(14, 85%, 32%)',
    },

    Typography: {
      fontSizeHeading1: 40,
      fontSizeHeading2: 24,
      fontSizeHeading3: 12,
      fontSizeHeading4: 16,
    },

    Card: {
      colorBorderSecondary: 'none',
    },
  },
}

export default theme
