import ProjectSlider from '../ProjectSlider/ProjectSlider'
import './Projects.css'

const Projects = () => {
  return (
    <section id='projects' className='Projects'>
      <h3 className='Projects__header'>Projects</h3>
      <ProjectSlider />
    </section>
  )
}

export default Projects