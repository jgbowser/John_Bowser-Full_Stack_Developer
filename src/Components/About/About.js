import AboutContentRow from '../AboutContentRow/AboutContentRow'
import profileImg from '../../images/profile_512.jpg'
import './About.css'

const About = () => {
  const aboutData = [
    {
      img: profileImg,
      imgAltText: 'John Bowser Sitting on a large boulder',
      content: `My name is John Bowser and I am a if you are looking for someone who loves to approach large problems methodically, jumps at the chance to learn something new, and is passionate about lending a helping hand to ensure the team succeeds`,
      animatedDirection: 'right'
    },
  ]
  return (
    <section id='about' className='About'>
      <h3 className='About__header'>About Me</h3>
      {aboutData.map(( data, i ) => <AboutContentRow key={i} {...data} />)}
    </section>
  )
}

export default About