import profileImg from '../images/profile_512.jpg'
import topShot from '../images/topshot_512.jpg'
import marathon from '../images/marathon_512.jpg'
import discCaddy1 from '../images/disc_caddy/disc_caddy_1.jpg'
import discCaddy2 from '../images/disc_caddy/disc_caddy_2.jpg'
import discCaddy3 from '../images/disc_caddy/disc_caddy_3.jpg'
import spanish1 from '../images/spanish_srs/sr_1.jpg'
import spanish2 from '../images/spanish_srs/sr_2.jpg'
import spanish3 from '../images/spanish_srs/sr_3.jpg'
import zippal1 from '../images/zip_pal/zip_pal_1.jpg'
import zippal2 from '../images/zip_pal/zip_pal_2.jpg'
import zippal3 from '../images/zip_pal/zip_pal_3.jpg'

export const aboutData = [
    {
      img: profileImg,
      imgAltText: 'John Bowser Sitting on a large boulder',
      content: [
        `I am a Full Stack Developer located in Salt Lake City, UT.`,
        'I enjoy tackling difficult problems, creating applications that improve the user\'s quality of life, learning new techniques and skills, and surrounding myself with other developers that are passionate about what they do.'
      ],
      animatedDirection: 'right',
    },
    {
      img: topShot,
      imgAltText: 'top shot of macbook with code, headphones, and a notebox with wireframe sketches',
      content: [
        'I love working with JavaScript, React, Node.js, Express, and PostgreSQL.',
        'I jump at the opportunity to learn new things and improve my skills.',
        'I think the programming community\'s willingness to share knowledge is invaluable; I strive to exemplify that mindset by sharing my knowledge with others and learning from others any chance that I get.'
      ],
      animatedDirection: 'left',
    },
    {
      img: marathon,
      imgAltText: 'John and his girlfriend Kasie at the Indianapolis Marathon',
      content: [
        'Outside of programming, I have many interests.',
        'I love spending time hiking with my girlfriend and practicing landscape photography.',
        'I love traveling and seeing new places.',
        'I am an avid reader who never seems to have enough space on my bookshelf for new books.'
      ],
      animatedDirection: 'right',
    },
  ]

  export const projectData = [
    {
      id: 1,
      images: [
        { id: 1, url: discCaddy1 },
        { id: 2, url: discCaddy2 },
        { id: 3, url: discCaddy3 },
      ],
      content: {
        title: 'DiscCaddy',
        desc: 'DiscCaddy is your companion on the course. With DiscCaddy you can: keep track of your round by creating a scorecard, add the discs you own to your DiscCaddy bag, and get a recommended disc based on your selected shot type and the discs you own. DiscCaddy helps you think about shot shapes and disc flight characteristics. It also allows you to view all your previous scorecards to track your scores over time.',
        stack: {
          client: 'JavaScript, React, React Router, Context, Jest',
          server: 'Node.js, Express.js, bcryptjs, PostgreSQL, Mocha, Chai'
        },
        links: {
          client: 'https://github.com/jgbowser/DiscCaddy-client',
          server: 'https://github.com/jgbowser/DiscCaddy-server',
          live: 'https://disccaddy.vercel.app/'
        }
      }
    },
    {
      id: 2,
      images: [
        { id: 1, url: spanish1 },
        { id: 2, url: spanish2 },
        { id: 3, url: spanish3 },
      ],
      content: {
        title: 'Spanish SRS',
        desc: 'Spanish SRS is a language learning app that utilizes the spaced repetition technique to provide an optimized learning experience for the user. The app uses a linked list on the back end to handle reorganizing the list of words based on correct or incorrect guesses. Users can see an overall score as well as  their correct and incorrect guesses for each word. The back end is designed to scale, making the addition of new words and even languages simple.',
        stack: {
          client: 'JavaScript, React, React Router, Context, Cypress',
          server: 'Node.js, Express.js, bcryptjs, PostgreSQL, Mocha, Chai'
        },
        links: {
          client: 'https://github.com/jgbowser/SR-Client-johnb-tiff',
          server: 'https://github.com/jgbowser/SR-API-johnb-tiff',
          live: 'https://language-spaced-repetition.vercel.app/register',
        }
      }
    },
    {
      id: 3,
      images: [
        { id: 1, url: zippal1 },
        { id: 2, url: zippal2 },
        { id: 3, url: zippal3 },
      ],
      content: {
        title: 'Zip Pal',
        desc: 'Zip Pal is a pen pal app developed to help users escape the isolation of quarantine during the COVID-19 pandemic. The app aims to replicate a real pen pal experience. To accomplish this, there is a 6-hour delay before a sent message can be read, users take turns sending messages, and users are given random pen pals and decide to initiate a conversation based on a brief bio. These constraints reduce the pressure of immediate responses and promote long-form, thoughtful messages.',
        stack: {
          client: 'JavaScript, React, React Router, Context, Jest, Enzyme',
          server: 'Node.js, Express.js, bcryptjs, xss, PostgreSQL, Mocha, Chai'
        },
        links: {
          client: 'https://github.com/jgbowser/zippal-client',
          server: 'https://github.com/jgbowser/zippal-api',
          live: 'https://zippals.vercel.app/',
        }
      }
    ,}
  ]


