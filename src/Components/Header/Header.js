import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [ showNav, setShowNav ] = useState(false)

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

  function toggleNav(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      setShowNav(!showNav)
    } else if(e.type === 'click'){
      setShowNav(!showNav)
    }
  }

  return (
    <animated.div className='Header__container' style={fadeIn}>
      <div className='Header__title'>
        <animated.p className='Header__logo' style={fadeLogo}>
          JGB
        </animated.p>
      </div>
        <div 
          className='Header__burger-container'
          onClick={toggleNav}
          onKeyDown={(e) => toggleNav(e)}
          tabIndex='0'
        >
          <span className={`Header__burger ${showNav ? 'show' : ''}`}></span>
        </div>
      <nav className={`Header__links ${showNav ? 'show' : ''}`}>
        <ul>
          <animated.li style={fadeNav}>
            <Link 
              to='about'
              className={`${showNav ? 'show' : ''}`}
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              tabIndex='0'
              onClick={toggleNav}
              >
              About
            </Link>
          </animated.li>
          <animated.li style={fadeNav}>
            <Link 
              to='projects'
              className={`${showNav ? 'show' : ''}`}
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              tabIndex='0'
              onClick={toggleNav}
            >
              Projects
            </Link>
          </animated.li>
          <animated.li style={fadeNav}>
            <Link 
              to='contact'
              className={`${showNav ? 'show' : ''}`}
              activeClass='active'
              spy={true}
              smooth={true}
              duration={500}
              tabIndex='0'
              onClick={toggleNav}
            >
              Contact
            </Link>
          </animated.li>
          <animated.li style={fadeNav}>
            <RouterLink
              to='/blog'
              className={`${showNav ? 'show' : ''}`}
            >
              Blog
            </RouterLink>
          </animated.li>
        </ul>
      </nav>
    </animated.div>
  )
}

export default Header