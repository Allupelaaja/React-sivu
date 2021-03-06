import React from 'react'
// import React, { useState, useEffect, useRef } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import { createMuiTheme, responsiveFontSizes, makeStyles, ThemeProvider } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

//Core
import { AppBar, Toolbar, Box, Container } from '@material-ui/core'

//Components
import Projects from './components/pages/Projects'
import WelcomePage from './components/pages/WelcomePage'
import Courses from './components/pages/Courses'
import Footer from './components/Footer'
import Header from './components/Header'

//Icons
import PersonIcon from '@material-ui/icons/Person'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import WorkIcon from '@material-ui/icons/Work'

// eslint-disable-next-line no-unused-vars
const App = React.forwardRef((props, ref) => {
  let customTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })
  customTheme = responsiveFontSizes(customTheme)

  // eslint-disable-next-line no-unused-vars
  const useStyles = makeStyles((theme) => ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: customTheme.spacing(0, 1),
      minHeight: '92px',
      justifyContent: 'flex-end',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      padding: customTheme.spacing(0, 1),
      minHeight: '70px',
      justifyContent: 'flex-end',
    },
    page: {
      [theme.breakpoints.up('sm')]: {
        width: '75%',
        margin: '0 auto',
        padding: '30px',
      },
    },
  }))

  const classes = useStyles()

  const headerLinks = [
    {
      component: <WelcomePage />,
      text: "About",
      link: "/",
      icon: <PersonIcon />,
    },
    {
      component: <Courses />,
      text: "Courses",
      link: "/courses",
      icon: <LibraryBooksIcon />,
    },
    {
      component: <Projects />,
      text: "Projects",
      link: "/projects",
      icon: <WorkIcon />,
    },
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <AppBar color="inherit" position="fixed">
            <Toolbar>
              <Header headerLinks={headerLinks} />
            </Toolbar>
          </AppBar>
          <main>
            <div className={classes.drawerHeader} />
            <Container className={classes.page}>
              <Switch>
                {headerLinks.map((singleLink, index) => (
                  <Route key={index} exact path={singleLink.link}>
                    {singleLink.component}
                  </Route>
                ))}
              </Switch>
            </Container>
            <Box>
              <div className={classes.footer} />
              <Footer />
            </Box>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
})

export default App