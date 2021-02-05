import React from 'react'
import { Link } from "react-router-dom"

//Core
import { makeStyles, Button, Box, Menu, MenuItem, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

//Icons
import MoreVertIcon from '@material-ui/icons/MoreVert'
import LaunchIcon from '@material-ui/icons/Launch'

const Header = (props) => {
  const customTheme = useTheme()
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

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const headerLinks = props.headerLinks

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const links = [
    {
      href: "https://github.com/Allupelaaja",
      target: "_blank",
      text: "Github",
    },
    {
      href: "https://gitlab.com/Allupelaaja",
      target: "_blank",
      text: "Gitlab",
    },
    {
      href: "https://alekshei-portfolio.herokuapp.com/cv",
      target: "_blank",
      text: "CV (Pdf)",
    },
    {
      href: "https://alekshei-portfolio.herokuapp.com/api",
      target: "_blank",
      text: "Courses API",
    },
  ]

  return (
    <div className={classes.page}>
      <div>
        <Typography align="center" marginTop="10px" variant='h4'>Aleksi Heikkilä's webpage</Typography>
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
