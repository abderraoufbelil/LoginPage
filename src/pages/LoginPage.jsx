import React, { useEffect, useState } from "react";
import Containerlayout from "../components/Containerlayout";
import Mainlayout from "../components/Mainlayout";
import TextFormat from "../components/TextFormat";
import { motion, useAnimationControls } from "framer-motion";
import { Slide, fadeAnimation, fadeAnimation1 } from "../utils/animations";
const LoginPage = () => {
  const [currentPage, changePage] = useState(false);

  const Signin = {
    title: "Welcome Back",
    text: "Enter Your Information To Use All Site Features",
    button: "Sing In",
  };
  const Signup = {
    title: "Hello Friend",
    text: "Register Your Information To Use All Site Features",
    button: "Sing Up",
  };

  const controls = useAnimationControls();
  const changecurrentpage = () => {
    changePage(!currentPage);
  };
  useEffect(() => {
    currentPage
      ? (controls.start("fadeout"), controls.start("fadein1"))
      : (controls.start("fadein"), controls.start("fadeout1"));
  }, [currentPage]);
  return (
    <>
      <Containerlayout color="blue">
        <Mainlayout>
          <div className="relative w-8/12 max-h-[500px] h-[80vh] flex  bg-white rounded-3xl items-center">
            <div className="p-4 w-full h-full bg-transparent flex">
              <motion.div
                variants={fadeAnimation}
                initial="fadein"
                animate={controls}
                className="w-1/2 h-full flex flex-col justify-center items-center gap-10"
              >
                <h1 className="text-6xl font-bold">Sign Up</h1>
                <input
                  placeholder="User Name"
                  type="text"
                  className="px-4  border-[2px] outline-none w-[80%] h-10"
                />
                <input
                  placeholder="Email"
                  type="text"
                  className="px-4 border-[2px] outline-none  w-[80%] h-10"
                />
                <input
                  placeholder="Password"
                  type="password"
                  className="px-4 border-[2px] outline-none  w-[80%] h-10"
                />
                <button className="text-black px-12 py-2 border-[1px] rounded-2xl">
                  Sign Up
                </button>
              </motion.div>
              <motion.div
                variants={fadeAnimation1}
                initial="fadein1"
                animate={controls}
                className="w-1/2 h-full flex flex-col justify-center items-center gap-10"
              >
                <h1 className="text-6xl font-bold">Sign In</h1>
                <input
                  placeholder="User Name"
                  type="text"
                  className=" px-4 border-[2px] outline-none w-[80%] h-10"
                />
                <input
                  placeholder="Password"
                  type="text"
                  className="px-4 border-[2px] outline-none  w-[80%] h-10"
                />

                <button className="text-black px-12 py-2 border-[1px] rounded-2xl">
                  Sign In
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={Slide}
              initial="animation"
              animate={controls}
              className=" p-1 absolute w-1/2 h-full bg-violet-700 rounded-r-[200px] rounded-l-[inherit] flex flex-col justify-center items-center"
            >
              {currentPage && (
                <TextFormat
                  {...{ currentPage, changecurrentpage, controls }}
                  {...Signup}
                />
              )}
              {!currentPage && (
                <TextFormat
                  {...{ currentPage, changecurrentpage, controls }}
                  {...Signin}
                />
              )}

              {/* SIGNUP CONTENT */}

              {/* SIGNIN CONTENT */}
            </motion.div>
          </div>
        </Mainlayout>
      </Containerlayout>
    </>
  );
};

export default LoginPage;
