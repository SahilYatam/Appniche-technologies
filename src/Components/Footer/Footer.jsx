import Logo from '../LogoFolder/Logo'
import SocialIcons from '../Socialicons/SocialIcons'
import twitter from '../../assets/twitter.png'

import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div id='logo'>
          <Logo/>
          <p>Companies that can help you in developing your company for the future</p>
        </div>

        <div className='footer-services'>
          <p id='services'>Services</p>
          <p>Web Dev</p>
          <p>UI/UX Designer</p>
          <p>Branding</p>
          <p>App Dev</p>
        </div>

        <div className='footer-services'>
          <p id='contact'>Contact Us</p>
          <p>+91 7030761682</p>
          <p>+91 9152869720</p>
          <p>+91 9987299482</p>
        </div>
      </div>

      <div className='footer-container2'>
        <div className='copyright'><p>© 2024 Devanshu umbare. All rights reserved.</p></div>

        <div className='termsCoditions'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>

        <div className='social-media-png'>
          <SocialIcons/>
          <img id='twitterImg' src={twitter} alt="" />
        </div>

      </div>

    </>
  )
}

export default Footer