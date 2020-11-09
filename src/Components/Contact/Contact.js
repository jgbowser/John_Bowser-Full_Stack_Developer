import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact' className='Contact'>
      <h3 className='Contact__header'>Contact</h3>
      <p>I am actively looking for new opportunities. <br/><br/> If you are looking for a dedicated and hardworking full stack developer with strong technical skills look no further. <br/><br/>My passion and experience will be a valuable assest to your team.</p>
      <p>Feel free to reach out to me via email or LinkedIn and check out my GitHub</p>
      <div className='Contact__info'>
        <a href='http://www.linkedin.com/in/john-g-bowser' target='_blank' rel='noreferrer' className='Contact__link'><FontAwesomeIcon className='Contact__icon' icon={{prefix: 'fab', iconName: 'linkedin'}} /><span className='link_text'>LinkedIn</span></a>
        <a href='mailto:john.bow7720@gmail.com' className='Contact__link'><FontAwesomeIcon className='Contact__icon' icon='envelope' /><span className='link_text'>Email Me</span></a>
        <a href='https://github.com/jgbowser'  target='_blank' rel='noreferrer' className='Contact__link'><FontAwesomeIcon className='Contact__icon' icon={{prefix: 'fab', iconName: 'github'}} /><span className='link_text'>GitHub</span></a>
      </div> 
    </section>
  )
}

export default Contact