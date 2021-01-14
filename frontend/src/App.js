import React from 'react'
// import React, { useState, useEffect, useRef } from 'react'
import {
  HashRouter as Router,
  Switch, Route
} from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

//Core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//Components
import FrontPage from './components/pages/FrontPage'
import WelcomePage from './components/pages/WelcomePage'
import Courses from './components/pages/Courses'
import Footer from './components/Footer'
import Header from './components/Header'

//Icons
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  page: {
    width: '75%',
    margin: '0 auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius: '25px',
    backgroundColor: 'white',
    marginTop: '30px',
    marginBottom: '80px',
  },
  backgroundPage: {
    backgroundColor: 'lightgrey',
    position: 'absolute',
    width: '100%',
    minHeight: '90%',
  },
}));

const App = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const sideBarLinks = [
    {
      component: <WelcomePage />,
      text: "About me",
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
      component: <FrontPage />,
      text: "Projects",
      link: "/projects",
      icon: <WorkIcon />,
    },
  ]

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Header sideBarLinks={sideBarLinks} />
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.drawerHeader} />
          <div className={classes.backgroundPage}>
            <div className={classes.page}>
              <Switch>
                {sideBarLinks.map((singleLink, index) => (
                  <Route key={index} exact path={singleLink.link}>
                    {singleLink.component}
                  </Route>
                ))}
              </Switch>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  )
})

export default App