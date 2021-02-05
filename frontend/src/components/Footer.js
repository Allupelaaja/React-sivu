import React from 'react'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

//Icons
import LaunchIcon from '@material-ui/icons/Launch'

const Footer = () => {
    const customTheme = useTheme()
    const useStyles = makeStyles((theme) => ({
        page: {
            padding: '5px',
            backgroundColor: customTheme.palette.background.paper,
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        text2: {
            marginRight: 'auto',
            display: 'flex',
            marginLeft: '5px'
        },
        text1: {
            marginLeft: 'auto',
            marginRight: '5px',
        }
    }))

    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Typography className={classes.text1}>Made by Aleksi Heikkilä 2021</Typography>
            <div className={classes.text2}>
                <Typography>Made with React using <a style={{ color: "white" }} href="https://material-ui.com/" target="_blank" rel="noreferrer">Material-UI</a></Typography>
                <LaunchIcon />
            </div>
        </div>
    )
}

export default Footer
