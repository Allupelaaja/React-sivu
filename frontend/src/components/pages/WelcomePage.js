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
      float: 'left',
      paddingBottom: '2%',
      paddingRight: '2%'
    },
    img: {
      display: 'block',
      margin: 'auto',
    },
    picText: {
      paddingTop: '5px',
      display: 'flex',
      margin: 'auto',
      paddingRight: '25px'
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
          <Typography>My skills include ...</Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare elementum nunc, a sollicitudin nunc consequat a. Etiam nec tincidunt libero. Pellentesque commodo ipsum luctus vulputate bibendum. Maecenas ac nunc erat. Sed non lectus nisi. Nulla felis lorem, porttitor in porttitor in, viverra sed sapien. Morbi condimentum finibus nisi, id vestibulum lectus condimentum sed. Mauris tristique placerat libero ac fringilla. Sed pharetra ipsum vitae lectus volutpat, et porttitor diam laoreet. Sed eget diam nunc. Morbi venenatis, quam quis venenatis auctor, odio est mollis nibh, eu lacinia nisl diam eu enim. Fusce lacinia ex vitae risus viverra finibus. Pellentesque sagittis lectus mattis, gravida nibh at, imperdiet tellus. Integer ornare erat sed elit aliquam, ut tempus nibh ultrices. Vestibulum varius varius malesuada.

            In hac habitasse platea dictumst. Cras molestie sit amet est eget sagittis. In a nisl vitae mauris scelerisque convallis. Aliquam porttitor malesuada velit, quis posuere magna maximus sit amet. Vivamus blandit velit magna, quis fringilla magna malesuada quis. Proin condimentum maximus sapien. Sed eget porta odio. Nulla cursus metus vel est eleifend, ultrices ultricies nisl dapibus. Proin porta enim bibendum eros rhoncus sollicitudin. Vivamus vitae arcu et enim condimentum sollicitudin in id lectus. Vivamus metus massa, imperdiet et lectus nec, ultricies varius nulla. Cras porta elit quis est iaculis, vitae venenatis erat posuere. Cras finibus eget nulla vel hendrerit. Nullam et diam orci. Etiam finibus pulvinar est sed tincidunt.

            Praesent consequat efficitur nunc id viverra. Duis in mi lectus. In ut lobortis urna. Maecenas nisi mauris, consequat vitae purus ut, convallis accumsan erat. Sed accumsan interdum suscipit. Praesent gravida viverra urna et porta. Nullam dictum, sem nec posuere consequat, nibh dolor sollicitudin metus, sit amet consequat urna ipsum vel ex. Suspendisse vitae auctor mauris. In tincidunt ullamcorper est a dignissim. Nunc pharetra varius fermentum.

            Mauris nec ex est. Nunc luctus nec enim ac interdum. Vestibulum ligula enim, semper ut quam sit amet, suscipit tincidunt odio. Morbi in nisl tempus, posuere eros nec, egestas risus. Praesent ac leo quis arcu laoreet accumsan. Cras ullamcorper rhoncus tincidunt. Aliquam feugiat lacus non enim congue, eget tincidunt lectus imperdiet. Donec congue ante et mauris egestas, vel imperdiet nunc posuere. Suspendisse potenti. Vivamus velit purus, fermentum sit amet urna a, elementum semper justo. Morbi sagittis, metus at faucibus ullamcorper, ante odio gravida urna, in placerat dolor sapien accumsan ipsum. Etiam scelerisque vulputate odio suscipit fermentum. Maecenas congue arcu eu sem efficitur, nec elementum tortor mattis. Duis mauris est, malesuada et sodales at, laoreet non est. Fusce sagittis suscipit urna quis gravida. Phasellus et erat vestibulum massa egestas auctor ut eu sapien.

            Nullam in vehicula leo, ultrices suscipit tortor. Sed lacinia tellus lacus, id sodales nulla imperdiet a. Quisque bibendum tincidunt lacus, ut blandit turpis. Maecenas congue ex lorem, nec dapibus leo ornare ac. Curabitur gravida nibh ut nibh feugiat, id feugiat augue consectetur. Donec at finibus tortor. Praesent et porttitor erat. Praesent varius turpis ac velit posuere cursus. Sed odio mi, vulputate eu pellentesque a, egestas ac justo. Sed lobortis pellentesque lacus non lobortis. Nunc dictum, sem ac pellentesque vulputate, arcu nisi posuere mi, at vehicula nulla arcu id velit. Aliquam sagittis ante egestas rhoncus lobortis. Suspendisse potenti.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
