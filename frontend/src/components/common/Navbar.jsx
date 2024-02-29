import React, { useState } from "react";
// import { SunIcon, MoonIcon, CogIcon } from '@heroicons/react/solid';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("sun"); // Default mode is sun (light mode)

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
    setDropdownOpen(false); // Close dropdown after mode selection
    // Implement dark mode functionality if needed
  };

  return (
    <nav className="bg-white-800 min-h-[] pl-4 pr-4 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/your-logo.png" alt="" className="mr-2 h-8" />
          <span className="pb-1 text-lg font-semibold text-black">
            FormBuilder
          </span>
        </div>
        <div className="flex items-center">
          {/* <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in pb-1 mr-2">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
              {selectedMode === 'sun' ? (
                <SunIcon className="w-6 h-6 text-yellow-500" />
              ) : selectedMode === 'moon' ? (
                <MoonIcon className="w-6 h-6 text-gray-600" />
              ) : (
                <CogIcon className="w-6 h-6 text-gray-600" />
              )}
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <li onClick={() => handleModeChange('sun')} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center" role="menuitem">
                  <SunIcon className="w-6 h-6 mr-2 text-yellow-500" />
                  Light Mode
                </li>
                <li onClick={() => handleModeChange('moon')} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center" role="menuitem">
                  <MoonIcon className="w-6 h-6 mr-2 text-gray-600" />
                  Dark Mode
                </li>
                <li onClick={() => handleModeChange('system')} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center" role="menuitem">
                  <CogIcon className="w-6 h-6 mr-2 text-gray-600" />
                  System Settings
                </li>
              </ul>
            )}
          </div> */}
          <div className="relative inline-block w-10 select-none pb-1 align-middle transition duration-200 ease-in">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
