import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li>
      <NavLink to="/" className="link">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/greetings" className="link">
        Greet Me!
      </NavLink>
    </li>
  </ul>
);

export default NavBar;
