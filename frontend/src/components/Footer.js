import React from 'react'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

//Icons
import LaunchIcon from '@material-ui/icons/Launch'

const Footer = () => {
    const customTheme = useTheme()
    // eslint-disable-next-line no-unused-vars
    const useStyles = makeStyles((theme) => ({
        page: {
            padding: '5px',
            backgroundColor: customTheme.palette.background.paper,
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.2rem'
            },
        },
        text2: {
            display: 'flex',
            [theme.breakpoints.up('sm')]: {
                marginRight: 'auto',
                marginLeft: '15px',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.8rem'
            },
        },
        text1: {
            [theme.breakpoints.up('sm')]: {
                marginLeft: 'auto',
                marginRight: '5px',
            },
        },
        icon: {
            [theme.breakpoints.down('xs')]: {
                width: '1rem',
                height: '1rem',
            },
        }
    }))

    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Typography className={classes.text1, classes.textSize}>Made by Aleksi Heikkilä 2021</Typography>
            <div className={classes.text2}>
                <Typography>Made with React using&nbsp;</Typography>
                <a style={{ color: "white" }} href="https://material-ui.com/" target="_blank" rel="noreferrer"><Typography>Material-UI</Typography></a>
                <LaunchIcon className={classes.icon} />
            </div>
        </div>
    )
}

export default Footer
