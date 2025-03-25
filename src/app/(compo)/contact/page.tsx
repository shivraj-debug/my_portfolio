"use client";

import React, { use } from "react";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useTheme } from "next-themes";
import ContactForm from "@/app/components/ContactForm"

function page() {
  const {theme}=useTheme()

  return (
    <div className="">
      <div className={`fixed top-0 right-0 w-full h-20 ${theme=="dark"?"bg-blue-950":"bg-white"}`}>
        <Navbar/>
      </div>
      <div className={`${theme=="dark"?"bg-black":"bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300"}`}>
      <div className="pt-13 pb-10">
        <div className="text-center ">
          <p className="text-5xl mt-20 font-semibold">Contact</p>
        </div>
        <div className="mx-16 md:mx-25 md:p-10">
          <div className="md:flex justify-between ">
            <div>
              <div className="mt-14">
                <h2 className="text-3xl font-semibold text-blue-400">
                  Connect with me
                </h2>
                <p className="text-md">
                  to connect with me please fill this form.i will love to hear
                  you
                </p>
              </div>
                <ContactForm/>
            </div>
            <div className=" space-y-4 mt-15 p-7">
              <div className="">
                <p className="text-2xl font-semibold mr-0">Email</p>
                <a
                  href="mailto:shivrajstm2002@gmail.com"
                  className="text-blue-500 hover:underline text-xl"
                >
                  shivrajstm2002@gmail.com
                </a>
              </div>
              <div className="mt-10">
                <p className="text-2xl font-semibold">Call me </p>
                <a
                  href="tel:+917903756849"
                  className="text-blue-500 hover:underline text-md"
                >
                  +917903756849
                </a>
              </div>
              <div>
                <p className="text-2xl font-semibold">Address</p>
                <p className="text-md">Sitamarhi, Bihar India ,843332</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">connect with Social </p>
                <div className="flex  gap-6 mt-5 ">
                  <div className="hover:scale-125 cursor-pointer">
                    <Link
                      href="https://www.instagram.com/shiv105raj/?hl=en"
                      target="_blank"
                    >
                      <svg
                        className="w-10 h-10 fill-current text-pink-500"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.75 2a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5Zm-4.5 2A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.5Zm0 1.5A3.25 3.25 0 1 1 8.75 12 3.25 3.25 0 0 1 12 9Z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hover:scale-125 cursor-pointer">
                    <Link
                      href="https://www.linkedin.com/in/shiv-raj-8b8b2326a/"
                      target="_blank"
                    >
                      <svg
                        className="w-10 h-10 fill-current text-blue-600"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.785-1.75-1.75s.783-1.75 1.75-1.75 1.75.785 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.5c.82-1.256 2.197-2 3.75-2 2.481 0 4.5 2.019 4.5 4.5v6z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hover:scale-125 cursor-pointer">
                    <Link href="https://github.com/shivraj-debug" target="_blank">
                      <svg
                        className="w-10 h-10 fill-current "
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.799 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.49.997.108-.776.42-1.304.763-1.604-2.667-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.007-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.017.006 2.042.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.647 1.653.243 2.873.12 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.432.372.823 1.103.823 2.22 0 1.603-.015 2.894-.015 3.286 0 .32.19.693.798.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hover:scale-125 cursor-pointer">
                    <Link
                      href="https://x.com/ShivRaj27379101"
                      target="_blank"
                    >
                      <svg
                        className="w-10 h-10 fill-current text-blue-500"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.643 4.937c-.835.37-1.73.62-2.67.733.962-.576 1.7-1.488 2.048-2.575-.898.53-1.892.912-2.95 1.118a4.733 4.733 0 0 0-8.067 4.313A13.396 13.396 0 0 1 1.64 3.152a4.723 4.723 0 0 0 1.464 6.3 4.688 4.688 0 0 1-2.14-.593v.06a4.723 4.723 0 0 0 3.785 4.625 4.74 4.74 0 0 1-2.132.08 4.725 4.725 0 0 0 4.41 3.285 9.476 9.476 0 0 1-5.85 2.02A9.744 9.744 0 0 1 0 19.864a13.367 13.367 0 0 0 7.292 2.137c8.778 0 13.58-7.27 13.58-13.58 0-.21-.005-.42-.015-.63A9.7 9.7 0 0 0 24 4.59a9.56 9.56 0 0 1-2.357.646z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hover:scale-125 cursor-pointer ">
                    <Link
                      href="https://m.facebook.com/shivraj.sudhi/"
                      target="_blank"
                    >
                      <svg
                        className="w-10 h-10 fill-current text-blue-700"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.675 0h-21.35c-.731 0-1.325.594-1.325 1.325v21.351c0 .73.594 1.324 1.325 1.324h11.483v-9.294h-3.13v-3.622h3.13v-2.672c0-3.1 1.893-4.787 4.66-4.787 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.594 1.324-1.324v-21.351c0-.731-.594-1.325-1.324-1.325z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-40 text-center text-2xl mb-10">
          made with ❤️ by 𝕾𝖍𝖎𝖛𝖗𝖆𝖏
      </div>
    </div>
  );
}

export default page;
