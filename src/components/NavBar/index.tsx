import React, { useCallback } from 'react'
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Button
} from '@material-ui/core'
import {
  Home,
  Whatshot,
  History,
  VideoLibrary,
  AccountCircle,
  SvgIconComponent
} from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useTheme } from '@material-ui/core/styles'

import { useStyles } from './styles'

interface MenuItem {
  id: number
  label: string
  path: string
  icon: SvgIconComponent
}

const primaryMenu = [
  {
    id: 1,
    label: 'Início',
    path: '/',
    icon: Home
  },
  {
    id: 1,
    label: 'Em alta',
    path: '/trending',
    icon: Whatshot
  },
  {
    id: 1,
    label: 'Inscrições',
    path: '/subscriptions',
    icon: History
  }
] as MenuItem[]

const secondaryMenu = [
  {
    id: 1,
    label: 'Biblioteca',
    path: '/library',
    icon: VideoLibrary
  },
  {
    id: 1,
    label: 'Histórico',
    path: '/history',
    icon: Whatshot
  }
] as MenuItem[]

const NavBar: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const theme = useTheme()

  const isSelected = useCallback(
    (item: MenuItem) => {
      return router.pathname === item.path
    },
    [router]
  )

  return (
    <Hidden mdDown>
      <Drawer
        variant="persistent"
        open
        classes={{ paper: classes.desktopDrawer }}
      >
        <List>
          {primaryMenu.map(item => {
            const Icon = item.icon
            return (
              <ListItem
                key={item.id}
                button
                selected={isSelected(item)}
                classes={{ root: classes.listItem }}
              >
                <ListItemIcon>
                  <Icon
                    style={{
                      color: isSelected(item) && theme.palette.primary.main
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <List>
          {secondaryMenu.map(item => {
            const Icon = item.icon
            return (
              <ListItem
                key={item.id}
                button
                selected={isSelected(item)}
                classes={{ root: classes.listItem }}
              >
                <ListItemIcon>
                  <Icon
                    style={{
                      color: isSelected(item) && theme.palette.primary.main
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <Box mx={4} my={2}>
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Fazer login
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Hidden>
  )
}

export default NavBar
