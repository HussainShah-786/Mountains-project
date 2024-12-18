"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/image 1.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-black font-main text-sm w-full bg-white shadow-sm">
      <div className="flex flex-row md:flex-col py-2    justify-between items-center px-4 md:py-0 md:px-12 md:h-[95px]">
        {/* Logo for Small Screens */}
        <div className="md:hidden">
          <Link href="/">
            <Image
              src={logo}
              width={151}
              height={81}
              alt="logo"
              className="w-[80px] h-[40px] md:w-[120px] md:h-[60px]"
            />
          </Link>
        </div>

        {/* Hamburger / Cross Icon for Mobile */}
        <button
          className="md:hidden text-[#5D4C94] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Cross Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`${isMenuOpen ? "block z-20" : "hidden"
            } absolute md:static top-[95px] mt-[60px] py-2  md:py-0 m px-6 md:mt-0 left-0 w-full md:w-auto bg-white md:flex justify-around items-center h-auto md:h-[95px] gap-8 md:gap-20 text-[#5D4C94] text-[14px] font-semibold shadow-md md:shadow-none`}
        >
          <li className="relative py-2">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="#Venues"
              onClick={() => setIsMenuOpen(false)}
            >
              VENUES
            </Link>
          </li>

          {/* Logo for Desktop */}
          <li className="hidden md:block py-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src={logo}
                width={151}
                height={81}
                alt="logo"
                className="w-[151px] h-[81px]"
              />
            </Link>
          </li>

          <li className="relative py-2">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="#Lodging"
              onClick={() => setIsMenuOpen(false)}
            >
              LODGING
            </Link>
          </li>
          <li className="relative py-2">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="#Gallery"
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;



