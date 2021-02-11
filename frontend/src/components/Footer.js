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
            marginRight: 'auto',
            display: 'flex',
            marginLeft: '5px'
        },
        text1: {
            marginLeft: 'auto',
            marginRight: '5px',
        },
        textSize: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.8rem'
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
                <Typography className={classes.textSize}>
                    Made with React using <a style={{ color: "white" }} href="https://material-ui.com/" target="_blank" rel="noreferrer">
                        Material-UI <LaunchIcon className={classes.icon} />
                    </a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
