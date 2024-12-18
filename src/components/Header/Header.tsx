import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { PiLineVerticalBold } from "react-icons/pi";
import Button from "../Button/Button";

const Header: React.FC = () => {
  return (
    <header className="bg-[#4C4368] py-3 text-[#ffffff] font-main text-sm">
      <div className="flex flex-col md:flex-row flex-wrap justify-around  items-center">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <FaLocationDot />
            </div>
            <h1 className=" text-[10px] md:text-sm font-medium"> 225 Private Road 4231 Clifton, TX 76634</h1>
          </div>
          <div>
            <PiLineVerticalBold />
          </div>
          <div className="inline-flex items-center gap-2">
            <MdPhoneInTalk /> 
            <h1 className=" text-[10px] md:text-sm font-medium"> 817-658-3961</h1>
          </div>
        </div>
        <div className="flex gap-8 items-center max-sm:mt-2">
          <div className="flex gap-4 items-center ">
            <div><h1 className=" text-[10px] md:text-sm font-medium"> Follow us Now</h1> </div>
            <div className="inline-flex gap-3">
              <FaFacebookSquare className=" w-4 h-4 md:w-7 md:h-7" />
              <AiFillInstagram className="w-4 h-4 md:w-7 md:h-7" />
              <FaYoutube className="w-4 h-4 md:w-7 md:h-7" />
            </div>
          </div>

          <div>
            {/* <button className="border p-2    sm:w-32 sm:h-10 rounded-md ">Contact us</button> */}
            <Button  className="border  p-0   w-[110px]  sm:h-10 h-8 rounded-md">Contact us</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
