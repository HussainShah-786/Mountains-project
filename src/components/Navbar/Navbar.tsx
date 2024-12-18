import Image from "next/image";
import React from "react";
import logo from "../../../public/images/image 1.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="text-black font-main text-sm w-full h-[95px] bg-white shadow-sm">
      <div className="flex flex-row justify-around items-center">
        <ul className="flex gap-20 items-center h-[95px] text-[#5D4C94] text-[14px] font-semibold">
          <li className="relative">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="/"
            >
              HOME
            </Link>
          </li>
          <li className="relative">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="#Venues"
            >
              VENUES
            </Link>
          </li>
          <div>
            <Link
              href="/"
            >
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="w-[151px] h-[81px]"
            />
            </Link>
          </div>
          <li className="relative">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="#Lodging"
            >
              LODGING
            </Link>
          </li>
          <li className="relative">
            <Link
              className="hover:text-[#000000] hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-[#5D4C94] hover:after:mt-1 after:transition-all after:duration-300 active:after:w-full active:text-[#000000]"
              href="#Gallery"
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
