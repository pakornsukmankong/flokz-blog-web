import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import MenuItem from './MenuItem'
import ProfileIcon from './ProfileIcon'

function Menu() {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  return (
    <div className="flex flex-grow items-center">
      <ul className="flex flex-row list-none ml-auto">
        <MenuItem to="/" active={pathname === '/' ? 'text-blue-800' : ''}>
          Blog
        </MenuItem>
        <MenuItem
          to="/create"
          active={pathname === '/create' ? 'text-blue-800' : ''}>
          Write
        </MenuItem>
        {!user ? (
          <>
            <MenuItem
              to="/login"
              active={pathname === '/login' ? 'text-blue-800' : ''}>
              Login
            </MenuItem>
            <MenuItem
              to="/register"
              active={pathname === '/register' ? 'text-blue-800' : ''}>
              Register
            </MenuItem>{' '}
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link
                to={'/'}
                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75`}
                onClick={logout}>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <ProfileIcon />
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Menu
