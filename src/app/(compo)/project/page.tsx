"use client";

import Navbar from "@/app/components/Navbar";
import { projects } from "@/app/data/route";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion"
import { useTheme } from "next-themes";

function page() {
  const {theme}=useTheme()
  return (
    <div className="">
      <div className={`fixed top-0 right-0 w-full h-20 ${theme=="dark"?"bg-blue-950":"bg-white"} `}>
        <Navbar />
      </div>
      <div className={`pt-26 ${theme=="dark"?"bg-black":"bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400"}`}>
        <div className="text-center  mt-10 ">
          <p className="text-5xl font-semibold ">Projects</p>
        </div>
        <div className="mx-25">
          <div className="mt-15 ">
            <p className=" text-3xl font-bold text-center md:text-start text-blue-500">what i built</p>
          </div>
          <div className="mt-10"> 
            <motion.div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
            }}>
              {projects.map((project) => (
                < motion.div
                  key={project.id}
                  className="bg-gray-500 p-6 rounded-3xl shadow-md"
                  whileHover={{ scale: 1.05 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={450}
                    height={450}
                    className="rounded-lg mb-4 ml-7  h-60"
                  />
                  <h2 className="text-3xl font-semibold">{project.title}</h2>
                  <p className="text-gray-300">{
                    project.description.length>50 ? project.description.substring(0, 100)+"...": project.description
                    }</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-500 shadow-md text-md px-3 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Link
                      href={`/project/${project.id}`}
                      className="text-blue-300 hover:underline"
                    >
                      Details
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-blue-300 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-blue-300 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
