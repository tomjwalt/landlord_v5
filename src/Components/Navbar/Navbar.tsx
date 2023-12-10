import './Navbar.css'
import Logo from "../../images/Logo.png"

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"><img className='Logo' src={Logo} />Landlord</div>
      <ul className="nav-menu">
        <li>Messages</li>
        <li>Upload</li>
        <li>Help</li>
        <li className='nav-contact'>Login/Signup</li>
      </ul>
    </div>
  )
}

export default Navbar
