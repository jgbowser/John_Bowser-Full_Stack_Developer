import { useState } from 'react'
import { Link } from 'react-router-dom'
import './BlogHeader.css'

const BlogHeader = () => {
  const [ showNav, setShowNav ] = useState(false)

  function toggleNav() {
    setShowNav(!showNav)
  }

  return (
    <div className='BlogHeader'>
      <span className='BlogHeader__title'>
        John Bowser's Blog
        <span 
          className={`BlogHeader__burger ${showNav ? 'show' : ''}`}
          onClick={toggleNav}
        ></span>
      </span>
      <nav className={`BlogHeader__nav ${showNav ? 'show' : ''}`}>
        <ul className='BlogHeader__nav-list'>
          <li className='BlogHeader__nav-list-item'>
            <Link className="BlogHeader__nav-link" to='/'>
              Portfolio
            </Link>
          </li>
          <li className='BlogHeader__nav-list-item'>
            <Link className="BlogHeader__nav-link" to='/blog'>
              Blog Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BlogHeader