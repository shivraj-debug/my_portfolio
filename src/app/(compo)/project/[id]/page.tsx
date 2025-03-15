"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import {projects}  from "@/app/data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams(); // ✅ Get the dynamic route params

  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center mt-10">Project not found.</p>;

  return (
    <motion.div 
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          width={800} 
          height={450} 
          className="rounded-lg my-6 h-96 " 
        />
      </motion.div>

      <motion.p 
        className="text-lg text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        
          <div className="my-3 p-4 ">
            {project.description2?.map((data,index)=>(
    
              <div className="" key={index}>
                <span className=" w-2 h-2 ">🔹 </span>
                {data}</div>
            ))}
          </div>
        
      </motion.p>

      <motion.div 
        className="mt-4 flex gap-2 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {project.tech.map((tech) => (
          <span key={tech} className="bg-gray-300 shadow-md text-sm px-3 py-1 rounded-lg">
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div 
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a href={project.github} target="_blank" className="text-blue-400 hover:underline">
          GitHub
        </a>
        <a href={project.live} target="_blank" className="text-blue-400 hover:underline">
          Live Demo
        </a>
      </motion.div>
    </motion.div>
  );
}
