import { NavLink } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <div className='header'>
      <h1>Math Magicians</h1>
      <ul className='navbar'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/calculator'>Calculator</NavLink>
        </li>
        <li>
          <NavLink to='/quotes'>Quotes</NavLink>
        </li>
      </ul>
    </div>
  );
}
