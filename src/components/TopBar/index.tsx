import React from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Paper,
  InputBase,
  IconButton,
  Button,
  Hidden
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  VideoCall as VideoCallIcon,
  Apps as AppsIcon,
  MoreVert as MoreVertIcon,
  AccountCircle as AccountCircleIcon
} from '@material-ui/icons'

import { useStyles } from './styles'

const TopBar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer}>
          <MenuIcon />
          <img
            src="/assets/logo-dark.svg"
            alt="Logomarca player com texto Youtube"
            className={classes.logo}
          />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper
              component="form"
              className={classes.search}
              variant="outlined"
            >
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box className={classes.actionsContainer}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <Button
            color="secondary"
            variant="outlined"
            component="a"
            startIcon={<AccountCircleIcon />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
