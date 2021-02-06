import React from 'react'
import PropTypes from 'prop-types'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

//Arrays
import tabs from '../../resources/arrays/tabs.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const customTheme = useTheme()
  // eslint-disable-next-line no-unused-vars
  const useStyles = makeStyles((theme) => ({
    header: {
      textAlign: 'center'
    },
    pageText: {
      textAlign: 'justify'
    },
    image: {
      maxWidth: '450px',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '200px',
      },
    },
  }))

  const classes = useStyles()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div>
      <Typography variant='h4' className={classes.header}>List of projects</Typography>
      <br />
      <Paper className={classes.root}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {tabs.map((item) => (
            <Tab key={item.year} label={item.year} />
          ))}
        </Tabs>
      </Paper>
      {tabs.map((item) => (
        <TabPanel key={tabs.indexOf(item)} value={value} index={tabs.indexOf(item)}>
          {item.contents.map((entry) => (
            <div key={entry}>
              <Typography variant='h5'>{entry.text}</Typography>
              <Typography>
                {/* Show link if it exists */}
                {entry.link !== undefined ?
                  <div>
                    <a
                      style={{ color: "white" }}
                      href={entry.link} 
                      target="_blank"
                      rel="noreferrer">
                      <Typography>Link</Typography>
                    </a>
                  </div>
                  : <></>}
                {/* Show images if they exist */}
                {entry.img !== undefined ?
                  <div>
                    {entry.img.map((singleImg, index) => (
                      <img key={index} className={classes.image}
                        src={singleImg}
                        alt="Image of project"
                      />
                    ))}
                  </div>
                  : <></>}
                {/* Show description if it exists */}
                {entry.desc !== undefined ?
                  <div>
                    <p>{entry.desc}</p>
                  </div>
                  : <></>}
                <p>Tech used:</p>
                <ul>
                  {entry.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Typography>
            </div>
          ))}
        </TabPanel>
      ))}
    </div>
  )
}

export default Projects
