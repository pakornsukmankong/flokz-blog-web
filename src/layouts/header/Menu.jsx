import { Link, useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
import ProfileIcon from './ProfileIcon';

function Menu() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-grow items-center">
      <ul className="flex flex-row list-none ml-auto">
        <MenuItem to="/" active={pathname === '/' ? 'text-blue-800' : ''}>
          Blog
        </MenuItem>
        <MenuItem
          to="/create"
          active={pathname === '/create' ? 'text-blue-800' : ''}
        >
          Write
        </MenuItem>
        <MenuItem
          to="/login"
          active={pathname === '/login' ? 'text-blue-800' : ''}
        >
          Login
        </MenuItem>
        <MenuItem
          to="/register"
          active={pathname === '/register' ? 'text-blue-800' : ''}
        >
          Register
        </MenuItem>
        <li className="nav-item">
          <Link to={`/profile/id`}>
            <ProfileIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
