import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <div className=" w-full h-full max-w-[1280px] flex flex-nowrap md:flex-wrap justify-center items-center bg-transparent ">
      {children}
    </div>
  );
};

export default Mainlayout;
