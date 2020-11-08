import AboutContentRow from '../AboutContentRow/AboutContentRow'
import { aboutData } from '../../data/profileData'
import './About.css'

const About = () => {
  
  return (
    <section id='about' className='About'>
      <h3 className='About__header'>About Me</h3>
      {aboutData.map(( data, i ) => 
        <AboutContentRow 
          key={i} 
          flexDirection={i % 2 !== 0 ? '' : 'reverse'} 
          {...data} 
        />)}
    </section>
  )
}

export default About