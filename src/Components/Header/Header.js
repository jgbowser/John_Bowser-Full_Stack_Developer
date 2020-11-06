import { useSpring, animated } from 'react-spring'
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0},
    delay: 1100,
  })
  const fadeLogo = useSpring({ 
    opacity: 1,
    delay: 1300, 
    from: { opacity: 0},
  })
  const fadeNav = useSpring({
    opacity: 1,
    delay: 1500,
    from: { opacity: 0 }
  })

  return (
    <animated.div className='Header__container' style={fadeIn}>
      <div className='Header__title'>
        <animated.p className='Header__logo' style={fadeLogo}>
          JGB
        </animated.p>
      </div>
      <nav className='Header__links'>
        <ul>
          <animated.li style={fadeNav}>
            <Link 
              to='about'
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              >
              About
            </Link>
          </animated.li>
          <animated.li style={fadeNav}><Link to='projects'>Projects</Link></animated.li>
          <animated.li style={fadeNav}><Link to='contact'>Contact</Link></animated.li>
        </ul>
      </nav>
    </animated.div>
  )
}

export default Header