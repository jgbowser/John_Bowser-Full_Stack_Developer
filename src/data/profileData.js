import profileImg from '../images/profile_512.jpg'
import topShot from '../images/topshot_512.jpg'
import marathon from '../images/marathon_512.jpg'
import discCaddy1 from '../images/disc_caddy/disc_caddy_1.jpg'
import discCaddy2 from '../images/disc_caddy/disc_caddy_2.jpg'
import discCaddy3 from '../images/disc_caddy/disc_caddy_3.jpg'


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
        'I think the programming community\'s willingness to share knowledge is invaluable and I strive to exemplify that mindset by sharing my knowledge with others, and learning from others any chance that I get.'
      ],
      animatedDirection: 'left',
    },
    {
      img: marathon,
      imgAltText: 'John and his girlfriend Kasie at the Indianapolis Marathon',
      content: [
        'Outside of programming I have many interests.',
        'I love spending time with my girlfriend hiking and practicing landscape photography.',
        'I love traveling and seeing new places.',
        'I am an avid reader who never seems to have enough space on my bookshelf for new books.'
      ],
      animatedDirection: 'right',
    },
  ]

  export const projectData = {
    discCaddy: {
      images: [
        { id: 1, url: discCaddy1 },
        { id: 2, url: discCaddy2 },
        { id: 3, url: discCaddy3 },
      ],
      content: {
        title: 'DiscCaddy',
        desc: 'DiscCaddy is built to be your companion on the course. With DiscCaddy you can: keep track of your round by creating a scorecard, add the discs you own to your DiscCaddy bag, and get a recommended disc based on your selected shot type and the discs you own. DiscCaddy helps you think about shot shapes and disc flight characteristics. It also allows you to view all your previous scorecards to track your scores over time.',
        stack: {
          client: 'JavaScript, React, React Router, Context, Jest',
          server: 'Node.js, Express.js, PostgreSQL'
        },
        links: {
          client: 'https://github.com/jgbowser/DiscCaddy-client',
          server: 'https://github.com/jgbowser/DiscCaddy-server',
          live: 'https://disccaddy.vercel.app/'
        }
      }
    },
    spanish: {},
    zipPal: {}
  }


