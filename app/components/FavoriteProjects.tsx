import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Stories On Tips",
    description:
      "Next.js 15 application built with TypeScript, Next UI, Firebase Storage for image storage, and the Replicate API, enabling users to generate and store AI-powered stories. The app features a sleek and responsive UI, allowing users to input prompts and receive unique narratives instantly. Firebase Storage ensures secure saving and retrieval of images and neon as the primary database, making it a powerful and seamless storytelling tool. 🚀",
    image: "/stories.png",
    link: "https://www.storiesontips.com",
  },
  {
    id: 2,
    name: "My Invoice Checker",
    description:
      "Next.js 15 application built with TypeScript, Auth.js, Prisma ORM, and Neon as the database, providing a seamless and secure way to manage invoices. It features authentication with Auth.js, ensuring secure access control, while Prisma ORM simplifies database interactions with Neon. The app's sleek and responsive UI, styled with Tailwind CSS, offers an intuitive experience for users to create, manage, and track invoices efficiently. 🚀",
    image: "/invoice.png",
    link: "https://www.myinvoicechecker.com",
  },
];

export default function Projects() {
  return (
    // my apps

    <div className="p-6 min-h-screen text-white">
      <h1 className="text-3xl md:text-4xl text-purple-500 text-center font-bold mb-6">
        My Apps 💻
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="bg-purple-400 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-4"
          >
            {index % 2 === 0 ? (
              <>
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-1/3 rounded-lg"
                  width={600}
                  height={500}
                />
                <CardContent className="flex-1">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="text-foreground mb-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:underline"
                  >
                    {" "}
                    <Button>View Project</Button>
                  </a>
                </CardContent>
              </>
            ) : (
              <>
                <CardContent className="flex-1 text-right">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="text-foreground mb-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    <Button>View Project</Button>
                  </a>
                </CardContent>
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-1/3 rounded-lg"
                  width={600}
                  height={500}
                />
              </>
            )}
          </Card>
        ))}
      </div>

      {/* apps that I have built for clients */}

      <div>{/* here will be the code */}</div>
    </div>
  );
}
