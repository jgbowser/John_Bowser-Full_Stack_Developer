import { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProjectScreen.css'

const ProjectScreen = ({ images, content, nextProjectHandler }) => {
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
        <h4 className='content__title'>
          {content.title}
        </h4>
        <div className='content__links_container'>
          <a className='content__links' href={content.links.live} target='_blank' rel='noreferrer'>Live App</a>
          <a className='content__links' href={content.links.client} target='_blank' rel='noreferrer'>Client Repo</a>
          <a className='content__links' href={content.links.server} target='_blank' rel='noreferrer'>API Repo</a>
        </div>
        <div className='content__desc_container'>
          <p className='content__desc'>{content.desc}</p>
        </div>
        <div className='content__stack'>
          <p className='content__stack_header'>Tech Stack</p>
          <p><span className='content__stack_list_title'>Front End:</span> {content.stack.client}</p>
          <p><span className='content__stack_list_title'>Back End:</span> {content.stack.server}</p>
        </div>
        <button type='button' className='content__next' onClick={nextProjectHandler}>Next <FontAwesomeIcon icon='forward' /></button>
      </div>
    </div>
  )
}

export default ProjectScreen