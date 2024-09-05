import React from 'react'
import lineImage from '../../assets/line2.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import googlePng from '../../assets/google.png'
import './ScrollingLogos.css'

const ScrollingLogos = () => {
  return (
    <>
      <div className="line-img">
        <img src={lineImage} alt="" />
      </div>
      <div className='rectangle-one'></div>
      <div className='rectagnle-two'>
        <div className="scrolling">
          <span className='rectagnle-span'><img className='cart-logo1' src={logo1} alt="" /> <p className='rectagnle-p'>MStore.Id</p></span>
          <span className='rectagnle-span'><img className='cart-logo' src={logo2} alt="" /> <p className='rectagnle-p'>MStore.Id</p></span>
          <span className='rectagnle-span'><img className='cart-logo' src={logo3} alt="" /> <p className='rectagnle-p'>MStore.Id</p></span>
          <span className='rectagnle-span'><img className='googleLogo' src={googlePng} alt="" /></span>
          <span className='rectagnle-span'><img className='cart-logo' src={logo3} alt="" /> <p className='rectagnle-p'>MStore.Id</p></span>
          <span className='rectagnle-span'><img className='googleLogo' src={googlePng} alt="" /></span>
          <span className='rectagnle-span'><img className='cart-logo1' src={logo1} alt="" /> <p className='rectagnle-p'>MStore.Id</p></span>
        </div>
      </div>
    </>
  )
}

export default ScrollingLogos