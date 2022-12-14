import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="p-2">
      <div className="text-center">
        <p className="flex justify-center items-center">
          <span className="mr-4">Register for free</span>
          <Link to="/register">
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-black text-black font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Sign up!
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
