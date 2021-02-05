import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

//Core
import { makeStyles, Button, Box, Menu, MenuItem, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

//Icons
import MoreVertIcon from '@material-ui/icons/MoreVert'
import LaunchIcon from '@material-ui/icons/Launch'

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
    },
    linkButtons: {
      display: 'flex',
      alignItems: 'center',
    },
  }))

  Header.propTypes = {
    headerLinks: PropTypes.array,
  }

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
      <div>
        <Typography align="center" variant='h4'>Aleksi Heikkilä&apos;s webpage</Typography>
      </div>
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
    </div>
  )
}

export default Header
