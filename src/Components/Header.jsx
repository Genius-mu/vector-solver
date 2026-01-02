import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";

const Header = () => {
  const [navLinks, setNavLinks] = useState([
    "Addition",
    "Subtraction",
    "D.Product",
    "C.Product",
    "Magnitude",
    "Normalize",
  ]);
  return (
    <>
      <motion.header
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 left-0 w-2/4 max-w-[20em] bg-gray-100 shadow border-r border-gray-200 flex flex-col justify-between items-center rounded-br-[5px] rounded-tr-[5px] z-[60] bg-blend-saturation p-4"
      >
        <div className="w-full h-fit flex justify-end items-center">
          <Link to="/" className="text-black w-fit h-fit font-bold text-xl">
            <Wallet className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex flex-col w-full h-fit justify-center">
          {navLinks.map((nav, index) => (
            <>
              <div className="w-full items-center flex justify-between py-3 h-fit hover:bg-gray-200 px-4 rounded-[5px]">
                <Link to="/" className="text-[15px]">
                  {nav}
                </Link>
                <span className="h-full flex justify-center items-center gap-x-2 text-[15px] font-bold">
                  ...
                </span>
              </div>
            </>
          ))}
        </div>
        <div></div>
      </motion.header>
    </>
  );
};

export default Header;
