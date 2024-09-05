import line from '../../assets/Vector2.png'
import HeadingWithText from '../HeadingText/HeadingWithText'
import Lquotaion from '../../assets/Lqoutaion.png'
import './Feedback.css'
import testimonialData from '../../Data/feedbackData'

const Feedback = () => {
  return (
    <>
      <div className='feedback-container'>
        <img className='img-line' src={line} alt="" />
        <HeadingWithText
          headingText="What they say about us"
          paraText="Work in the IT field includes Web Design, UI/UX Design, Branding and Shopify Development"
          textContainerClass='FeedBack-Text'
          headingClass='feedback-h1'
          paraClass='feedback-para'
        />
      </div>

      <img className='quotaionImg' src={Lquotaion} alt="" />

      <div className="allfeedback-cards">

        {
          testimonialData.map((feedback) => (
            <div key={feedback.id} className="card">
              <div className="card-header">
                <div>
                  <img src={feedback.image} alt="Profile" className="profile-img" />
                </div>
                <div className="card-header-text">
                  <h3>{feedback.name}</h3>
                  <p>{feedback.role}</p>
                </div>
              </div>
                <div className='small-quotation'>
                  <img src={feedback.image2} alt="" />
                </div>
              <div className="card-body">
                <p>
                  {feedback.description}
                </p>
              </div>
            </div>
          ))
        }

      </div>

    </>
  )
}

export default Feedback