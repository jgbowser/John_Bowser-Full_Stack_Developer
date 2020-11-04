import { useSpring, useChain, animated } from 'react-spring'
import { useRef } from 'react'
import './Header.css'

const Header = () => {

  const logo = [
    {
      id: 1,
      text: 'J'
    },
    {
      id: 2,
      text: 'G'
    },
    {
      id: 3,
      text: 'B'
    }
  ]

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0},
    delay: 900,
  })
  const fadeLogo = useSpring({ 
    opacity: 1,
    delay: 1100, 
    from: { opacity: 0},
  })
  const fadeNav = useSpring({
    opacity: 1,
    delay: 1300,
    from: { opacity: 0 }
  })

  return (
    <animated.div className='Header__container' style={fadeIn}>
      <div className='Header__title'>
        <p>
          <animated.span className='Header__logo' style={fadeLogo}>J</animated.span>
          <animated.span className='Header__logo' style={fadeLogo}>G</animated.span>
          <animated.span className='Header__logo' style={fadeLogo}>B</animated.span>
        </p>
      </div>
      <nav className='Header__links'>
        <ul>
          <animated.li style={fadeNav}><a href='#about'>About</a></animated.li>
          <animated.li style={fadeNav}><a href='#projects'>Projects</a></animated.li>
          <animated.li style={fadeNav}><a href='#contact'>Contact</a></animated.li>
        </ul>
      </nav>
    </animated.div>
  )
}

export default Header