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
      display: 'flex',
      alignItems: 'center',
      marginLeft: '30px',
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
      <Typography variant='h4'>Aleksi Heikkilä's webpage</Typography>
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
              <MenuItem key={index} onClick={handleMenuClose}>
                <a href={singleLink.href} target={singleLink.target}><Typography>{singleLink.text}</Typography></a>
                <LaunchIcon />
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Box>
    </div>
  )
}

export default Header
