import Copyright from './Copyright';
import SignUp from './SignUp';

function Footer() {
  return (
    <footer className="text-center text-black bg-gray-300 fixed bottom-0 w-[100%]">
      <SignUp />
      <Copyright />
    </footer>
  );
}

export default Footer;
