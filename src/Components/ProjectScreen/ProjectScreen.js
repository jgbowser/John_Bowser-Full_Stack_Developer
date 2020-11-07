import { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProjectScreen.css'

const ProjectScreen = ({ images, content }) => {
  const [ index, setIndex ] = useState(0)
  const backgroundTransitions = useTransition(images[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses, 
  })

  const nextImage = () => {
    setIndex(images.length - 1 === index ? 0 : index + 1)
  }

  const prevImage = () => {
    setIndex(index === 0 ? (images.length - 1) : index - 1)
  }

  return (
    <div className='ProjectScreen'>
      
      {backgroundTransitions.map(({ item, props, key }) => (
        <animated.div 
          key={key} 
          className='ProjectScreen__image'
          style={{...props, backgroundImage: `url(${item.url})`}}
        >
          <button 
            className='ProjectScreen__icon'
            onClick={prevImage}
            type='button'
          >
            <FontAwesomeIcon icon='arrow-circle-left'/>
          </button>
          <button 
            className='ProjectScreen__icon'
            onClick={nextImage}
            type='button'
          >
            <FontAwesomeIcon icon='arrow-circle-right'/>
          </button>
        </animated.div>
      ))}
      <div className='ProjectScreen__content'>
        <h4>{content.title}</h4>
      </div>
    </div>
  )
}

export default ProjectScreen