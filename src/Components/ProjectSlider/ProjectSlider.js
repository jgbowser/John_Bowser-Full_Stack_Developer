import ProjectScreen from '../ProjectScreen/ProjectScreen'
import { projectData } from '../../data/profileData'
import './ProjectSlider.css'

const ProjectSlider = () => {
  return (
    <div className='ProjectSlider'>
      <ProjectScreen images={projectData.discCaddy.images} content={projectData.discCaddy.content} />
    </div>
  )
}

export default ProjectSlider