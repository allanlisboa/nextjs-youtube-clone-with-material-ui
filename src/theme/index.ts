import { createTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3ea6ff'
    },
    background: {
      default: colors.common.white,
      paper: colors.blueGrey['50']
    },
    text: {
      primary: colors.blueGrey['900'],
      secondary: colors.blueGrey['600']
    }
  }
})

export default theme
