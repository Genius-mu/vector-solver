import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet,
  ChevronLeft,
  ChevronRight,
  Plus, // Addition
  Minus, // Subtraction
  X, // Dot Product (×) or general multiply
  Layers, // Cross Product (layered vectors)
  Ruler, // Magnitude (length)
  ArrowUpDown,
  Home, // Normalize (unit vector direction)
} from "lucide-react";

const navLinks = [
  { name: "Home", icon: <Home size={20} /> },
  { name: "Addition", icon: <Plus size={20} /> },
  { name: "Subtraction", icon: <Minus size={20} /> },
  { name: "D.Product", icon: <X size={20} /> }, // Dot Product (·)
  { name: "C.Product", icon: <Layers size={20} /> }, // Cross Product (×)
  { name: "Magnitude", icon: <Ruler size={20} /> },
  { name: "Normalize", icon: <ArrowUpDown size={20} /> },
];

const sidebarVariants = {
  expanded: { width: "16rem" },
  collapsed: { width: "4rem" },
};

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.header
      variants={sidebarVariants}
      initial="collapsed"
      animate={isCollapsed ? "collapsed" : "expanded"}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className={`fixed inset-y-0 left-0 bg-gray-900 text-gray-100 shadow-lg flex flex-col z-50 overflow-hidden`}
    >
      {/* Top: Logo + Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Link
          to="/"
          className={`items-center gap-3 ${
            !isCollapsed ? "flex" : "[display:none]"
          }`}
        >
          <Wallet className="w-8 h-8 text-indigo-400" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-bold text-xl whitespace-nowrap"
              >
                VectorCalc
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`flex-1 ${!isCollapsed ? "p-4" : "p-2"} overflow-y-auto`}>
        <ul className="space-y-1">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={`/${item.name.toLowerCase().replace(/\./g, "-")}`}
                className={`flex items-center gap-4 ${
                  !isCollapsed ? "px-4" : "px-1"
                } py-3 rounded-lg hover:bg-gray-800 transition-colors group`}
              >
                {/* Icon */}
                <div
                  className={`text-gray-300 group-hover:text-white ${
                    !isCollapsed ? "flex" : "flex p-1 px-2.5"
                  } transition-colors`}
                >
                  {item.icon}
                </div>

                {/* Label - hidden when collapsed */}
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: isCollapsed ? 0 : 1,
                    width: isCollapsed ? 0 : "auto",
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium overflow-hidden whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Optional Bottom Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex-shrink-0" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col min-w-0"
              >
                <span className="text-sm font-medium truncate">User Name</span>
                <span className="text-xs text-gray-400 truncate">
                  user@example.com
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
