import React, { useState } from 'react'

//Core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center'
  },
  pageText: {
    textAlign: 'justify'
  },
  page: {
    width: '75%',
    margin: '0 auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius: '25px',
    backgroundColor: 'white',
  },
  backgroundPage: {
    backgroundColor: 'lightgrey',
    position: 'absolute',
    width: '100%',
    height: '-webkit-fill-available',
  },
}));

const FrontPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundPage}>
      <div className={classes.page}>
        <h1 className={classes.header}>List of projects</h1>
        <p>test text</p>
      </div>
    </div>
  )
}

export default FrontPage;
