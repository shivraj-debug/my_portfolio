"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeProvider";
import { usePathname } from "next/navigation";  // use to get current url

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>();
  const pathname=usePathname()

  const menuItems = ["Home", "About", "Project", "Blog", "Contact"];

  return (
    <div className={`flex h-20 justify-between p-4 shadow-md transition duration-300`}>
      <div className="text-4xl hover:scale-110 cursor-pointer">𝕾𝖍𝖎𝖛𝖗𝖆𝖏</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-xl font-semibold">
        {menuItems.map((item) => {
          const routePath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          
          if (pathname === routePath) return null; // ✅ Hide if current page matches

          return (
            <div
              key={item}
              className={`hover:border-2 border-blue-500 hover:bg-blue-500 rounded-md flex justify-center items-center cursor-pointer`}
            >
              <p className="p-2" onClick={() => router.push(routePath)}>
                {item}
              </p>
            </div>
          );
        })}
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md focus:outline-none ">
          {!isOpen ? (
            <svg className="w-8 h-8  " aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          ) : (
            <svg className="w-8 h-8 " aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-18 right-4 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false);
                  router.push(item === "Home" ? "/" : `/${item.toLowerCase()}`);
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition ${
                  active === item ? "bg-blue-500 text-white" : "text-black dark:text-white"
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex justify-center mt-4">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
