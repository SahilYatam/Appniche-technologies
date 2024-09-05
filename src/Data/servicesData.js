import arrowW from '../assets/arrowW.png'
import websitedev from '../assets/websitedev.png'
import websitedev2 from '../assets/websitedev2.png'
import design from '../assets/design.png'
import card from '../assets/card.png'
import smallTag from '../assets/smalltag.png';
import tag from '../assets/tag.png';
import app from '../assets/app.png'
import phoneApp from '../assets/phone.png'

const services = [
  { 
    id: 1, 
    classname: 'product-info', 
    image1: websitedev, heading: 'Website Dev', 
    para: 'help you to build website company that is modern, user friendly, good CEO, and Clean design', 
    span: 'Start With us', 
    image2: arrowW, 
    image3: websitedev2, 
    classname2: 'web-img' 
  },

  { 
    id: 2, 
    classname: 'product-info2', 
    image1: design, heading: 'UI/UX Design', 
    para: 'help you to build website company that is modern, user friendly, good CEO, and Clean design', 
    span: 'Start With us', 
    image2: arrowW, 
    image3: card, 
    classname2: 'web-img2' 
  },

  { 
    id: 3, 
    classname: 'product-info3', 
    image1: smallTag, heading: 'Branding', 
    para: 'help you to build website company that is modern, user friendly, good CEO, and Clean design', 
    span: 'Start With us', 
    image2: arrowW, 
    image3: tag, 
    classname2: 'web-img3'
   },

  { 
    id: 4, 
    classname: 'product-info4', 
    image1: app, 
    heading: 'App Dev', 
    para: 'help you to build website company that is modern, user friendly, good CEO, and Clean design', 
    span: 'Start With us', 
    image2: arrowW, 
    image3: phoneApp, 
    classname2: 'web-img4' 
  }
]

export default services;