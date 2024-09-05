import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/Whatsaap.png'
import linkedin from '../../assets/Linkedin.png'
import './SocialIcons.css'
import { Link } from 'react-scroll'


const SocialIcons = () => {
  return (
    <div className="social-icons">
      <Link to="/">
        <img className="social-img" src={instagram} alt="Instagram" />
      </Link>
      <Link to="/">
        <img className="social-img" src={whatsapp} alt="WhatsApp" />
      </Link>
      <Link to="/">
        <img className="social-img" src={linkedin} alt="LinkedIn" />
      </Link>
    </div>
  );
}

export default SocialIcons;
