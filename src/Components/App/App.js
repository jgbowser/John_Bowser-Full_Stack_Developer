import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import { useSpring, animated } from 'react-spring'
import './App.css';

function App() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 275, config: {duration: 250}})
  return (
    <div className='App'>
      <animated.header style={fadeIn}>
        <Header />
      </animated.header>
      <main>
        <Hero />
      </main>

    </div>
  )
}

export default App;
