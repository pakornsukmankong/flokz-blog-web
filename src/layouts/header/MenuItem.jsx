import { Link } from 'react-router-dom';

function MenuItem({ children, to, active }) {
  return (
    <li className="nav-item">
      <Link
        to={to}
        className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 ${active}`}
      >
        {children}
      </Link>
    </li>
  );
}

export default MenuItem;
