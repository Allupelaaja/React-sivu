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
            backgroundColor: theme.palette.primary.main,
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            display: 'flex',
        },
        text: {
            paddingLeft: '15px'
        }
    }))

    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Typography className={classes.text}>Made by Aleksi Heikkilä 2021</Typography>
            <Typography className={classes.text}>Made with React using <a style={{color: "white"}} href="https://material-ui.com/" target="_blank" rel="noreferrer">Material-UI</a></Typography><LaunchIcon />
        </div>
    )
}

export default Footer
