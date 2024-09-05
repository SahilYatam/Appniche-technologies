import { Link } from 'react-scroll';
import './ButtonWithIcon.css'

function ButtonWithIcon({ text, icon }) {
  return (
    <Link to="/" className="primary-btn">
      {text}
      <img className="arrow" src={icon} alt="" />
    </Link>
  );
}

export default ButtonWithIcon;
