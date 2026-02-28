import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Comprehensive HSL Color Architecture
const navigationColors = {
  primary: {
    blue: {
      base: 'hsl(215, 100%, 50%)',      // Bright Blue
      light: 'hsl(215, 90%, 65%)',       // Light Blue
      dark: 'hsl(215, 100%, 35%)',       // Dark Blue
      muted: 'hsl(215, 80%, 95%)',       // Muted Blue
      gradient: 'linear-gradient(135deg, hsl(215, 100%, 50%) 0%, hsl(215, 90%, 65%) 100%)'
    },
    emerald: {
      base: 'hsl(160, 85%, 40%)',
      light: 'hsl(160, 85%, 55%)',
      dark: 'hsl(160, 85%, 25%)',
      muted: 'hsl(160, 70%, 95%)',
      gradient: 'linear-gradient(135deg, hsl(160, 85%, 40%) 0%, hsl(160, 85%, 55%) 100%)'
    }
  },
  
  accent: {
    gold: 'hsl(45, 95%, 55%)',
    silver: 'hsl(0, 0%, 75%)',
    graphite: 'hsl(0, 0%, 30%)'
  },
  
  neutral: {
    white: 'hsl(0, 0%, 100%)',
    offWhite: 'hsl(0, 0%, 98%)',
    light: 'hsl(0, 0%, 96%)',
    medium: 'hsl(0, 0%, 90%)',
    dark: 'hsl(0, 0%, 20%)',
    black: 'hsl(0, 0%, 10%)'
  }
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [bitPosition, setBitPosition] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ['home', 'services', 'intellicare', 'about', 'team', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animation to move "bit" from home to navigation
  useEffect(() => {
    const animateBit = () => {
      setIsAnimating(true)
      
      // Start position (home section)
      setBitPosition(0)
      
      // Animate to navigation position
      setTimeout(() => setBitPosition(1), 100)
      setTimeout(() => setBitPosition(2), 200)
      setTimeout(() => setBitPosition(3), 300)
      setTimeout(() => setBitPosition(4), 400)
      setTimeout(() => setBitPosition(5), 500)
      
      // Reset animation
      setTimeout(() => {
        setIsAnimating(false)
        setBitPosition(0)
      }, 2000)
    }
    
    // Trigger animation every 5 seconds
    const interval = setInterval(animateBit, 8000)
    
    // Initial animation after 2 seconds
    const timeout = setTimeout(animateBit, 2000)
    
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: 'fa-home', id: 'home' },
    { name: 'Services', href: '#services', icon: 'fa-cogs', id: 'services' },
    { name: 'Products', href: '#intellicare', icon: 'fa-cube', id: 'intellicare' },
    { name: 'About', href: '#about', icon: 'fa-info-circle', id: 'about' },
    { name: 'Team', href: '#team', icon: 'fa-users', id: 'team' },
    { name: 'Contact', href: '#contact', icon: 'fa-envelope', id: 'contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? `${navigationColors.neutral.white}CC` : 'transparent',
        borderBottom: scrolled ? `1px solid ${navigationColors.primary.blue.muted}` : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Animated "bit" */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer relative"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = '#home'}
          >
            {/* Bit Weavers Text with Animated "bit" */}
            <div className="relative">
              <span className="text-2xl font-bold" style={{ color: navigationColors.neutral.dark }}>
                {/* "bit" part with blue background and animation */}
                <motion.span
                  className="relative inline-block px-1 rounded"
                  style={{
                    backgroundColor: navigationColors.primary.blue.base,
                    color: navigationColors.neutral.white
                  }}
                  animate={isAnimating ? {
                    x: [0, 100, 200, 300, 400, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
                    rotate: [0, 5, -5, 5, -5, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  bit
                </motion.span>
                
                {/* " Weavers" part */}
                <span className="ml-1" style={{ 
                  background: `linear-gradient(135deg, ${navigationColors.primary.blue.dark}, ${navigationColors.primary.emerald.dark})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Weavers
                </span>
              </span>

              {/* Animated path for "bit" movement */}
              {isAnimating && (
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <motion.path
                    d="M 0 20 Q 50 0, 100 20 T 200 20 T 300 20 T 400 20"
                    stroke={navigationColors.primary.blue.base}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity={0.3}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              )}
            </div>
          </motion.div>

          {/* Desktop Menu with Active Indicators */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative font-medium transition-colors group"
                  style={{ 
                    color: isActive ? navigationColors.primary.blue.base : navigationColors.neutral.dark
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  
                  {/* Active Indicator - Dot */}
                  {isActive && (
                    <motion.div 
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: navigationColors.primary.blue.gradient
                      }}
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Active Indicator - Underline */}
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: navigationColors.primary.blue.gradient
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover underline (only shows when not active) */}
                  {!isActive && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        background: navigationColors.primary.blue.muted
                      }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              )
            })}
            
            {/* Contact Button with HSL */}
            <motion.a
              href="#contact"
              className="relative px-6 py-2.5 rounded-xl font-bold text-white overflow-hidden group"
              style={{
                background: navigationColors.primary.blue.gradient,
                boxShadow: `0 10px 20px -5px ${navigationColors.primary.blue.base}80`
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, ${navigationColors.neutral.white}40, transparent)`
                }}
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-phone-alt text-sm"></i>
                Contact Us
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button with HSL */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl relative w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: isOpen ? navigationColors.primary.blue.muted : 'transparent',
              color: navigationColors.primary.blue.base
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
          </motion.button>
        </div>

        {/* Mobile Menu with Active Indicators */}
        <motion.div 
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-6 space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 rounded-xl transition-all relative overflow-hidden"
                  style={{
                    color: isActive ? navigationColors.primary.blue.base : navigationColors.neutral.dark,
                    backgroundColor: isActive ? navigationColors.primary.blue.muted : 'transparent',
                    borderLeft: isActive ? `4px solid ${navigationColors.primary.blue.base}` : '4px solid transparent'
                  }}
                  whileHover={{
                    backgroundColor: navigationColors.primary.blue.muted,
                    x: 5
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Active indicator glow */}
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at 30% 50%, ${navigationColors.primary.blue.soft}, transparent)`
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      animate={isActive ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    >
                      <i className={`fas ${item.icon}`} style={{ 
                        color: isActive ? navigationColors.primary.blue.base : navigationColors.primary.blue.muted 
                      }}></i>
                    </motion.div>
                    <span className="font-medium">{item.name}</span>
                    
                    {/* Active badge */}
                    {isActive && (
                      <motion.span 
                        className="ml-auto text-xs px-2 py-1 rounded-full"
                        style={{
                          background: navigationColors.primary.blue.base,
                          color: navigationColors.neutral.white
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        Active
                      </motion.span>
                    )}
                  </div>
                </motion.a>
              )
            })}
            
            <motion.a
              href="#contact"
              className="block py-3 px-4 rounded-xl font-bold text-white text-center relative overflow-hidden"
              style={{
                background: navigationColors.primary.blue.gradient
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsOpen(false)}
            >
              {/* Shimmer effect for mobile */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, ${navigationColors.neutral.white}40, transparent)`
                }}
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative z-10">Contact Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Progress bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5"
        style={{
          background: navigationColors.primary.blue.gradient
        }}
        initial={{ width: '0%' }}
        animate={{ width: scrolled ? '100%' : '0%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  )
}

export default Navigation