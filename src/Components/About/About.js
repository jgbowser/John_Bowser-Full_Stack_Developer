import AboutContentRow from '../AboutContentRow/AboutContentRow'
import profileImg from '../../images/profile_512.jpg'
import './About.css'

const About = () => {
  return (
    <section id='about' className='About'>
      <h3 className='About__header'>About Me</h3>
      <AboutContentRow 
        img={profileImg} 
        imgAltText='John Bowser Sitting on a large boulder' 
        content='Hello World'
        animatedDirection='left'
      />
    </section>
  )
}

export default About