import ProjectScreen from '../ProjectScreen/ProjectScreen'
import { projectData } from '../../data/profileData'
import './ProjectSlider.css'

const ProjectSlider = () => {

  const projectComponents = projectData.map(project => <ProjectScreen key={project.id} images={project.images} content={project.content} />)
  return (
    <div className='ProjectSlider'>
    </div>
  )
}

export default ProjectSlider