import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Alvin Edokpayi
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground mt-4 text-center">
          Results driven Analyst and aspiring Web Developer
        </h2>
        <div className="flex gap-6 justify-center">
          <SocialLink href="https://github.com/segy1999" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/alvin-edokpayi-3194481b4/" icon={<Linkedin />} />
          <SocialLink href="mailto:alvin.edokpayi@gmail.com" icon={<Mail />} />
        </div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      {icon}
    </motion.a>
  )
}