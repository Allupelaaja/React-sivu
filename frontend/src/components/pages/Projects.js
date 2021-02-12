import React from 'react'
import PropTypes from 'prop-types'

//Core
import { makeStyles, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
          {children}
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
      root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
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
      <Paper>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          {tabs.map((item) => (
            <Tab key={item.year} label={item.year} />
          ))}
        </Tabs>
      </Paper>
      {tabs.map((item) => (
        <TabPanel key={tabs.indexOf(item)} value={value} index={tabs.indexOf(item)}>
          <div className={classes.root}>
            {item.contents.map((entry) => (
              <Accordion key={entry.text}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography className={classes.heading}>{entry.text}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    {/* Show link if it exists */}
                    {entry.link !== undefined ?
                      <div>
                        <a
                          style={{ color: "white" }}
                          href={entry.link}
                          target="_blank"
                          rel="noreferrer">
                          <Typography>Link to project Git</Typography>
                        </a>
                        <br />
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
                        <Typography>{entry.desc}</Typography>
                      </div>
                      : <></>}
                    <Typography>Tech used:</Typography>
                    <ul>
                      {entry.tech.map((tech) => (
                        <li key={tech}><Typography>{tech}</Typography></li>
                      ))}
                    </ul>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </TabPanel>
      ))}
    </div>
  )
}

export default Projects
