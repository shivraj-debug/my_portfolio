"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useTheme } from "next-themes";

export default function Home() {
    const {theme}=useTheme()
    
  return (
    <div className="">
      <div className={`fixed top-0 left-0 w-full h-20  ${theme=="dark"?"text-white bg-blue-950":"text-black bg-white"}`}>
        <Navbar />
      </div>
      <div className={`${theme=="dark"?"bg-black ":"bg-gray-200 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400"} `}>
        
          <Hero />
      
      </div>
    </div>
  );
}
