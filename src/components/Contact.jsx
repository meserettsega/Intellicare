import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Comprehensive HSL Color Architecture
const contactColors = {
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
    lightGray: 'hsl(0, 0%, 85%)'
  },

  status: {
    success: 'hsl(145, 70%, 45%)',
    error: 'hsl(350, 85%, 60%)',
    warning: 'hsl(40, 95%, 55%)',
    info: 'hsl(205, 90%, 50%)'
  }
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState(null)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      console.log('Form submitted:', formData)
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus(null)
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      details: ['Bole Sub-city, Addis Ababa', 'Ethiopia'],
      color: 'blue',
      action: 'Get Directions'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Call Us',
      details: ['+251-911-234-567', '+251-116-789-012'],
      color: 'emerald',
      action: 'Call Now'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      details: ['contact@thebitweavers.com', 'support@bitweavers.com'],
      color: 'blue',
      action: 'Send Email'
    },
    {
      icon: 'fa-clock',
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 - 18:00', 'Sat: 9:00 - 13:00'],
      color: 'emerald',
      action: 'Schedule Meeting'
    }
  ]

  const getColorScheme = (colorName) => {
    return contactColors.primary[colorName] || contactColors.primary.blue
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, ${contactColors.primary.blue.soft} 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            opacity: 0.5
          }}
        />
        
        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${contactColors.primary.blue.soft} 0%, transparent 70%)`,
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
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
                background: contactColors.primary.blue.soft,
                color: contactColors.primary.blue.dark,
                border: `1px solid ${contactColors.primary.blue.muted}`
              }}
            >
              <i className="fas fa-headset mr-2" style={{ color: contactColors.primary.blue.base }}></i>
              24/7 Support
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${contactColors.primary.blue.base}, ${contactColors.primary.emerald.base})`
              }}
            >
              Touch
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto" style={{ color: contactColors.neutral.gray }}>
            Ready to transform your business? Let's talk about your project and how we can help
          </p>

          <motion.div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${contactColors.primary.blue.base}, ${contactColors.primary.emerald.base})`
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: '6rem' } : {}}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const scheme = getColorScheme(info.color)
              
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  style={{
                    boxShadow: `0 15px 30px -15px ${scheme.base}80`,
                    border: `1px solid ${scheme.muted}`
                  }}
                >
                  {/* Card Pattern */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, ${scheme.base} 2px, transparent 2px)`,
                      backgroundSize: '30px 30px'
                    }}
                  />

                  <div className="relative p-6">
                    <div className="flex items-start">
                      {/* Icon Container */}
                      <motion.div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${scheme.soft}, ${contactColors.neutral.white})`,
                          border: `2px solid ${scheme.base}`,
                          boxShadow: `0 10px 20px -10px ${scheme.base}`
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <i className={`fas ${info.icon} text-2xl`} style={{ color: scheme.base }}></i>
                        
                        {/* Icon Glow */}
                        <motion.div 
                          className="absolute inset-0"
                          style={{
                            background: `radial-gradient(circle, ${scheme.base}40, transparent)`
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      <div>
                        <h3 className="font-semibold text-lg mb-2" style={{ color: scheme.dark }}>
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm" style={{ color: contactColors.neutral.gray }}>
                            {detail}
                          </p>
                        ))}
                        
                        {/* Action Link */}
                        <motion.a
                          href="#"
                          className="inline-flex items-center gap-2 mt-3 text-sm font-medium"
                          style={{ color: scheme.base }}
                          whileHover={{ x: 5 }}
                        >
                          {info.action}
                          <i className="fas fa-arrow-right text-xs"></i>
                        </motion.a>
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 w-12 h-12">
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: scheme.base }} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div 
              className="relative bg-white rounded-3xl p-8 overflow-hidden"
              style={{
                boxShadow: `0 30px 60px -30px ${contactColors.primary.blue.base}`,
                border: `1px solid ${contactColors.primary.blue.muted}`
              }}
            >
              {/* Form Background Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, ${contactColors.primary.blue.base} 0px, ${contactColors.primary.blue.base} 2px, transparent 2px, transparent 20px)`
                }}
              />

              {/* Form Header */}
              <div className="relative mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: contactColors.primary.blue.dark }}>
                  Send us a Message
                </h3>
                <p className="text-sm" style={{ color: contactColors.neutral.gray }}>
                  We'll get back to you within 24 hours
                </p>
                <div 
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${contactColors.primary.blue.soft}, transparent)`,
                    filter: 'blur(20px)'
                  }}
                />
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: contactColors.neutral.dark }}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                        style={{
                          border: `2px solid ${focusedField === 'name' ? contactColors.primary.blue.base : contactColors.neutral.lightGray}`,
                          backgroundColor: contactColors.neutral.white,
                          color: contactColors.neutral.dark
                        }}
                        placeholder="John Doe"
                      />
                      {focusedField === 'name' && (
                        <motion.div 
                          className="absolute -bottom-1 left-0 h-0.5"
                          style={{
                            background: contactColors.primary.blue.gradient
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: contactColors.neutral.dark }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                        style={{
                          border: `2px solid ${focusedField === 'email' ? contactColors.primary.blue.base : contactColors.neutral.lightGray}`,
                          backgroundColor: contactColors.neutral.white,
                          color: contactColors.neutral.dark
                        }}
                        placeholder="john@company.com"
                      />
                      {focusedField === 'email' && (
                        <motion.div 
                          className="absolute -bottom-1 left-0 h-0.5"
                          style={{
                            background: contactColors.primary.blue.gradient
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: contactColors.neutral.dark }}>
                    Company Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                      style={{
                        border: `2px solid ${focusedField === 'company' ? contactColors.primary.blue.base : contactColors.neutral.lightGray}`,
                        backgroundColor: contactColors.neutral.white,
                        color: contactColors.neutral.dark
                      }}
                      placeholder="Your Company (Optional)"
                    />
                    {focusedField === 'company' && (
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5"
                        style={{
                          background: contactColors.primary.blue.gradient
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: contactColors.neutral.dark }}>
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                      style={{
                        border: `2px solid ${focusedField === 'message' ? contactColors.primary.blue.base : contactColors.neutral.lightGray}`,
                        backgroundColor: contactColors.neutral.white,
                        color: contactColors.neutral.dark
                      }}
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                    {focusedField === 'message' && (
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5"
                        style={{
                          background: contactColors.primary.blue.gradient
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden group"
                  style={{
                    background: contactColors.primary.blue.gradient,
                    boxShadow: `0 20px 40px -15px ${contactColors.primary.blue.base}`
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitStatus === 'sending'}
                >
                  {/* Shimmer Effect */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${contactColors.neutral.white}40, transparent)`
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

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {submitStatus === 'sending' ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <i className="fas fa-check-circle"></i>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-center" style={{ color: contactColors.neutral.gray }}>
                  By submitting, you agree to our{' '}
                  <a href="#" style={{ color: contactColors.primary.blue.base }}>Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" style={{ color: contactColors.primary.blue.base }}>Terms of Service</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section (Optional) */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div 
            className="relative h-64 rounded-3xl overflow-hidden"
            style={{
              border: `1px solid ${contactColors.primary.blue.muted}`,
              boxShadow: `0 20px 40px -20px ${contactColors.primary.blue.base}`
            }}
          >
            {/* Placeholder for Google Maps */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${contactColors.primary.blue.soft}, ${contactColors.primary.emerald.soft})`
              }}
            >
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-4xl mb-2" style={{ color: contactColors.primary.blue.base }}></i>
                <p style={{ color: contactColors.neutral.dark }}>Interactive Map Coming Soon</p>
                <p className="text-sm" style={{ color: contactColors.neutral.gray }}>Bole Sub-city, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact