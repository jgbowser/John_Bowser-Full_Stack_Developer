import './Hero.css'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
  const slider = useSpring({ opacity: 1, from: { opacity: 0}})

  return (
    <section className="Hero">
      <animated.div className='Hero__background' style={slider}>
        <div className='Hero__content'>
          <h1 className='Hero__title'>John Bowser</h1>
          <h2 className='Hero__subtitle'>Full Stack Developer</h2>
        </div>
      </animated.div>
    </section>
  )
}

export default Hero
