import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe2, Cpu, HeartHandshake, Calendar, Users2, 
  Smile, Clock, ArrowRight, Award, Target, Rocket,
  Sparkles, TrendingUp, Shield, Zap, Star, ChevronRight,
  Building2, Code2, Brain, Network, Database, Cloud,
  Lock, Gem, Flame, Wind, Droplets, Mountain
} from 'lucide-react'

// Counter Component with animation
const Counter = ({ value, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value.toString().replace(/[^0-9]/g, ''))
      const increment = end / (duration * 60)
      
      const timer = setInterval(() => {
        start += increment
        if (start < end) {
          setCount(Math.floor(start))
        } else {
          setCount(end)
          clearInterval(timer)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  if (value === '24/7') {
    return <span ref={ref}>24/7</span>
  }

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // HSL Color structures for each category
  const colorSchemes = {
    earth: {
      primary: 'hsl(25, 95%, 53%)', // Burnt Orange
      secondary: 'hsl(35, 92%, 65%)', // Golden Yellow
      light: 'hsl(30, 90%, 96%)', // Cream
      dark: 'hsl(20, 80%, 35%)', // Deep Brown
      gradient: 'linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(35, 92%, 65%) 100%)',
      shadow: 'hsla(25, 95%, 53%, 0.2)',
      accent: 'hsl(15, 85%, 55%)' // Terracotta
    },
    ocean: {
      primary: 'hsl(195, 85%, 45%)', // Ocean Blue
      secondary: 'hsl(185, 90%, 55%)', // Turquoise
      light: 'hsl(190, 90%, 96%)', // Light Cyan
      dark: 'hsl(200, 85%, 30%)', // Deep Blue
      gradient: 'linear-gradient(135deg, hsl(195, 85%, 45%) 0%, hsl(185, 90%, 55%) 100%)',
      shadow: 'hsla(195, 85%, 45%, 0.2)',
      accent: 'hsl(175, 85%, 45%)' // Teal
    },
    forest: {
      primary: 'hsl(145, 65%, 42%)', // Forest Green
      secondary: 'hsl(155, 70%, 55%)', // Mint
      light: 'hsl(140, 70%, 96%)', // Light Mint
      dark: 'hsl(135, 60%, 25%)', // Dark Green
      gradient: 'linear-gradient(135deg, hsl(145, 65%, 42%) 0%, hsl(155, 70%, 55%) 100%)',
      shadow: 'hsla(145, 65%, 42%, 0.2)',
      accent: 'hsl(165, 75%, 40%)' // Emerald
    },
    sunset: {
      primary: 'hsl(350, 85%, 60%)', // Coral Pink
      secondary: 'hsl(15, 90%, 65%)', // Peach
      light: 'hsl(5, 90%, 96%)', // Light Peach
      dark: 'hsl(340, 80%, 35%)', // Deep Rose
      gradient: 'linear-gradient(135deg, hsl(350, 85%, 60%) 0%, hsl(15, 90%, 65%) 100%)',
      shadow: 'hsla(350, 85%, 60%, 0.2)',
      accent: 'hsl(5, 85%, 55%)' // Salmon
    },
    twilight: {
      primary: 'hsl(270, 70%, 60%)', // Lavender
      secondary: 'hsl(290, 75%, 65%)', // Orchid
      light: 'hsl(280, 70%, 96%)', // Light Lavender
      dark: 'hsl(260, 65%, 35%)', // Deep Purple
      gradient: 'linear-gradient(135deg, hsl(270, 70%, 60%) 0%, hsl(290, 75%, 65%) 100%)',
      shadow: 'hsla(270, 70%, 60%, 0.2)',
      accent: 'hsl(310, 75%, 55%)' // Magenta
    },
    aurora: {
      primary: 'hsl(85, 70%, 50%)', // Lime Green
      secondary: 'hsl(175, 80%, 50%)', // Cyan
      light: 'hsl(130, 70%, 96%)', // Light Green
      dark: 'hsl(95, 65%, 30%)', // Dark Lime
      gradient: 'linear-gradient(135deg, hsl(85, 70%, 50%) 0%, hsl(175, 80%, 50%) 100%)',
      shadow: 'hsla(85, 70%, 50%, 0.2)',
      accent: 'hsl(140, 75%, 45%)' // Green
    },
    mineral: {
      primary: 'hsl(45, 85%, 55%)', // Gold
      secondary: 'hsl(210, 70%, 55%)', // Steel Blue
      light: 'hsl(60, 70%, 96%)', // Light Gold
      dark: 'hsl(35, 80%, 35%)', // Bronze
      gradient: 'linear-gradient(135deg, hsl(45, 85%, 55%) 0%, hsl(210, 70%, 55%) 100%)',
      shadow: 'hsla(45, 85%, 55%, 0.2)',
      accent: 'hsl(180, 65%, 45%)' // Copper
    },
    cosmic: {
      primary: 'hsl(330, 85%, 55%)', // Hot Pink
      secondary: 'hsl(250, 85%, 65%)', // Purple
      light: 'hsl(340, 80%, 96%)', // Light Pink
      dark: 'hsl(320, 80%, 35%)', // Deep Pink
      gradient: 'linear-gradient(135deg, hsl(330, 85%, 55%) 0%, hsl(250, 85%, 65%) 100%)',
      shadow: 'hsla(330, 85%, 55%, 0.2)',
      accent: 'hsl(280, 85%, 55%)' // Violet
    }
  }

  const highlights = [
    {
      icon: Building2,
      title: 'Local Expertise',
      description: 'Deep understanding of Ethiopian business landscape and regulations',
      scheme: colorSchemes.earth
    },
    {
      icon: Code2,
      title: 'Global Experience',
      description: 'Engineers and architects with international work experience',
      scheme: colorSchemes.ocean
    },
    {
      icon: HeartHandshake,
      title: 'Client Focus',
      description: 'Building long-term partnerships with our clients',
      scheme: colorSchemes.sunset
    }
  ]

  const stats = [
    { number: '2015', label: 'Founded', icon: Calendar, scheme: colorSchemes.forest },
    { number: '50', label: 'Team Members', suffix: '+', icon: Users2, scheme: colorSchemes.ocean },
    { number: '100', label: 'Happy Clients', suffix: '+', icon: Smile, scheme: colorSchemes.sunset },
    { number: '24/7', label: 'Support', icon: Clock, scheme: colorSchemes.twilight }
  ]

  const timeline = [
    { 
      year: '2015', 
      event: 'Bit Weavers Founded', 
      description: 'Started with a vision to transform Ethiopian tech',
      icon: Rocket,
      scheme: colorSchemes.earth
    },
    { 
      year: '2018', 
      event: 'First Major Hospital', 
      description: 'Implemented IntelliCare at Hallelujah Hospital',
      icon: Target,
      scheme: colorSchemes.ocean
    },
    { 
      year: '2020', 
      event: 'Expanded Team', 
      description: 'Grew to 50+ skilled engineers and developers',
      icon: Users2,
      scheme: colorSchemes.forest
    },
    { 
      year: '2023', 
      event: '100+ Clients', 
      description: 'Reached milestone of 100+ happy clients',
      icon: Award,
      scheme: colorSchemes.sunset
    }
  ]

  const achievements = [
    { label: 'Projects Delivered', value: '150+', icon: Zap, scheme: colorSchemes.aurora },
    { label: 'Client Retention', value: '98%', icon: Star, scheme: colorSchemes.mineral },
    { label: 'Team Experience', value: '8+ yrs', icon: Shield, scheme: colorSchemes.cosmic },
    { label: 'Innovation Rate', value: '100%', icon: Sparkles, scheme: colorSchemes.twilight }
  ]

  const architecturalElements = [
    { icon: Network, label: 'Microservices', scheme: colorSchemes.ocean },
    { icon: Database, label: 'Data Architecture', scheme: colorSchemes.forest },
    { icon: Cloud, label: 'Cloud Native', scheme: colorSchemes.aurora },
    { icon: Lock, label: 'Security First', scheme: colorSchemes.cosmic }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background with HSL gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {Object.values(colorSchemes).map((scheme, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              background: scheme.gradient,
              opacity: 0.03,
              width: '400px',
              height: '400px',
              left: `${index * 20}%`,
              top: `${index * 15}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with HSL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block mb-4"
          >
            <span 
              className="px-4 py-2 rounded-full text-sm font-semibold border"
              style={{
                background: `linear-gradient(135deg, ${colorSchemes.earth.light} 0%, ${colorSchemes.ocean.light} 100%)`,
                color: colorSchemes.earth.dark,
                borderColor: colorSchemes.earth.primary
              }}
            >
              <Gem className="w-4 h-4 inline mr-2" style={{ color: colorSchemes.mineral.primary }} />
              Architectural Excellence
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About <span 
              className="bg-clip-text text-transparent relative"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colorSchemes.earth.primary} 0%, ${colorSchemes.ocean.primary} 50%, ${colorSchemes.sunset.primary} 100%)`
              }}
            >
              Bit Weavers
              <motion.span
                className="absolute -top-6 -right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-6 h-6" style={{ color: colorSchemes.mineral.primary }} />
              </motion.span>
            </span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${colorSchemes.earth.primary}, ${colorSchemes.ocean.primary}, ${colorSchemes.sunset.primary})`
            }}
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Crafting digital excellence with Ethiopian roots and global expertise
          </motion.p>
        </motion.div>

        {/* Architectural Elements Strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {architecturalElements.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${item.scheme.light} 0%, white 100%)`,
                  border: `1px solid ${item.scheme.primary}`,
                  boxShadow: `0 4px 12px ${item.scheme.shadow}`
                }}
              >
                <Icon className="w-4 h-4" style={{ color: item.scheme.primary }} />
                <span className="text-sm font-medium" style={{ color: item.scheme.dark }}>
                  {item.label}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - About Text */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-xl text-gray-700 mb-6 leading-relaxed"
                style={{
                  borderLeft: `4px solid ${colorSchemes.earth.primary}`,
                  paddingLeft: '1.5rem'
                }}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Bit Weavers is a premier software development company based in Ethiopia, 
                dedicated to transforming businesses through innovative technology solutions.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our team combines international experience with local expertise to deliver 
                world-class software solutions tailored to the Ethiopian market. We don't just 
                write code; we craft digital experiences that drive real business value.
              </motion.p>
            </motion.div>
            
            {/* Highlights Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon
                const scheme = item.scheme
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08,
                      y: -8,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="group relative bg-white rounded-2xl p-6 transition-all duration-500 overflow-hidden"
                    style={{
                      boxShadow: `0 10px 30px -10px ${scheme.shadow}`,
                      border: `1px solid ${scheme.light}`
                    }}
                  >
                    {/* Architectural gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at top right, ${scheme.light}, transparent 70%)`
                      }}
                    />
                    
                    {/* Corner accent */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16"
                      style={{
                        background: `linear-gradient(135deg, transparent 50%, ${scheme.primary}20 50%)`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${scheme.light} 0%, white 100%)`,
                          border: `2px solid ${scheme.primary}30`
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7" style={{ color: scheme.primary }} />
                      </motion.div>
                      
                      <motion.h4 
                        className="font-bold text-gray-900 mb-2 transition-all duration-300"
                        style={{
                          color: scheme.dark
                        }}
                      >
                        {item.title}
                      </motion.h4>
                      
                      <p className="text-sm text-gray-600">{item.description}</p>
                      
                      {/* Bottom accent line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{
                          background: `linear-gradient(90deg, ${scheme.primary}, transparent)`
                        }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Trust indicators with HSL */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex items-center gap-6"
            >
              <motion.div 
                className="flex -space-x-2"
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {[1,2,3,4].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colorSchemes[i % 2 === 0 ? 'earth' : 'ocean'].primary}, ${colorSchemes[i % 3 === 0 ? 'sunset' : 'forest'].secondary})`
                    }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                ))}
              </motion.div>
              <motion.p 
                className="text-sm"
                style={{ color: colorSchemes.earth.dark }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <span className="font-bold" style={{ color: colorSchemes.earth.primary }}>100+</span> trusted clients
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                const scheme = stat.scheme
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08,
                      rotate: 2,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="group relative bg-white rounded-2xl p-6 transition-all duration-500 overflow-hidden"
                    style={{
                      boxShadow: `0 10px 30px -10px ${scheme.shadow}`,
                      border: `1px solid ${scheme.light}`
                    }}
                  >
                    {/* Architectural grid pattern */}
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `
                          linear-gradient(${scheme.primary} 1px, transparent 1px),
                          linear-gradient(90deg, ${scheme.primary} 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6" style={{ color: scheme.primary }} />
                      </motion.div>
                      
                      <motion.div 
                        className="text-3xl lg:text-4xl font-bold mb-2"
                        style={{ color: scheme.dark }}
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        <Counter value={stat.number} suffix={stat.suffix || ''} duration={2} />
                      </motion.div>
                      
                      <div className="text-sm font-medium" style={{ color: scheme.primary }}>
                        {stat.label}
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div 
                      className="absolute bottom-0 right-0 w-8 h-8"
                      style={{
                        background: `linear-gradient(135deg, transparent 50%, ${scheme.primary}20 50%)`
                      }}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Timeline */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 transition-all duration-500"
              style={{
                boxShadow: `0 10px 30px -10px ${colorSchemes.earth.shadow}`,
                border: `1px solid ${colorSchemes.earth.light}`
              }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" style={{ color: colorSchemes.earth.primary }} />
                <span style={{ color: colorSchemes.earth.dark }}>Our Journey</span>
              </h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => {
                  const Icon = item.icon
                  const scheme = item.scheme
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.2 }}
                      whileHover={{ x: 10 }}
                      className="relative group"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.2 }}
                        >
                          <motion.div 
                            className="w-4 h-4 rounded-full mt-2 group-hover:scale-150 transition-all duration-300"
                            style={{
                              background: scheme.gradient,
                              boxShadow: `0 0 15px ${scheme.primary}`
                            }}
                            animate={{
                              scale: [1, 1.3, 1],
                              boxShadow: [
                                `0 0 0px ${scheme.primary}`,
                                `0 0 15px ${scheme.primary}`,
                                `0 0 0px ${scheme.primary}`
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3
                            }}
                          />
                          {index < timeline.length - 1 && (
                            <motion.div 
                              className="absolute top-4 left-1.5 w-0.5 h-16"
                              style={{
                                background: `linear-gradient(to bottom, ${scheme.primary}, transparent)`
                              }}
                              animate={{
                                height: [16, 20, 16],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <motion.span 
                              className="font-bold"
                              style={{ color: scheme.primary }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {item.year}
                            </motion.span>
                            <motion.div 
                              className="p-1 rounded-lg"
                              style={{
                                background: scheme.light
                              }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-3 h-3" style={{ color: scheme.primary }} />
                            </motion.div>
                            <span className="text-gray-900 font-semibold flex-1">{item.event}</span>
                          </div>
                          <p className="text-sm text-gray-600 pl-0">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Achievement Badges */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 mt-6"
            >
              {achievements.map((item, index) => {
                const Icon = item.icon
                const scheme = item.scheme
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group relative bg-white rounded-xl p-4 transition-all duration-500 overflow-hidden"
                    style={{
                      boxShadow: `0 5px 15px -5px ${scheme.shadow}`,
                      border: `1px solid ${scheme.light}`
                    }}
                  >
                    {/* Animated background */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${scheme.primary}, transparent)`
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10 flex items-center gap-3">
                      <motion.div 
                        className="p-2 rounded-lg"
                        style={{
                          background: scheme.light
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-4 h-4" style={{ color: scheme.primary }} />
                      </motion.div>
                      <div>
                        <div className="text-lg font-bold" style={{ color: scheme.dark }}>
                          {item.value}
                        </div>
                        <div className="text-xs" style={{ color: scheme.primary }}>
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colorSchemes.earth.primary} 0%, ${colorSchemes.ocean.primary} 50%, ${colorSchemes.sunset.primary} 100%)`
            }}
          >
            <motion.span 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              Join Our Journey
              <motion.div
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
            
            {/* Floating particles */}
            <motion.div 
              className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full blur-2xl opacity-30"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About