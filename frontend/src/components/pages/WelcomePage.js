import React from 'react'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

//Icons
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

//Image
import personalImg from '../../resources/img/websitekuva.jpg'

const WelcomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const customTheme = useTheme()
  // eslint-disable-next-line no-unused-vars
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
    imgDiv: {
      [theme.breakpoints.up('sm')]: {
        float: 'left',
        paddingBottom: '2%',
        paddingRight: '2%'
      },
    },
    img: {
      display: 'block',
      margin: 'auto',
    },
    picText: {
      display: 'flex',
      margin: 'auto',
      paddingTop: '5px',
      [theme.breakpoints.up('sm')]: {
        paddingRight: '25px',
      },
    },
    icon: {
      paddingRight: '5px'
    },
  }))

  const classes = useStyles()

  return (
    <div>
      <Typography variant='h2' className={classes.center}>About</Typography>
      <div className={classes.pageContents}>
        <div className={classes.imgDiv}>
          <img
            className={classes.img}
            src={personalImg}
            alt="Image of me"
            width="200"
          />
          <div className={classes.picText}>
            <EmailIcon className={classes.icon} />
            <Typography float="center">aleksiheikkila96@hotmail.com</Typography>
          </div>
          <div className={classes.picText}>
            <PhoneIcon className={classes.icon} />
            <Typography align="center">+358 44 217 1161</Typography>
          </div>
        </div>
        <div className={classes.pageText}>
          <br />
          <Typography variant='h4'>Introduction</Typography>
          <Typography>Hello and welcome to my website!
          My name is Aleksi Heikkilä and I am a student in the Metropolia school of applied sciences.
          I am currently finishing my final year of studies in
          &apos;Information and Communication Technology, Bachelor&apos;s Degree&apos;.
          On this webpage you can find a listing of my completed courses and projects.
          I have also included links to my Github/Gitlab, CV and an example API I have made for the list of my courses.
          I have created this website using React.js and the Material-ui framework.</Typography>
          <br />
          <Typography variant='h4'>Info about me</Typography>
          <Typography>I am a 24-year old programmer from Helsinki, Finland. In addition to programming,
          I enjoy watching movies, playing video games and hanging out with my friends.</Typography>
          <br />
          <Typography variant='h4'>Skills</Typography>
          <Typography>
            I am skilled in a multitude of things, some of which include different programming languages, databases and software.
            I have had the most practice in Java, SQL, Html, CSS and JavaScript. During my studies I have also used C/C++/C# and PHP.
          </Typography>
          <br />
          <Typography>
            On the software front, I have experience with several IDE&apos;s such as Eclipse, Visual Studio and NetBeans.
            I am also very experienced in the use of the Windows operating system.
            I have dabbled in the use of Linux as well.
            I have probably used Git in every project I have been part of to date.
            When using Git I always try to use descriptive commit messages to help with the understanding of my code.
          </Typography>
          <br />
          <Typography>
            Because of my frequent use of computers in my free time, my problem-solving skills have also improved considerably during the years.
            Googling solutions to all kinds of problems is a daily occurrence to me and I almost always find what is needed.
          </Typography>
          <br />
          <Typography>
            Unrelated to programming, I can use the following languages in order from best to worst: Finnish &gt; English &gt; Swedish &gt; German.
          </Typography>
          <br />
          <Typography>
            My social skills are pretty good in my opinion, and I have plenty of experience in working with groups because of several school group projects.
            I have been described as friendly and easily approachable and I always enjoy meeting new people.
            I usually prefer working in groups, but working alone is not foreign to me.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
