import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import About from '../About/About'
import { Element } from 'react-scroll'
import './App.css';

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
      </main>

    </div>
  )
}

export default App;
