import React from 'react'
import { motion } from 'framer-motion'

// Comprehensive HSL Color Architecture
const footerColors = {
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
    }
  },
  
  accent: {
    gold: 'hsl(45, 95%, 55%)',
    silver: 'hsl(0, 0%, 75%)',
    bronze: 'hsl(30, 80%, 50%)'
  },
  
  neutral: {
    white: 'hsl(0, 0%, 100%)',
    offWhite: 'hsl(0, 0%, 98%)',
    light: 'hsl(0, 0%, 96%)',
    medium: 'hsl(0, 0%, 90%)',
    dark: 'hsl(0, 0%, 20%)',
    gray: 'hsl(0, 0%, 45%)',
    lightGray: 'hsl(0, 0%, 85%)',
    darkGray: 'hsl(0, 0%, 25%)',
    charcoal: 'hsl(0, 0%, 15%)',
    black: 'hsl(0, 0%, 10%)'
  },

  social: {
    linkedin: 'hsl(200, 100%, 40%)',
    twitter: 'hsl(200, 100%, 50%)',
    facebook: 'hsl(220, 100%, 45%)',
    github: 'hsl(0, 0%, 20%)',
    instagram: 'hsl(340, 80%, 55%)',
    youtube: 'hsl(0, 100%, 50%)'
  }
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: ['About Us', 'Services', 'Products', 'Team', 'Careers'],
    resources: ['Blog', 'Case Studies', 'Documentation', 'Support', 'FAQ'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security']
  }

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', url: '#', color: footerColors.social.linkedin, name: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: '#', color: footerColors.social.twitter, name: 'Twitter' },
    { icon: 'fab fa-facebook-f', url: '#', color: footerColors.social.facebook, name: 'Facebook' },
    { icon: 'fab fa-github', url: '#', color: footerColors.social.github, name: 'GitHub' },
    { icon: 'fab fa-instagram', url: '#', color: footerColors.social.instagram, name: 'Instagram' },
    { icon: 'fab fa-youtube', url: '#', color: footerColors.social.youtube, name: 'YouTube' }
  ]

  const contactInfo = [
    { icon: 'fa-map-marker-alt', text: 'Bole Sub-city, Addis Ababa, Ethiopia' },
    { icon: 'fa-phone-alt', text: '+251-911-234-567' },
    { icon: 'fa-envelope', text: 'contact@thebitweavers.com' }
  ]

  return (
    <footer 
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${footerColors.neutral.black}, ${footerColors.neutral.charcoal})`
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, ${footerColors.primary.blue.soft} 1px, transparent 1px), 
                              linear-gradient(0deg, ${footerColors.primary.blue.soft} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.1
          }}
        />
        
        {/* Floating Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: `${i * 20}%`,
              top: `${i * 30}%`,
              background: `radial-gradient(circle, ${footerColors.primary.blue.soft} 0%, transparent 70%)`,
              filter: 'blur(60px)',
              opacity: 0.3
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info - Expanded */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated Logo */}
              <motion.div 
                className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: footerColors.primary.blue.gradient,
                  boxShadow: `0 10px 20px -5px ${footerColors.primary.blue.base}`
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    `0 10px 20px -5px ${footerColors.primary.blue.base}`,
                    `0 15px 30px -5px ${footerColors.primary.blue.light}`,
                    `0 10px 20px -5px ${footerColors.primary.blue.base}`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-code text-white text-2xl"></i>
                
                {/* Logo Glow */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${footerColors.neutral.white}80, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Company Name with Gradient */}
              <span 
                className="text-3xl font-bold"
                style={{
                  background: `linear-gradient(135deg, ${footerColors.neutral.white}, ${footerColors.primary.blue.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Bit Weavers
              </span>
            </motion.div>

            <motion.p 
              className="mb-6 leading-relaxed"
              style={{ color: footerColors.neutral.gray }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Weaving digital excellence through innovative software solutions for healthcare 
              and enterprises in Ethiopia and beyond.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: footerColors.primary.blue.soft,
                      border: `1px solid ${footerColors.primary.blue.muted}`
                    }}
                  >
                    <i className={`fas ${info.icon} text-sm`} style={{ color: footerColors.primary.blue.base }}></i>
                  </div>
                  <span className="text-sm" style={{ color: footerColors.neutral.lightGray }}>
                    {info.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social Links - FIXED ICON DISPLAY */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300"
                    style={{
                      background: link.color,
                      boxShadow: `0 5px 15px ${link.color}80`
                    }}
                  >
                    <i className={link.icon} style={{ color: 'white', fontSize: '1.2rem' }}></i>
                    
                    {/* Ripple Effect on Hover */}
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle at center, ${footerColors.neutral.white}80, transparent)`
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Pulsing Ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px solid ${footerColors.neutral.white}`,
                        opacity: 0
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <span 
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    style={{
                      background: footerColors.neutral.dark,
                      color: footerColors.neutral.white,
                      border: `1px solid ${link.color}`
                    }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 
                className="text-lg font-semibold mb-6 capitalize relative inline-block"
                style={{ color: footerColors.neutral.white }}
              >
                {category}
                
                {/* Underline */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-0.5"
                  style={{
                    background: footerColors.primary.blue.gradient,
                    width: '40px'
                  }}
                  animate={{
                    width: ['40px', '60px', '40px']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </h3>
              
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + linkIndex * 0.05 }}
                  >
                    <motion.a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm transition-all duration-300 group"
                      style={{ color: footerColors.neutral.gray }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ 
                          background: footerColors.primary.blue.base
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: linkIndex * 0.2
                        }}
                      />
                      <span className="group-hover:text-white transition-colors">
                        {link}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mb-12 p-8 rounded-2xl relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${footerColors.neutral.darkGray}, ${footerColors.neutral.charcoal})`,
            border: `1px solid ${footerColors.primary.blue.muted}`
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, ${footerColors.primary.blue.base} 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2" style={{ color: footerColors.neutral.white }}>
                Subscribe to Our Newsletter
              </h4>
              <p style={{ color: footerColors.neutral.gray }}>
                Get the latest updates on our products and services
              </p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-l-lg w-full md:w-64 outline-none"
                style={{
                  background: footerColors.neutral.dark,
                  border: `1px solid ${footerColors.neutral.gray}`,
                  color: footerColors.neutral.white
                }}
              />
              <motion.button 
                className="px-6 py-3 rounded-r-lg font-semibold text-white relative overflow-hidden"
                style={{
                  background: footerColors.primary.blue.gradient,
                  boxShadow: `0 10px 20px -5px ${footerColors.primary.blue.base}`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Subscribe</span>
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${footerColors.neutral.white}40, transparent)`
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
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t pt-8 mt-8"
          style={{ borderColor: footerColors.neutral.darkGray }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <motion.p 
              className="flex items-center gap-2"
              style={{ color: footerColors.neutral.gray }}
              whileHover={{ x: 5 }}
            >
              <i className="fas fa-copyright" style={{ color: footerColors.primary.blue.base }}></i>
              {currentYear} Bit Weavers. Crafted with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-heart" style={{ color: footerColors.accent.gold }}></i>
              </motion.span>
              {' '}in Ethiopia
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-6 mt-4 md:mt-0"
              style={{ color: footerColors.neutral.gray }}
            >
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Terms
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Cookies
              </motion.a>
              <motion.div 
                className="flex items-center gap-2"
                style={{ color: footerColors.neutral.gray }}
              >
                <i className="fas fa-map-marker-alt" style={{ color: footerColors.primary.blue.base }}></i>
                Addis Ababa, Ethiopia
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button 
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-50"
          style={{
            background: footerColors.primary.blue.gradient,
            boxShadow: `0 10px 20px -5px ${footerColors.primary.blue.base}`
          }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="fas fa-arrow-up text-white text-xl"></i>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer