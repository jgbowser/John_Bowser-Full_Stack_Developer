import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import './AboutContentRow.css'

const AboutContentRow = ({ content, img, imgAltText, animatedDirection }) => {
  
  return (
    <VisibilitySensor partialVisibility offset={{bottom: 200}}>
      {({ isVisible }) => (
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? 'translateX(0)'
              : `translateX(${animatedDirection === 'right' ? '10px' : '-10px'})`
          }}  
        >
          {(props) => (
          <div className='AboutContentRow' style={{...props}}>
          {img && <div className='row_image_container'>
              <img className='row_image' src={img} alt={imgAltText} />
            </div>}
          <div className='row_content'>
            <p>{content}</p>
          </div>
        </div>
          )}
      </Spring>
      )}
    </VisibilitySensor>
  )
}

export default AboutContentRow