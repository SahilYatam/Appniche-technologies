import './Product.css'
import line from '../../assets/Vector2.png'
import HeadingWithText from '../../Components/HeadingText/HeadingWithText'
import Services from '../../Components/ServicesFolder/Services'
import ScrollingLogos from '../../Components/ScrollingLogos/ScrollingLogos'
import ButtonWithIcon from '../../Components/ButtonWIthIcon/ButtonWithIcon'
import arrow from '../../assets/arrow.png'
import arrowIcon from '../../assets/uil_arrow-up.png'
import Projects from '../../Components/Projects/Projects'
import Feedback from '../../Components/Feedback/Feedback'
import KnowBtn from '../../Components/KnowBTN/KnowBtn'
import Footer from '../../Components/Footer/Footer'

const Product = () => {
  return (
    <>
      <div className="product-container">
        <div className="products">
          <HeadingWithText
            headingText="Comapanies that can help you in developing your company for the future"
            paraText="Work in the IT field includes Web Design, UI/UX Design, Branding and Shopify Development"
            textContainerClass='h1-para'
            headingClass='product-h1'
            paraClass='product-para'
          />

          <div className="image-content">
            <img className='line' src={line} alt="" />
          </div>
          <HeadingWithText
            headingText="Let's work together with us"
            paraText="help you to build website App company that is modern, user friendly, user friendly, good CEO, and Clean design"

            textContainerClass='h2-para'
            headingClass='product-h2'
            paraClass='product-para'
          />

          <div className="know-btn">
          <KnowBtn
            text="Know More"
            icon={arrow}
          />
          </div>

          <div className="getStarted-Btn">
            <ButtonWithIcon
              text="Get Started"
              icon={arrowIcon}
            />
          </div>

          <div className="services-cards" >
            <Services />
          </div>
        </div>

        <div>
          <ScrollingLogos />
        </div>
        <div>
          <Projects />
        </div>

        <div>
          <Feedback />
        </div>
        <hr className='line1' />

        <div>
          <HeadingWithText
            headingText="Let's work together with us"
            paraText="Mangcoding is the biggest company in Indonesia, who provides the services in Development Website, Shopify and WordPress"

            textContainerClass='h3-para'
            headingClass='product-h3'
            paraClass='product-para'
          />
        </div>

        <div className='knowBtn-container'>
          <KnowBtn
            text="Know More"
            icon={arrow}
          />
        </div>

        <hr className='line2' />

        <div className='product-footer'>
          <Footer/>
        </div>

      </div>

    </>
  )
}

export default Product