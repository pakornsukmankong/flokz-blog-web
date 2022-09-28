function SignUp() {
  return (
    <div className="container p-3">
      <div className="">
        <p className="flex justify-center items-center">
          <span className="mr-4">Register for free</span>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-black text-black font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Sign up!
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
