import React from 'react'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

//Image
import personalImg from '../../resources/img/websitekuva.jpg'

const WelcomePage = () => {
  const customTheme = useTheme()
  const useStyles = makeStyles((theme) => ({
    center: {
      textAlign: 'center'
    },
    pageText: {
      textAlign: 'justify',
    },
    pageContents: {
      padding: '3%'
    },
    img: {
      float: 'left',
      paddingBottom: '5%',
      paddingRight: '5%'
    },
  }))

  const classes = useStyles()

  return (
    <div>
      <Typography variant='h4' className={classes.center}>About</Typography>
      <div className={classes.pageContents}>
        <div className={classes.img}>
          <img 
          src={personalImg}
          alt="Image of me"
          width="200"
          />
          <p className={classes.center}>Hey! It's me!</p>
        </div>
        <Typography className={classes.pageText}>
        <h2>Introduction</h2>
        <p>Hello and welcome to my website! 
        My name is Aleksi Heikkilä and I am a student in the Metropolia school of applied sciences. 
        I am currently finishing my final year of studies in 
        'Information and Communication Technology, Bachelor's Degree'. 
        On this webpage you can find a listing of my completed courses and projects. 
        I have also included links to my Github/Gitlab, CV and an example API I have made for the list of my courses. 
        I have created this website using React.js and the Material-ui framework.</p>
        <h2>Info about me</h2>
        <p>I am a 24-year old programmer from Helsinki, Finland. In addition to programming, 
          I enjoy watching movies, playing video games and hanging out with my friends.</p>
        </Typography>
      </div>
    </div>
  )
}

export default WelcomePage
