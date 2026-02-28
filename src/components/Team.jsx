import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import natgood from '../assets/images/natgood.png';

// Comprehensive HSL Color Architecture
const teamColors = {
  primary: {
    blue: {
      base: 'hsl(215, 100%, 50%)',
      light: 'hsl(215, 90%, 65%)',
      dark: 'hsl(215, 100%, 35%)',
      muted: 'hsl(215, 80%, 95%)',
      gradient: 'linear-gradient(135deg, hsl(215, 100%, 50%) 0%, hsl(215, 90%, 65%) 100%)',
      soft: 'hsla(215, 100%, 50%, 0.1)'
    },
    emerald: {
      base: 'hsl(160, 85%, 40%)',
      light: 'hsl(160, 85%, 55%)',
      dark: 'hsl(160, 85%, 25%)',
      muted: 'hsl(160, 70%, 95%)',
      gradient: 'linear-gradient(135deg, hsl(160, 85%, 40%) 0%, hsl(160, 85%, 55%) 100%)',
      soft: 'hsla(160, 85%, 40%, 0.1)'
    },
    purple: {
      base: 'hsl(265, 80%, 55%)',
      light: 'hsl(265, 80%, 70%)',
      dark: 'hsl(265, 80%, 35%)',
      muted: 'hsl(265, 70%, 95%)',
      gradient: 'linear-gradient(135deg, hsl(265, 80%, 55%) 0%, hsl(265, 80%, 70%) 100%)',
      soft: 'hsla(265, 80%, 55%, 0.1)'
    },
    rose: {
      base: 'hsl(350, 85%, 60%)',
      light: 'hsl(350, 85%, 75%)',
      dark: 'hsl(350, 85%, 35%)',
      muted: 'hsl(350, 70%, 95%)',
      gradient: 'linear-gradient(135deg, hsl(350, 85%, 60%) 0%, hsl(350, 85%, 75%) 100%)',
      soft: 'hsla(350, 85%, 60%, 0.1)'
    }
  },
  
  gold: {
    base: 'hsl(45, 95%, 55%)',
    light: 'hsl(45, 95%, 70%)',
    dark: 'hsl(45, 95%, 35%)',
    gradient: 'linear-gradient(135deg, hsl(45, 95%, 55%) 0%, hsl(45, 95%, 70%) 100%)'
  },
  
  neutral: {
    white: 'hsl(0, 0%, 100%)',
    offWhite: 'hsl(0, 0%, 98%)',
    light: 'hsl(0, 0%, 96%)',
    medium: 'hsl(0, 0%, 90%)',
    dark: 'hsl(0, 0%, 20%)',
    black: 'hsl(0, 0%, 10%)',
    gray: 'hsl(0, 0%, 45%)'
  },

  social: {
    linkedin: 'hsl(200, 100%, 40%)',
    twitter: 'hsl(200, 100%, 50%)',
    github: 'hsl(0, 0%, 20%)'
  }
}

