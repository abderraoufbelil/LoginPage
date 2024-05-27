import React, { useEffect } from "react";
import { animate, delay, motion } from "framer-motion";
import { fadeInAnimation } from "../utils/animations";

const TextFormat = ({
  currentPage,
  text,
  title,
  button,
  changecurrentpage,
  controls,
}) => {
  useEffect(() => {
    console.log(currentPage);
  });

  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col justify-center items-center gap-6"
    >
      <h1 className="text-6xl text-white font-bold ">{title} </h1>
      <p className="text-white">{text} </p>
      <button
        onClick={() => {
          currentPage
            ? controls.start("animation")
            : controls.start("animated");
          changecurrentpage();
        }}
        className="text-white px-12 py-2 border-[1px] rounded-2xl"
      >
        {button}
      </button>
    </motion.div>
  );
};

export default TextFormat;
