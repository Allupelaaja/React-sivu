import React from 'react'

//Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    page: {
        padding: '5px',
        backgroundColor: 'lightblue',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        display: 'flex',
    },
    text: {
        paddingLeft: '15px'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            <p className={classes.text}>Made by Aleksi Heikkilä 2021</p>
            <p className={classes.text}>Made with React using <a href="https://material-ui.com/" target="_blank">Material-UI</a></p>
        </div>
    )
}

export default Footer;
