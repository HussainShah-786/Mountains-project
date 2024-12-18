import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { PiLineVerticalBold } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <header className="bg-[#4C4368] py-3 text-[#ffffff] font-main text-sm">
      <div className="flex flex-col md:flex-row flex-wrap justify-around  items-center">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <FaLocationDot />
            </div>
            225 Private Road 4231 Clifton, TX 76634
          </div>
          <div>
            <PiLineVerticalBold />
          </div>
          <div className="inline-flex items-center gap-2">
            <MdPhoneInTalk /> 817-658-3961
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 items-center ">
            <div>Follow us on </div>
            <div className="inline-flex gap-3">
              <FaFacebookSquare className="w-7 h-7" />
              <AiFillInstagram className="w-7 h-7" />
              <FaYoutube className="w-7 h-7" />
            </div>
          </div>

          <div>
            <button className="border p-2 rounded-md">Contact us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
