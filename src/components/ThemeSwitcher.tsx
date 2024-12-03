import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Palette } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const themes = [
  { name: 'light', icon: <Sun className="w-5 h-5" /> },
  { name: 'dark', icon: <Moon className="w-5 h-5" /> },
  { name: 'cream', icon: <Palette className="w-5 h-5 rotate-180" /> },
  { name: 'camo', icon: <Palette className="w-5 h-5" /> }
] as const

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentTheme = themes.find(t => t.name === theme)

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {currentTheme?.icon}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-background border border-border shadow-lg backdrop-blur-lg"
          >
            <div className="py-1">
              {themes.map((t) => (
                <motion.button
                  key={t.name}
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => {
                    setTheme(t.name)
                    setIsOpen(false)
                  }}
                  className={`flex items-center w-full px-4 py-2 text-sm transition-colors
                    ${theme === t.name 
                      ? 'bg-accent/50 text-primary' 
                      : 'text-foreground hover:bg-accent/30'
                    }
                  `}
                >
                  <span className="w-5 h-5 flex items-center justify-center">{t.icon}</span>
                  <span className="ml-3 capitalize">{t.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
