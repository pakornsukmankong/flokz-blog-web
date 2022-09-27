import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function Logo() {
  return (
    <Link to="/">
      <img className="w-[9rem]" src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
