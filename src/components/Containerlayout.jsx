import React from "react";

const Containerlayout = ({ color, height, children }) => {
  return (
    <div className=" w-full h-[100%] bg-custom-gradient flex justify-center items-center ">
      {children}
    </div>
  );
};

export default Containerlayout;
