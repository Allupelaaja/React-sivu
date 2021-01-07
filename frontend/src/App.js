import React, { useState, useEffect, useRef } from 'react'
import {
  HashRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

//Core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

//Components
import FrontPage from './components/pages/FrontPage'
import WelcomePage from './components/pages/WelcomePage'
import Courses from './components/pages/Courses'
import Footer from './components/Footer'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const App = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const sideBarLinks = [
    {
      component: <WelcomePage />,
      text: "About me",
      link: "/"
    },
    {
      component: <Courses />,
      text: "Courses",
      link: "/courses",
    },
    {
      component: <FrontPage />,
      text: "Projects",
      link: "/projects",
    },
  ]

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            {sideBarLinks.map((singleLink, index) => (
              <Box m={1} key={index}>
                <Button variant="contained"q key={index} to={singleLink.link} component={Link}>
                  {singleLink.text}
                </Button>
              </Box>
            ))}
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.drawerHeader} />
          <Switch>
            {sideBarLinks.map((singleLink, index) => (
              <Route key={index} exact path={singleLink.link}>
                {singleLink.component}
              </Route>
            ))}
          </Switch>
        </main>
      </div>
      <Footer/>
    </Router>
  )
})

export default App