import React from 'react'
import Head from 'next/head'

import TopBar from 'components/TopBar'
import NavBar from 'components/NavBar'
import { useStyles } from './styles'

interface LayoutProps {
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.root}>
        <TopBar />
        <NavBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
