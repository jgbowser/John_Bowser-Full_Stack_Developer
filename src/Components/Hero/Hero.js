import './Hero.css'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0}, delay: 250, config: {duration: 250}})
  const fromTop = useSpring({
    transform: 'translate3d(0%,0,0)',
    opacity: 1,
    from: { transform: 'translate3d(0,-100%,0)', opacity: 0},
    delay: 500,
    config: { duration: 300 }
  })
  const fromBottom = useSpring({
    transform: 'translate3d(0%,0,0)',
    opacity: 1,
    from: { transform: 'translate3d(0,100%,0)', opacity: 0},
    delay: 800,
    config: { duration: 300 }

  })
  return (
    <section className="Hero">
      <animated.div className='Hero__background' style={fadeIn}>
        <div className='Hero__content'>
          <animated.h1 className='Hero__title' style={fromTop}>John Bowser</animated.h1>
          <animated.h2 className='Hero__subtitle' style={fromBottom}>Full Stack Developer</animated.h2>
        </div>
      </animated.div>
    </section>
  )
}

export default Hero
