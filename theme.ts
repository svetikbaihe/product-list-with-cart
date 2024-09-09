import { ThemeConfig } from "antd"

const theme: ThemeConfig = {
  token: {
    fontFamily: 'RedHatText, sans-serif'
  },
  components: {
    Button: {
      defaultHoverColor: 'hsl(14, 86%, 42%)',
      defaultHoverBorderColor: 'hsl(14, 86%, 42%)',
      colorPrimary: 'hsl(14, 86%, 42%)',
      colorPrimaryHover: 'hsl(14, 85%, 32%)'
    },

    Typography: {
      fontSizeHeading1: 28,
      fontSizeHeading2: 20,
      fontSizeHeading3: 16,
      fontSizeHeading4: 12,
    }
  },
}

export default theme;