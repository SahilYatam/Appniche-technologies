import { Link } from 'react-scroll'
import './KnowBtn.css'

const KnowBtn = ({ text, icon }) => {
  return (
    <>
    <Link to="/" className="knowBtn">
      {text}
      <img className="know-arrow" src={icon} alt="" />
    </Link>
    </>
  )
}

export default KnowBtn