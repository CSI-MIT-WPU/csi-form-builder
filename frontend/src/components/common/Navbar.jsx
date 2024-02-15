import React, { useState } from 'react';
// import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // You can implement dark mode functionality here
  };

  return (
    <nav className="bg-white-800 p-4 min-h-[]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/your-logo.png" alt="" className="h-8 mr-2" />
          <span className="text-black text-lg font-semibold pb-3">FormBuilder</span>
        </div>
        <div className="flex items-center">
          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in pb-3">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={handleDarkModeToggle} />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>

          </div>
          
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
