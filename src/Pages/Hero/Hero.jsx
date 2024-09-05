import React from 'react'
import './Hero.css'
import Navbar from '../../Components/Navbar/Navbar'
import HeadingWithText from '../../Components/HeadingText/HeadingWithText'
import SocialIcons from '../../Components/Socialicons/SocialIcons'
import ButtonWithIcon from '../../Components/ButtonWIthIcon/ButtonWithIcon'
import arrowIcon from '../../assets/uil_arrow-up.png'

const Hero = () => {
  return (
    <div className='container' id="home-section">
      <Navbar />
      <section className='hero' >
        <div className="hero-content">
          <HeadingWithText
            headingText="Amazing website creation with Appniche agency"
            paraText="Help you to build a website company that is modern, user-friendly, has a good CEO, and clean design."
            textContainerClass='hero-content'
            headingClass='heading'
            paraClass='para'
          />
          <div className="cta-buttons">
            <ButtonWithIcon text="Contact Us" icon={arrowIcon} />
            <div className="social-icons">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero