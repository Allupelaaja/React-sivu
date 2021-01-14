import React from 'react'
import { Link } from "react-router-dom"

//Core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
    page: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '30px',
    },
}));

const Header = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const sideBarLinks = props.sideBarLinks

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className={classes.page}>
            <h1>Aleksi Heikkilä's webpage</h1>
            {sideBarLinks.map((singleLink, index) => (
              <Box m={2} key={index}>
                <Button variant="contained" key={index} to={singleLink.link} component={Link}>
                  {singleLink.text} {singleLink.icon !== undefined ? singleLink.icon : <></> }
                </Button>
              </Box>
            ))}
            <Box m={1}>
              <div>
                <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                  Links <MoreVertIcon />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}><a href="https://github.com/Allupelaaja" target="_blank">Github</a><LaunchIcon/></MenuItem>
                  <MenuItem onClick={handleMenuClose}><a href="https://gitlab.com/Allupelaaja" target="_blank">Gitlab</a><LaunchIcon/></MenuItem>
                  <MenuItem onClick={handleMenuClose}>CV (Pdf) <LaunchIcon/></MenuItem>
                </Menu>
              </div>
            </Box>
        </div>
    )
}

export default Header;
