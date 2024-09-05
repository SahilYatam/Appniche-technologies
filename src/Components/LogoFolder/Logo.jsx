import './Logo.css'
import logo from '../../assets/logo.png'
const Logo = () => {
  return (
    <>
      <div className="logo">
        <img className='logo-img' src={logo} alt="Appniche Technologies" />
        <h1 className='logo-h1'>Appniche Technologies</h1>
      </div>
    </>
  )
}

export default Logo