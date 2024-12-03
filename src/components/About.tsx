import { motion } from 'framer-motion'
import { 
  FileDown,
  Code2,
  Database,
  BarChart,
  FileSpreadsheet,
  Beaker,
  GitBranch,
  Terminal,
  Monitor,
  LineChart,
  Presentation,
  Brain,
  MessageSquare,
  Users,
  Clock
} from 'lucide-react'

const skills = {
  technical: [
    { name: 'Python', icon: <Code2 className="w-4 h-4" /> },
    { name: 'SQL', icon: <Database className="w-4 h-4" /> },
    { name: 'Power BI', icon: <BarChart className="w-4 h-4" /> },
    { name: 'Excel', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { name: 'Data Analysis', icon: <LineChart className="w-4 h-4" /> },
    { name: 'Project Management', icon: <Users className="w-4 h-4" /> },
    { name: 'Flask', icon: <Beaker className="w-4 h-4" /> },
    { name: 'HTMX', icon: <Code2 className="w-4 h-4" /> },
    { name: 'TailwindCSS', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
    { name: 'Linux', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Windows', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Tableau', icon: <BarChart className="w-4 h-4" /> },
    { name: 'PowerPoint', icon: <Presentation className="w-4 h-4" /> },
    { name: 'React', icon: <Code2 className="w-4 h-4" /> },
    { name: 'NodeJS', icon: <Code2 className="w-4 h-4" /> },
    { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
    { name: 'MySQL', icon: <Database className="w-4 h-4" /> }
  ],
  soft: [
    { name: 'Problem Solving', icon: <Brain className="w-4 h-4" /> },
    { name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Team Leadership', icon: <Users className="w-4 h-4" /> },
    { name: 'Time Management', icon: <Clock className="w-4 h-4" /> }
  ]
}

export function About() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10 before:absolute before:inset-0 before:bg-card before:-z-10"
          >
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a results-driven analyst with 2+ years of experience in data analysis, software configuration, and project management. Skilled in SQL, Power BI, Excel, and Python. Proven ability to deliver high-quality solutions in fast-paced environments.
                </p>
              </div>
              <div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Alvin_Edokpayi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  <FileDown className="w-5 h-5" />
                  View CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden relative z-10 before:absolute before:inset-0 before:bg-card before:-z-10"
          >
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}