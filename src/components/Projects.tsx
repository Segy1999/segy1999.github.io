import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  src: string
  technologies: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "KowTattys",
    description: "React Web App for a local tattoo artist, featuring a gallery to showcase their work and an appointment booking system.",
    src: "/images/projects/kt/home-page.png",
    technologies: ["React", "TailwindCSS", "PostgreSQL", "HTML"],
    demo: "https://kowtattys.netlify.app/"
  }
]

export function Projects() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="relative group">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}