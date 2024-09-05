import './Projects.css'
import HeadingWithText from '../HeadingText/HeadingWithText'
import ButtonWithIcon from '../ButtonWIthIcon/ButtonWithIcon'
import arrowIcon from '../../assets/uil_arrow-up.png'

import projectData from '../../Data/projectData'

const Projects = () => {
  return (
    <>
      <div>

        <div>
          <HeadingWithText
            headingText="Our Projects"
            paraText="help you to build website App company that is modern, user friendly, user friendly, good CEO, and Clean design"

            textContainerClass='project-text'
            headingClass='project-heading'
            paraClass='project-para'
          />
        </div>

        <div className='seeProject-btn'>
          <ButtonWithIcon
            text="All Projects"
            icon={arrowIcon}
          />
        </div>
      
        <div className="project-container"  id="project-section">
          {projectData.map((data) => (
            <div key={data.id}>
              <div className="project-card">
                <div className="project-info">
                  <span>{data.span}</span>
                  <h1>{data.heading}</h1>
                  <p>{data.para}</p>
                </div>
                <div className="project-img">
                  <img className='arrow-img' src={data.arrowImage} alt="" />
                  <img className={data.proImgclass} src={data.projectImage} alt="" />
                </div>
              </div>
              <div className='project-info2'>
                <h1>{data.heading2}</h1>
                <p>{data.para2}</p>
              </div>
              {(data.id===1 || data.id===2 ? <hr className='project-row'/> : '') }
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects