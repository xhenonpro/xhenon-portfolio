'use client'
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#2d00f7] to-[#f20089] border-b border-[#8900f2] shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Flowbite
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#bc00dd] focus:outline-none focus:ring-2 focus:ring-[#6a00f4]"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-transparent rounded-lg bg-[#8900f2] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {/* Nav Links */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-[#bc00dd] rounded md:bg-transparent md:text-[#f20089] hover:text-[#e500a4] md:p-0 transition-all"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:text-[#d100d1] md:hover:bg-transparent md:border-0 md:hover:text-[#db00b6] md:p-0 md:w-auto transition-all"
              >
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div
                className={`absolute top-10 left-0 z-10 ${
                  dropdownOpen ? "block" : "hidden"
                } font-normal bg-white text-[#2d00f7] divide-y divide-[#8900f2] rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#db00b6] hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#db00b6] hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#db00b6] hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-[#8900f2] hover:bg-[#db00b6] hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:text-[#e500a4] md:border-0 md:hover:text-[#d100d1] md:p-0 transition-all"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:text-[#e500a4] md:border-0 md:hover:text-[#d100d1] md:p-0 transition-all"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:text-[#e500a4] md:border-0 md:hover:text-[#d100d1] md:p-0 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
