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

const App = React.forwardRef((props, ref) => {
  let customTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })
  customTheme = responsiveFontSizes(customTheme)

  const useStyles = makeStyles((theme) => ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: customTheme.spacing(0, 1),
      ...customTheme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    page: {
      width: '75%',
      margin: '0 auto',
      padding: '30px',
      // borderRadius: '25px',
      // backgroundColor: customTheme.palette.background.paper,
      marginTop: '30px',
      marginBottom: '80px',
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
              <Footer />
            </Box>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
})

export default App