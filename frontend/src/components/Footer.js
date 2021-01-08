import React from 'react'

//Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    page: {
        marginTop: '1rem',
        padding: '5px',
        backgroundColor: 'lightblue',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            <p>Made by Aleksi Heikkilä 2021</p>
        </div>
    )
}

export default Footer;
