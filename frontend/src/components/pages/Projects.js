import React from 'react'
import PropTypes from 'prop-types';

//Core
import { makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

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
};

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      year: "2017",
      contents: [
        {
          text: "Unity-game",
          tech: [
            "C#"
          ]
        }
      ],
    },
    {
      year: "2018",
      contents: [
        {
          text: "Food ordering service",
          tech: [
            "JavaScript", "HTML", "CSS", "SQL", "PHP"
          ]
        }
      ],
    },
    {
      year: "2019",
      contents: [
        {
          text: "Property designer program",
          tech: [
            "Java", "SQL", "Jenkins", "Agilefant"
          ]
        },
        {
          text: "Event rating website",
          tech: [
            "JavaScript", "HTML", "CSS", "SQL", "REST"
          ]
        }
      ],
    },
    {
      year: "2020",
      contents: [
        {
          text: "Blackjack mobile game",
          tech: [
            "Java", "XML", "Androidstudio", "REST"
          ]
        },
        {
          text: "'Insertradar' website for company",
          tech: [
            "JavaScript/React.js", "Node.js", "HTML", "CSS", "NoSQL", "REST", "Nektion"
          ]
        }
      ],
    },
    {
      year: "2021",
      contents: [
        {
          text: "Personal website",
          tech: [
            "JavaScript/React.js", "Node.js", "HTML", "CSS", "NoSQL", "REST"
          ]
        },
      ],
    },
  ]

  return (
    <div>
      <Typography variant='h4' className={classes.header}>List of projects</Typography>
      <br />
      <Paper className={classes.root}>
        <Tabs
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
                <p>Description:</p>
                <p>description here</p>
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

      {/* <Typography variant='h5'>Project 1</Typography>
      <Typography>Project 1 text here</Typography>
      <br/>
      <Typography variant='h5'>Project 2</Typography>
      <Typography>Project 2 text here</Typography>
      <br/>
      <Typography variant='h5'>Project 3</Typography>
      <Typography>Project 3 text here</Typography>
      <br/>
      <Typography variant='h5'>Project 4</Typography>
      <Typography>Project 4 text here</Typography> */}
    </div>
  )
}

export default Projects
