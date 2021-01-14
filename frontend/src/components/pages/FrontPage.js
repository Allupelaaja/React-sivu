import React from 'react'

//Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  pageText: {
    textAlign: 'justify'
  },
}));

const FrontPage = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.header}>List of projects</h1>
      <p>test text</p>
    </div>
  )
}

export default FrontPage;
