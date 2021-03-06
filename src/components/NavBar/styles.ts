import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  mobileDrawer: {
    width: 240
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
    backgroundColor: theme.palette.background.default
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3)
  },
  listItemText: {
    fontSize: 14
  }
}))
