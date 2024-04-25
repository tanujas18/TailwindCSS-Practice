import React from "react";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/logo.svg" alt="logo" className="h-4" />
        <button className="bg-gradient-to-r from-orange-500 to-red-600 text-xs text-white px-2 py-1 rounded-lg">Hosterr is hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
        <li>
          <a href='#'>Plans</a>
        </li>
        <li>
          <a href='#'>Find Domain</a>
        </li>
        <li>
          <a href='#'>Why Hosterr?</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-between items-center font-lato gap-6">
        <a href="#" className="text-gray-400">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
