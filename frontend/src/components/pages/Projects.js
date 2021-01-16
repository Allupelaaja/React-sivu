import React from 'react'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

const Projects = () => {
  const customTheme = useTheme()
  const useStyles = makeStyles((theme) => ({
    header: {
      textAlign: 'center'
    },
    pageText: {
      textAlign: 'justify'
    },
  }))

  const classes = useStyles()

  return (
    <div>
      <Typography variant='h4' className={classes.header}>List of projects</Typography>
      <br/>
      <Typography variant='h5'>Project 1</Typography>
      <Typography>Project 1 text here</Typography>
      <br/>
      <Typography variant='h5'>Project 2</Typography>
      <Typography>Project 2 text here</Typography>
      <br/>
      <Typography variant='h5'>Project 3</Typography>
      <Typography>Project 3 text here</Typography>
      <br/>
      <Typography variant='h5'>Project 4</Typography>
      <Typography>Project 4 text here</Typography>
    </div>
  )
}

export default Projects
