import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Para estilos, se necessário


import logo from '../assets/TS.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className='logo-container'>
        <img src={logo} alt="" />
      </div>


      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
