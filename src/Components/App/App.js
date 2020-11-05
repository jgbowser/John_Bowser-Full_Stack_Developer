import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import About from '../About/About'
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
          <About />
        </div>
      </main>

    </div>
  )
}

export default App;
