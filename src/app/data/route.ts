interface data{
  id:string,
  title:string,
  description:string,
  tech:string[]
  image:string,
  github:string,
  live:string,
  description2:string[]
}

export const projects:data[] = [
    {
      id: "1",
      title: "Chat Application",
      description: "It is a fully fledeged chat application user can talk to each other in real time",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/chat-application.jpg",
      github: "",
      live: "",
      description2:["Developed a real-time chat application with user authentication using Next.js, Node.js, Express.js, and MongoDB.","Implemented JWT-based authentication and bcrypt for password hashing to ensure secure user login and signup.","Enabled real-time messaging using WebSockets (Socket.io) for seamless user interactions.","Designed a responsive UI with Tailwind CSS for an enhanced user experience.","Implemented a MongoDB database with an efficient schema for storing user data and messages.","Also used Turborepo to manage all app in a folder "]
    },
    {
      id: "2",
      title: "Paytm wallet",
      description: "i build a paytm wallet where user can send and receive money",
      tech: ["Nextjs", "Prisma", "PostgreSql","turborepo"],
      image: "/paytm_wallet.jpg",
      github: "",
      live: "",
      description2:["Developed a digital wallet system with separate frontends for users and merchants using Next.js, Tailwind CSS, and Turborepo for a modular and scalable architecture.","Implemented secure money transfer functionality with real-time balance updates using Prisma and PostgreSQL/MySQL.","Integrated NextAuth for authentication with support for multiple login providers.","Ensured data validation and type safety using Zod for backend and frontend validation.","Utilized Webhooks to handle asynchronous events like transaction updates and notifications.","Designed a responsive and intuitive UI using Tailwind CSS for an enhanced user experience."]
    },
    {
        id: "3",
        title: "Blogging website",
        description: "user can easily create , post ,update delete blog post",
        tech: ["React", "Prisma", "PostgreSql","TypeScript","Express"],
        image: "/blogging_pic.png",
        github: "",
        live: "",
        description2:["Developed a full-stack blogging platform with React, TypeScript, Express, and PostgreSQL, enabling users to create, update, and delete blogs.","Designed a modern and responsive UI with React and Tailwind CSS for an intuitive user experience.","Implemented Prisma ORM for efficient database interactions and data validation.","Used TypeScript to ensure type safety and improve maintainability.","Optimized API performance with Express.js and structured RESTful endpoints."]
      },
  ];
  