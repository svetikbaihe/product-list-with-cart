import { ThemeConfig } from "antd"

export const theme: ThemeConfig = {
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
  },
}