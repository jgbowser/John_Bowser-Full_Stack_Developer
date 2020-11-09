import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import { Element } from 'react-scroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faArrowCircleLeft, faForward, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './App.css';

library.add( faArrowCircleLeft, faArrowCircleRight, faForward, faGithub, faLinkedin, faEnvelope )

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <div className='heroWrapper'>
          <Hero />
        </div>
        <div className='aboutWrapper'>
          <Element name='about'>
            <About />
          </Element>
        </div>
        <div className='projectsWrapper'>
          <Element name='projects'>
            <Projects />
          </Element>
        </div>
        <div className='contactWrapper'>
          <Element name='contact'>
            <Contact />
          </Element>
        </div>
      </main>

    </div>
  )
}

export default App;
