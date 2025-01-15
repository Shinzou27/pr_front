const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gray-100 dark:bg-gray-800 shadow fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Logo
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Link 1
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            Link 2
          </a>
        </div>
      </div>
      <div className="w-6 h-6 bg-gray-400 rounded-full dark:bg-gray-600"></div>
    </nav>
  );
};

export default Navbar;
