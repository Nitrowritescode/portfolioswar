import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  name: string
  category: string
}

export default function SkillsSection() {
  const skills: Skill[] = [
    // Frontend
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "HTML/CSS", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "Django", category: "Backend" },

    // Tools
    { name: "Git", category: "Tools and Technologies" },
    { name: "Vercel", category: "Tools and Technologies" },
    { name: "CI/CD", category: "Tools and Technologies" },
    { name: "Supabase", category: "Tools and Technologies" }
  ]

  // Group skills by category
  const categories = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technical expertise and capabilities</p>
        </div>

        <div className="grid gap-8">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-medium mb-4">{category}</h3>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {categorySkills.map((skill) => (
                  <Card key={skill.name} className="border-0 shadow-sm">
                    <CardContent className="flex items-center justify-center p-4 h-full">
                      <span className="font-medium text-center">{skill.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

