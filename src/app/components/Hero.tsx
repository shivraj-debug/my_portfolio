"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
// import { useRouter } from "next/navigation";
import Link from "next/link";

function Hero() {
  const { theme } = useTheme();
  // const router=useRouter()
  return (
    <div className="h-auto w-full md:h-screen flex justify-center items-center">
      <div className=" md:flex h-screen w-screen justify-center items-center  md:ml-40 ">
        <div className="   md:max-w-1/2  -ml-10 sm:w-full ">
          <div className=" ml-20  sm:ml-0 md:ml-0 mt-30 md:mt-20">
            <div
              className={`md:text-6xl font-extrabold text-center md:text-start text-gray-800 p-1 mb-2  sm:text-5xl  text-4xl ${
                theme == "dark" ? "text-white" : "text-black"
              }`}
            >
              Hi, I am shiv Raj
            </div>
            <div className="text-center md:text-start">
              <div className="text-4xl font-extrabold text-blue-500 p-1 mb-3 font-mono animate-typing overflow-hidden whitespace-nowrap  border-white">
                <style>
                  {`
      @keyframes typing {
        0% { width: 0; }
        100% { width: 100%; }
      }

      .animate-typing {
        width: 2;
        display: inline-block;
        animation: typing 2s steps(12) infinite alternate;
      }
    `}
                </style>
                Full Stack Developer
              </div>
            </div>
            <div className="text-xl ml-2 mb-3 text-cyan-600 text-center md:text-start">
              i am full stack developer, Let's build something amazing together 
            </div>
            <div>{/* for icon of social media */}</div>
            <div className="text-center md:text-start">
              {/* <button 
                onClick={()=>router.push("/resume")}
                className="cursor-pointer text-3xl bg-blue-500  p-3 rounded-lg hover:bg-blue-300 w-60  ">
                  RESUME
                </button> */}

              <Link
                href="/resume.pdf"
                download="resume.pdf"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                <button>
                  RESUME
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:max-w-1/2 md:w-full mt-15 justify-center flex ">
          <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-md  "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
