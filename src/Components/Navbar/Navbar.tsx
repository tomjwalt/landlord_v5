import './Navbar.css'
import Logo from "../../images/logo_resized_white.png"

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"><img className='Logo' src={Logo} />
      <button className='button'>Landlord</button></div>
      <ul className="nav-menu">
        <li><button className='button'>Messages</button></li>
        <li><button className='button'>Upload</button></li>
        <li><button className='button'>Help</button></li>
        <li className='nav-contact'><button className='button'>Login/Signup</button></li>
      </ul>
    </div>
  )
}

export default Navbar
