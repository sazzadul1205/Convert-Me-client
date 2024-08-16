const Navbar = () => {
  return (
    <div className="bg-gray-200 py-2">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="  text-red-500 font-semibold text-3xl italic">
            Convert Me
          </a>
        </div>
        <div className="flex-none">
          <button className="text-black hover:text-white p-2 px-5 rounded-md border border-blue-500 hover:bg-blue-500">
            Log In
          </button>
          <button className=" p-2 px-5 rounded-md border border-red-500 bg-red-500 hover:bg-white text-white hover:text-black">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