// Animated Icons for Leadership Team
const leadershipIcons = {
  vision: {
    icon: 'fa-eye',
    animation: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  },
  innovation: {
    icon: 'fa-lightbulb',
    animation: {
      scale: [1, 1.3, 1],
      rotate: [0, 15, -15, 0],
      filter: ['drop-shadow(0 0 0px gold)', 'drop-shadow(0 0 10px gold)', 'drop-shadow(0 0 0px gold)'],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  },
  strategy: {
    icon: 'fa-chart-line',
    animation: {
      scale: [1, 1.2, 1],
      x: [0, 5, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  },
  growth: {
    icon: 'fa-rocket',
    animation: {
      y: [0, -8, 0],
      rotate: [0, 10, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  },
  leadership: {
    icon: 'fa-crown',
    animation: {
      rotate: [0, 15, -15, 0],
      scale: [1, 1.2, 1],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  },
  code: {
    icon: 'fa-code',
    animation: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: { duration: 4, repeat: Infinity, ease: "linear" }
    }
  },
  brain: {
    icon: 'fa-brain',
    animation: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  },
  users: {
    icon: 'fa-users-cog',
    animation: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  }
}

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const team = [
    {
      name: 'Nathan Tesfamichael',
      role: 'CEO & Founder',
      bio: '20+ years in software development. Visionary leader transforming healthcare technology in Ethiopia and beyond.',
      longBio: 'Under his leadership, Bit Weavers has grown from a small startup to a leading healthcare technology provider, serving over 100 hospitals across Ethiopia and beyond.',
      color: 'blue',
      expertise: ['Healthcare Tech', 'Leadership', 'Innovation', 'Strategic Planning'],
      achievements: ['Forbes 30 Under 30', 'Tech Innovation Award', 'Healthcare Leader of the Year'],
      isCEO: true,
      image: natgood, // Image for CEO
      iconSize: '80px'
    },
    {
      name: 'Michael Zewudie',
      role: 'CTO',
      bio: 'Former Tech Lead at Google, expert in healthcare systems and scalable architecture. PhD in Computer Science.',
      color: 'emerald',
      expertise: ['System Architecture', 'AI/ML', 'Cloud Computing', 'Security'],
      isCEO: false,
      leadershipIcon: leadershipIcons.innovation,
      iconSize: '60px'
    },
    {
      name: 'Megersa Teshome',
      role: 'Head of Engineering',
      bio: '15+ years experience in enterprise software architecture. Leads our engineering team with technical excellence.',
      color: 'purple',
      expertise: ['Enterprise Software', 'Team Leadership', 'DevOps', 'Microservices'],
      isCEO: false,
      leadershipIcon: leadershipIcons.code,
      iconSize: '60px'
    },
    {
      name: 'Eyob And Meseret',
      role: 'Product Manager',
      bio: 'Specializes in healthcare IT and user experience design. Ensures our products meet real user needs.',
      color: 'rose',
      expertise: ['Product Strategy', 'UX Design', 'Healthcare IT', 'User Research'],
      isCEO: false,
      leadershipIcon: leadershipIcons.users,
      iconSize: '60px'
    }
  ]

  const getColorScheme = (colorName) => {
    return teamColors.primary[colorName] || teamColors.primary.blue
  }

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', url: '#', color: teamColors.social.linkedin },
    { icon: 'fab fa-twitter', url: '#', color: teamColors.social.twitter },
    { icon: 'fab fa-github', url: '#', color: teamColors.social.github }
  ]

  // Separate CEO and other team members
  const ceo = team.find(member => member.isCEO)
  const otherMembers = team.filter(member => !member.isCEO)

  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, ${teamColors.primary.blue.soft} 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            opacity: 0.5
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <span 
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: teamColors.primary.blue.soft,
                color: teamColors.primary.blue.dark,
                border: `1px solid ${teamColors.primary.blue.muted}`
              }}
            >
              <i className="fas fa-crown mr-2" style={{ color: teamColors.gold.base }}></i>
              Leadership Team
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${teamColors.primary.blue.base}, ${teamColors.primary.emerald.base}, ${teamColors.primary.purple.base})`
              }}
            >
              Visionaries
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto" style={{ color: teamColors.neutral.gray }}>
            Experienced leaders dedicated to transforming healthcare through technology
          </p>

          <motion.div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${teamColors.primary.blue.base}, ${teamColors.primary.emerald.base}, ${teamColors.primary.purple.base})`
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: '6rem' } : {}}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        {/* CEO Section - Exceptional Treatment */}
        {ceo && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${teamColors.primary.blue.muted}, ${teamColors.neutral.white})`,
                border: `2px solid ${teamColors.primary.blue.base}`,
                boxShadow: `0 30px 60px -20px ${teamColors.primary.blue.base}`
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background pattern */}
              <motion.div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 50px 50px, ${teamColors.primary.blue.base} 4px, transparent 4px)`,
                  backgroundSize: '100px 100px'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* CEO Content */}
              <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left side - Image with special effects */}
                <div className="relative flex items-center justify-center">
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${teamColors.primary.blue.base}40, transparent)`
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                      width: '500px',
                      height: '500px',
                      border: `4px solid ${teamColors.gold.base}`,
                      boxShadow: `0 20px 40px -10px ${teamColors.primary.blue.base}`
                    }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={ceo.image} 
                      alt={ceo.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gold overlay on hover */}
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${teamColors.gold.base}40, transparent)`,
                        borderRadius: 'inherit'
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                    style={{
                      background: teamColors.gold.gradient,
                      color: teamColors.neutral.white,
                      border: `2px solid ${teamColors.neutral.white}`
                    }}
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <i className="fas fa-crown mr-1"></i> Founder & CEO
                  </motion.div>
                </div>

                {/* Right side - CEO Info */}
                <div className="flex flex-col justify-center">
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: teamColors.primary.blue.dark }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {ceo.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="text-xl mb-4"
                    style={{ color: teamColors.gold.base }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {ceo.role}
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg mb-4"
                    style={{ color: teamColors.neutral.gray }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {ceo.bio}
                  </motion.p>
                  
                  <motion.p 
                    className="text-base mb-6 italic"
                    style={{ color: teamColors.neutral.dark }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    "{ceo.longBio}"
                  </motion.p>

                  {/* Achievements */}
                  <motion.div 
                    className="mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: teamColors.primary.blue.dark }}>Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {ceo.achievements.map((achievement, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: teamColors.gold.gradient,
                            color: teamColors.neutral.white
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <i className="fas fa-trophy mr-1 text-xs"></i>
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Expertise */}
                  <motion.div 
                    className="mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: teamColors.primary.blue.dark }}>Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {ceo.expertise.map((exp, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            background: teamColors.primary.blue.soft,
                            color: teamColors.primary.blue.dark,
                            border: `1px solid ${teamColors.primary.blue.muted}`
                          }}
                          whileHover={{ scale: 1.05, background: teamColors.primary.blue.base, color: 'white' }}
                        >
                          {exp}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div 
                    className="flex gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    {socialLinks.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{
                          background: link.color,
                          boxShadow: `0 5px 15px ${link.color}80`
                        }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className={link.icon}></i>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-2xl" style={{ borderColor: teamColors.gold.base }} />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 rounded-tr-2xl" style={{ borderColor: teamColors.gold.base }} />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 rounded-bl-2xl" style={{ borderColor: teamColors.gold.base }} />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-2xl" style={{ borderColor: teamColors.gold.base }} />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Other Team Members Section - WITH ANIMATED ICONS ONLY */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            style={{ color: teamColors.neutral.dark }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Leadership Team
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherMembers.map((member, index) => {
              const scheme = getColorScheme(member.color)
              const iconAnimation = member.leadershipIcon
              
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{
                    boxShadow: `0 20px 40px -15px ${scheme.base}40`,
                    border: `1px solid ${scheme.muted}`
                  }}
                >
                  {/* Card Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, ${scheme.base} 2px, transparent 2px)`,
                      backgroundSize: '30px 30px'
                    }}
                  />

                  {/* Animated Icon Container - Full Width */}
                  <div className="relative h-48 overflow-hidden flex items-center justify-center">
                    {/* Background Glow */}
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at center, ${scheme.base}30, transparent)`
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Main Icon Container */}
                    <motion.div 
                      className="relative w-32 h-32 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${scheme.base}, ${scheme.light})`,
                        boxShadow: `0 20px 30px -10px ${scheme.base}`,
                        border: `3px solid ${teamColors.neutral.white}`
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <motion.i 
                        className={`fas ${iconAnimation.icon} text-white`}
                        style={{ fontSize: '48px' }}
                        animate={iconAnimation.animation}
                      />
                      
                      {/* Inner Glow */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${teamColors.neutral.white}80, transparent)`
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Floating Particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: scheme.base,
                          left: `${30 + i * 20}%`,
                          top: `${20 + i * 15}%`
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 0.5, 0],
                          x: [0, 20, 40],
                          y: [0, -20, -40]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut"
                        }}
                      />
                    ))}

                    {/* Role Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-20"
                      style={{
                        background: scheme.base,
                        color: teamColors.neutral.white,
                        boxShadow: `0 5px 15px ${scheme.base}80`
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.role}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-center" style={{ color: scheme.dark }}>
                      {member.name}
                    </h3>
                    
                    <p className="text-sm mb-4 text-center" style={{ color: teamColors.neutral.gray }}>
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise.slice(0, 3).map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full"
                          style={{
                            background: scheme.soft,
                            color: scheme.dark,
                            border: `1px solid ${scheme.muted}`
                          }}
                          whileHover={{ scale: 1.05, background: scheme.base, color: 'white' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 justify-center">
                      {socialLinks.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                          style={{
                            background: link.color,
                            opacity: 0.7
                          }}
                          whileHover={{ scale: 1.2, opacity: 1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className={link.icon}></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: scheme.base }} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Team Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          {[
            { value: '50+', label: 'Team Members', icon: 'fa-users', color: 'blue' },
            { value: '15+', label: 'Years Average Experience', icon: 'fa-calendar', color: 'emerald' },
            { value: '20+', label: 'Industry Experts', icon: 'fa-trophy', color: 'purple' },
            { value: '100+', label: 'Projects Delivered', icon: 'fa-rocket', color: 'rose' }
          ].map((stat, index) => {
            const scheme = getColorScheme(stat.color)
            
            return (
              <motion.div
                key={index}
                className="relative p-6 rounded-xl bg-white text-center overflow-hidden"
                style={{
                  border: `1px solid ${scheme.muted}`,
                  boxShadow: `0 10px 30px -10px ${scheme.base}40`
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${scheme.base} 0px, ${scheme.base} 2px, transparent 2px, transparent 10px)`
                  }}
                />
                
                <i className={`fas ${stat.icon} text-3xl mb-2`} style={{ color: scheme.base }} />
                <div className="text-3xl font-bold" style={{ color: scheme.dark }}>{stat.value}</div>
                <div className="text-sm" style={{ color: scheme.base }}>{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Team