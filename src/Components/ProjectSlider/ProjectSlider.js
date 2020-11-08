import { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import ProjectScreen from '../ProjectScreen/ProjectScreen'
import { projectData } from '../../data/profileData'
import './ProjectSlider.css'

const ProjectSlider = () => {
  // const screens = projectData.map(p => <ProjectScreen images={p.images} content={p.content} />)
  const [ index, set ] = useState(0)
  const screenTransitions = useTransition(projectData[index], item => item.id, {
    from: { opcaity: 0, transform: 'translate3d(100%, 0, 0', display: 'none' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0', display: 'block' },
    leave: { opacity: 0 },
    config: { ...config.stiff, clamp: true },
  })

  const nextProject = () => {
    set(projectData.length - 1 === index ? 0 : index + 1)
  }
  return (
    <div className='ProjectSlider'>
      {screenTransitions.map(({ item, props, key }) => (
        <animated.div
          className='screen_wrapper'
          key={key}
          style={props}
        >
          <ProjectScreen images={item.images} content={item.content} nextProjectHandler={nextProject} />
        </animated.div>
      ))}
    </div>
  )
}

export default ProjectSlider