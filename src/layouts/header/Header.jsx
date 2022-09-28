import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-[12rem] py-1 mb-1 border-b-2">
      <div className="container px-3 mx-auto flex flex-wrap items-center justify-between">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
}

export default Header;
