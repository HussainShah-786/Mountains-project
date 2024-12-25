import Button from "@/components/Button/Button";
import React from "react";

const Booknow = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/flowers.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "410px",
        width: "100%",
      }}
    >
      <div className="max-w-[1219px] mx-auto text-center pt-16 flex flex-col items-center">
        <h1 className="text-[45px] font-semibold font-secondary ">
          Exquisite Texas Ranch Venue For All Of Your Private Events
        </h1>
        <p className="text-lg  leading-8 font-normal font-primary mt-4 text-gray-700 pt-3">
          Welcome to Triple Mountain Ranch, your exceptional and stunning Texas
          ranch venue, just an hour outside of Fort Worth and 35 minute from
          Waco, tucked into the mountains of Centeral Texas, we are ready to
          accommodate your next event! Whether you're planning a ranch wedding,
          a corporate retreat, or another type of event, we have everthing you
          need to make it spectacular.
        </p>
        <div className="pt-12">
          <Button className="border p-2 w-40 rounded-md bg-[#73A525] text-white text-xl font-medium font-primary">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
