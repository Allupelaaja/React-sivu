import React, { useState, useEffect, useRef } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FrontPage from './components/pages/FrontPage'
import WelcomePage from './components/pages/WelcomePage'
import Courses from './components/pages/Courses'

const drawerWidth = 240;

console.log("testing")

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
      text: "Welcome Page",
      link: "/"
    },
    {
      component: <FrontPage />,
      text: "Front Page",
      link: "/frontpage",
    },
    {
      component: <Courses />,
      text: "Courses",
      link: "/courses",
    }
  ]

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            {sideBarLinks.map((singleLink, index) => (
              <button><Link to={singleLink.link}>{singleLink.text}</Link></button>
            ))}
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route exact path="/frontpage">
              <FrontPage />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
})

export default App