// import { NextResponse } from "next/server";

interface Data {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  description2: string[];
}

// Move the projects array into the GET function instead of exporting it
// function GET() {
  export const  projects: Data[] = [
    {
      id: "1",
      title: "Chat Application",
      description: "It is a fully-fledged chat application where users can talk to each other in real-time.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/chat-application.jpg",
      github: "",
      live: "",
      description2: [
        "Developed a real-time chat application with user authentication using Next.js, Node.js, Express.js, and MongoDB.",
        "Implemented JWT-based authentication and bcrypt for password hashing to ensure secure user login and signup.",
        "Enabled real-time messaging using WebSockets (Socket.io) for seamless user interactions.",
        "Designed a responsive UI with Tailwind CSS for an enhanced user experience.",
        "Implemented a MongoDB database with an efficient schema for storing user data and messages.",
        "Used Turborepo to manage all app modules in a monorepo structure.",
      ],
    },
    {
      id: "2",
      title: "Paytm Wallet",
      description: "Built a Paytm-like wallet where users can send and receive money securely.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Turborepo"],
      image: "/paytm_wallet.jpg",
      github: "",
      live: "",
      description2: [
        "Developed a digital wallet system with separate frontends for users and merchants using Next.js, Tailwind CSS, and Turborepo for a modular and scalable architecture.",
        "Implemented secure money transfer functionality with real-time balance updates using Prisma and PostgreSQL/MySQL.",
        "Integrated NextAuth for authentication with support for multiple login providers.",
        "Ensured data validation and type safety using Zod for backend and frontend validation.",
        "Utilized Webhooks to handle asynchronous events like transaction updates and notifications.",
        "Designed a responsive and intuitive UI using Tailwind CSS for an enhanced user experience.",
      ],
    },
    {
      id: "3",
      title: "Blogging Website",
      description: "Users can easily create, post, update, and delete blog posts.",
      tech: ["React", "Prisma", "PostgreSQL", "TypeScript", "Express"],
      image: "/blogging_pic.png",
      github: "",
      live: "",
      description2: [
        "Developed a full-stack blogging platform with React, TypeScript, Express, and PostgreSQL, enabling users to create, update, and delete blogs.",
        "Designed a modern and responsive UI with React and Tailwind CSS for an intuitive user experience.",
        "Implemented Prisma ORM for efficient database interactions and data validation.",
        "Used TypeScript to ensure type safety and improve maintainability.",
        "Optimized API performance with Express.js and structured RESTful endpoints.",
      ],
    },
  ];

  // return NextResponse.json(projects);


// export { GET };