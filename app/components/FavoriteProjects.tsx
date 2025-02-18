import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "Stories On Tips",
    description:
      "Next.js 15 application built with TypeScript, Next UI, Firebase Storage for image storage, and the Replicate API, enabling users to generate and store AI-powered stories.",
    image: "/stories.PNG",
    link: "https://www.storiesontips.com",
    tags: ["Next.js 15", "TypeScript", "Firebase", "Clerk", "Replicate API"],
  },
  {
    id: 2,
    name: "My Invoice Checker",
    description:
      "Next.js 15 application built with TypeScript, Auth.js, Prisma ORM, and Neon as the database, providing a seamless and secure way to manage invoices.",
    image: "/invoice.PNG",
    link: "https://www.myinvoicechecker.com",
    tags: ["Next.js 15", "TypeScript", "Auth.js", "Prisma", "Neon"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-video relative mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={project.link} target="_blank">
                  View Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

