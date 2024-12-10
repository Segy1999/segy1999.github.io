import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { AnimatedText3D } from './AnimatedText3D'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full"
      >
        <div className="h-[200px] w-full mb-1 relative">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
            <AnimatedText3D text="Alvin Edokpayi" />
          </Canvas>
        </div>
        <h2 className="text-xl md:text-2xl text-black mt-4 text-center">
          Results driven Analyst and aspiring Web Developer
        </h2>
        <div className="flex gap-6 justify-center mt-8">
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