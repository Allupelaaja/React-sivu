//Image
import propertyImg from '../../resources/img/tonttisuunnitelma.JPG'
import blackjackImg from '../../resources/img/BlackJaakko.jpg'

const tabs = [
    {
      year: "2017",
      contents: [
        {
          text: "Unity-game",
          desc: "This was my first programming project. A small video game set in a school. Most of the art of the game was made by me.",
          link: "https://github.com/Allupelaaja/TINNICALE",
          tech: [
            "C#"
          ],
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
          ],
          link: "https://gitlab.com/Allupelaaja/ravintola--webprojekti",
          desc: "A simple webpage for making food orders"
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
          ],
          link: "https://gitlab.com/Allupelaaja/tontinsuunnittelu",
          desc: "A Java program for designing your own properties (garden, house location etc.)",
          img: [propertyImg]
        },
        {
          text: "Event rating website",
          tech: [
            "JavaScript", "HTML", "CSS", "SQL", "REST"
          ],
          link: "https://gitlab.com/Allupelaaja/ruokarater",
          desc: "A website for giving ratings to different events."
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
          ],
          link: "https://gitlab.com/jukkakot/black-jaakko",
          desc: "A mobile blackjack game.",
          img: [blackjackImg]
        },
        {
          text: "'Insertradar' website for company",
          tech: [
            "JavaScript/React.js", "Node.js", "HTML", "CSS", "NoSQL", "REST", "Nektion"
          ],
          desc: "A website for a company, which calculates the costs of adding different inserts inside magazines. The calculations were made using different variables such as weight, thickness etc."
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
          ],
          desc: "My personal website for showcasing information about myself and my completed courses/projects.",
          link: "https://github.com/Allupelaaja/React-sivu",
        },
        {
          text: "Timetables app",
          tech: [
            "JavaScript/React.js", "Redux", "HTML", "CSS", "GraphQL", "REST"
          ],
          desc: "A timetables app for showing timetables between an address of your choosing and Maria 01",
          link: "https://allupelaaja.github.io/tt-app/",
        },
      ],
    },
  ]

  export default tabs