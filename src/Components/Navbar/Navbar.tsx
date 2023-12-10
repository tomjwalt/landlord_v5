import './Navbar.css'
import Logo from "../../images/logo_resized_white.png"
import { Property } from '../../../SUPA_BASS/types';

type NavbarProps = {
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}
const Navbar = ({setProperties}: NavbarProps) => {
  return (
    <div className='nav'>
      <div onClick={() => {
        setProperties([]);
      }} className="nav-logo"><img className='Logo' src={Logo} />Landlord</div>
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
