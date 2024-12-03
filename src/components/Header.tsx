import { motion } from 'framer-motion'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            AE
          </motion.a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
