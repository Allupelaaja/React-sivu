import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

//Core
import { makeStyles, Button, Box, Menu, MenuItem, Typography, Drawer } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

//Icons
import MoreVertIcon from '@material-ui/icons/MoreVert'
import LaunchIcon from '@material-ui/icons/Launch'
import MenuIcon from '@material-ui/icons/Menu'

//Arrays
import links from '../resources/arrays/links.js'

const Header = (props) => {
  // eslint-disable-next-line no-unused-vars
  const customTheme = useTheme()
  // eslint-disable-next-line no-unused-vars
  const useStyles = makeStyles((theme) => ({
    page: {
      display: 'block',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
      },
    },
    linkButtons: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      display: 'flex',
      alignItems: 'center',
    },
    headerTitle: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.2rem'
      },
    },
    burgerMenu: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
      },
    }
  }))

  Header.propTypes = {
    headerLinks: PropTypes.array,
  }

  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, "right": open });
  };

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const headerLinks = props.headerLinks

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.page}>
      <Typography className={classes.headerTitle} align="center" variant='h4'>Aleksi Heikkilä&apos;s webpage</Typography>
      <Button className={classes.burgerMenu} onClick={toggleDrawer("right", true)}><MenuIcon /></Button>
      <div className={classes.linkButtons}>
        {headerLinks.map((singleLink, index) => (
          <Box m={1} key={index}>
            <Button variant="contained" key={index} to={singleLink.link} component={Link}>
              <Typography>{singleLink.text}</Typography> {singleLink.icon !== undefined ? singleLink.icon : <></>}
            </Button>
          </Box>
        ))}
        <Box m={1}>
          <div>
            <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              <Typography>Links</Typography><MoreVertIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {links.map((singleLink, index) => (
                <a key={index} style={{ textDecoration: "none", color: "white" }} href={singleLink.href} target={singleLink.target}>
                  <MenuItem onClick={handleMenuClose}>
                    <Typography>{singleLink.text}</Typography>
                    <LaunchIcon />
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </div>
        </Box>
      </div>
      <div>
        <React.Fragment key={"right"}>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer(false)}
          >
            <div>
              <div>
                {headerLinks.map((singleLink, index) => (
                  <Box m={1} key={index}>
                    <Button key={index} to={singleLink.link} component={Link}>
                      <Typography>{singleLink.text}</Typography> {singleLink.icon !== undefined ? singleLink.icon : <></>}
                    </Button>
                  </Box>
                ))}
                <Box m={1}>
                  <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                      <Typography>Links</Typography><MoreVertIcon />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      {links.map((singleLink, index) => (
                        <a key={index} style={{ textDecoration: "none", color: "white" }} href={singleLink.href} target={singleLink.target}>
                          <MenuItem onClick={handleMenuClose}>
                            <Typography>{singleLink.text}</Typography>
                            <LaunchIcon />
                          </MenuItem>
                        </a>
                      ))}
                    </Menu>
                  </div>
                </Box>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Header
