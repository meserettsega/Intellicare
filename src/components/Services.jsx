import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceModal from "./ServiceModal";
import intellicareImg from '../assets/images/intelli.png';
import hcmsImg from '../assets/images/hcms.png';
import infrastructureImg from '../assets/images/it.png';

// HSL Color Schemes for Services
const serviceColors = {
  primary: {
    teal: 'hsl(175, 85%, 40%)',      // IntelliCare Teal
    green: 'hsl(145, 70%, 45%)',      // HCMS Green
    indigo: 'hsl(235, 85%, 60%)',     // Infrastructure Indigo
    blue: 'hsl(205, 90%, 50%)',       // Support Blue
    purple: 'hsl(265, 80%, 55%)',     // Innovation Purple
    rose: 'hsl(350, 85%, 60%)'        // Emergency Rose
  },
  secondary: {
    teal: 'hsl(175, 80%, 65%)',
    green: 'hsl(145, 65%, 65%)',
    indigo: 'hsl(235, 80%, 75%)',
    blue: 'hsl(205, 85%, 70%)',
    purple: 'hsl(265, 75%, 70%)',
    rose: 'hsl(350, 80%, 75%)'
  },
  light: {
    teal: 'hsl(175, 85%, 95%)',
    green: 'hsl(145, 70%, 95%)',
    indigo: 'hsl(235, 85%, 95%)',
    blue: 'hsl(205, 90%, 95%)',
    purple: 'hsl(265, 80%, 95%)',
    rose: 'hsl(350, 85%, 95%)'
  },
  dark: {
    teal: 'hsl(175, 85%, 25%)',
    green: 'hsl(145, 70%, 25%)',
    indigo: 'hsl(235, 85%, 35%)',
    blue: 'hsl(205, 90%, 30%)',
    purple: 'hsl(265, 80%, 35%)',
    rose: 'hsl(350, 85%, 35%)'
  },
  accent: {
    teal: 'hsl(185, 85%, 45%)',
    green: 'hsl(155, 75%, 50%)',
    indigo: 'hsl(245, 90%, 65%)',
    blue: 'hsl(215, 90%, 55%)',
    purple: 'hsl(275, 85%, 60%)',
    rose: 'hsl(360, 90%, 65%)'
  }
};

// Service patterns for backgrounds
const servicePatterns = {
  medical: 'radial-gradient(circle at 30% 30%, ${color}10 2px, transparent 2px)',
  tech: 'repeating-linear-gradient(45deg, ${color}08 0px, ${color}08 2px, transparent 2px, transparent 12px)',
  network: 'linear-gradient(90deg, ${color}05 1px, transparent 1px), linear-gradient(0deg, ${color}05 1px, transparent 1px)',
  pulse: 'repeating-linear-gradient(90deg, ${color}10 0px, ${color}10 4px, transparent 4px, transparent 20px)'
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'intellicare',
      icon: 'fa-hospital-user',
      scheme: 'teal',
      title: 'IntelliCare',
      description: 'A comprehensive hospital automation and EMR system tailor-made for Ethiopia.',
      features: ['Electronic Records', 'Paperless Workflow', 'Scalable Architecture', 'Pharmacy & Lab Integration'],
      details: 'IntelliCare revolutionizes healthcare operations by integrating all hospital functions into a single, intuitive platform. It is specifically optimized for the Ethiopian health system.',
      image: intellicareImg,
      pattern: 'medical',
      stats: [
        { label: 'Hospitals', value: '25+' },
        { label: 'Patients', value: '50K+' }
      ]
    },
    {
      id: 'bitweavers-hcms',
      icon: 'fa-users-gear',
      scheme: 'green',
      title: 'BitWeavers HCMS',
      description: 'Complete HR solution featuring flexible leave management and employee timelines.',
      features: ['HR Automation', 'Leave Management', 'Employee Timeline', 'Payroll Integration'],
      details: 'BitWeavers HCMS empowers organizations to manage human capital effectively with a social-media-style timeline and powerful automated payroll tools.',
      image: hcmsImg,
      pattern: 'pulse',
      stats: [
        { label: 'Employees', value: '10K+' },
        { label: 'Companies', value: '50+' }
      ]
    },
    {
      id: 'it-infrastructure',
      icon: 'fa-microchip',
      scheme: 'indigo',
      title: 'IT Infrastructure',
      description: 'Hardware, software, and network resources for modern enterprise IT environments.',
      features: ['Network Planning', 'Cloud Resources', 'Security Management', 'Server Configuration'],
      details: 'We provide the backbone of your digital presence, from secure server racks to complex cloud networking solutions that ensure 99.9% uptime.',
      image: infrastructureImg,
      pattern: 'network',
      stats: [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Projects', value: '100+' }
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -80,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  const getScheme = (schemeName) => ({
    primary: serviceColors.primary[schemeName],
    secondary: serviceColors.secondary[schemeName],
    light: serviceColors.light[schemeName],
    dark: serviceColors.dark[schemeName],
    accent: serviceColors.accent[schemeName],
    gradient: `linear-gradient(135deg, ${serviceColors.primary[schemeName]} 0%, ${serviceColors.secondary[schemeName]} 100%)`,
    shadow: `hsla(${schemeName === 'teal' ? '175, 85%, 40%' : 
            schemeName === 'green' ? '145, 70%, 45%' :
            schemeName === 'indigo' ? '235, 85%, 60%' :
            schemeName === 'blue' ? '205, 90%, 50%' :
            schemeName === 'purple' ? '265, 80%, 55%' :
            '350, 85%, 60%'}, 0.2)`
  });

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Service Icons */}
        {[...Array(15)].map((_, i) => {
          const icons = ['fa-heart-pulse', 'fa-brain', 'fa-microchip', 'fa-users', 'fa-network-wired'];
          const schemes = ['teal', 'green', 'indigo', 'blue', 'purple'];
          const scheme = getScheme(schemes[i % 5]);
          
          return (
            <motion.i
              key={i}
              className={`fas ${icons[i % 5]} absolute text-4xl`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: scheme.primary,
                opacity: 0.03
              }}
              animate={{
                y: [0, 30, 0],
                x: [0, 15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, ${serviceColors.primary.teal}05 1px, transparent 1px), 
                              linear-gradient(0deg, ${serviceColors.primary.teal}05 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER with HSL */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span 
              className="px-4 py-2 rounded-full text-sm font-semibold border"
              style={{
                background: serviceColors.light.teal,
                borderColor: serviceColors.primary.teal,
                color: serviceColors.dark.teal
              }}
            >
              <i className="fas fa-crown mr-2" style={{ color: serviceColors.accent.teal }}></i>
              Premium Solutions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span style={{ color: serviceColors.dark.teal }}>Our </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${serviceColors.primary.teal}, ${serviceColors.primary.green}, ${serviceColors.primary.indigo})`
              }}
            >
              Services
            </span>
          </h2>

          <motion.div 
            className="w-24 h-1.5 mx-auto rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${serviceColors.primary.teal}, ${serviceColors.primary.green}, ${serviceColors.primary.indigo})`
            }}
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <p className="text-lg max-w-2xl mx-auto" style={{ color: serviceColors.dark.teal }}>
            Producing reliable software solutions for the health industry and
            modern enterprises with precision and local expertise.
          </p>
        </motion.div>

        {/* SERVICE CARDS with HSL */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const scheme = getScheme(service.scheme);
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.04,
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white rounded-[2.5rem] cursor-pointer transition-all duration-500 overflow-hidden"
                style={{
                  boxShadow: `0 20px 40px -15px ${scheme.shadow}, 0 0 0 1px ${scheme.light}`,
                  border: `1px solid ${scheme.light}`
                }}
              >
                {/* Service Pattern Background */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: service.pattern === 'medical' ? 
                      `radial-gradient(circle at 30% 30%, ${scheme.primary} 2px, transparent 2px)` :
                      service.pattern === 'network' ?
                      `linear-gradient(90deg, ${scheme.primary} 1px, transparent 1px), linear-gradient(0deg, ${scheme.primary} 1px, transparent 1px)` :
                      service.pattern === 'pulse' ?
                      `repeating-linear-gradient(90deg, ${scheme.primary} 0px, ${scheme.primary} 4px, transparent 4px, transparent 20px)` :
                      `repeating-linear-gradient(45deg, ${scheme.primary} 0px, ${scheme.primary} 2px, transparent 2px, transparent 12px)`,
                    backgroundSize: service.pattern === 'network' ? '30px 30px' : '40px 40px'
                  }}
                />

                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                  animate={{
                    boxShadow: [
                      `0 0 0px 0px ${scheme.primary}`,
                      `0 0 0px 4px ${scheme.primary}`,
                      `0 0 0px 8px ${scheme.shadow}`,
                      `0 0 0px 4px ${scheme.primary}`,
                      `0 0 0px 0px ${scheme.primary}`,
                    ],
                    opacity: [0, 0.3, 0.5, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: scheme.primary }} />
                </div>
                <div className="absolute top-0 right-0 w-12 h-12">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 rounded-tr-2xl" style={{ borderColor: scheme.primary }} />
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12">
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 rounded-bl-2xl" style={{ borderColor: scheme.primary }} />
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12">
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: scheme.primary }} />
                </div>

                {/* Floating Service Icon */}
                <motion.div 
                  className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <i className={`fas ${service.icon} text-6xl`} style={{ color: scheme.primary }} />
                </motion.div>

                <div className="relative p-10">
                  {/* ICON BOX with HSL */}
                  <motion.div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 relative"
                    style={{
                      background: `linear-gradient(135deg, ${scheme.light} 0%, white 100%)`,
                      boxShadow: `0 10px 20px -5px ${scheme.shadow}`
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-dashed"
                      style={{ borderColor: scheme.primary }}
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Pulsing Ring */}
                    <motion.div 
                      className="absolute -inset-1 rounded-3xl"
                      style={{
                        border: `2px solid ${scheme.primary}`,
                        opacity: 0.3
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <i
                      className={`fas ${service.icon} text-3xl relative z-10`}
                      style={{ color: scheme.primary }}
                    ></i>

                    {/* Icon Dots */}
                    <motion.div 
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                      style={{ background: scheme.primary }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  <motion.h3 
                    className="text-2xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: scheme.dark }}
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="mb-6" style={{ color: serviceColors.dark.teal }}>
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-xs font-bold rounded-full"
                        style={{
                          background: scheme.light,
                          color: scheme.dark,
                          border: `1px solid ${scheme.primary}30`
                        }}
                        whileHover={{ scale: 1.05, background: scheme.primary, color: 'white' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    <span 
                      className="px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        background: scheme.primary,
                        color: 'white'
                      }}
                    >
                      +{service.features.length - 3}
                    </span>
                  </div>

                  {/* Stats Preview */}
                  <div className="flex gap-4 mb-6">
                    {service.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <motion.div 
                          className="text-lg font-bold"
                          style={{ color: scheme.primary }}
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs" style={{ color: serviceColors.dark.teal }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div 
                    className="flex items-center font-bold group-hover:translate-x-2 transition-transform cursor-pointer"
                    style={{ color: scheme.primary }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm mr-2">Learn More</span>
                    <motion.i 
                      className="fas fa-arrow-right text-xs"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.5
                      }}
                    />
                  </motion.div>

                  {/* Bottom Glow Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${scheme.primary}, ${scheme.secondary}, ${scheme.primary}, transparent)`
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {['ISO 27001 Certified', 'HIPAA Compliant', 'GDPR Ready', '99.9% Uptime'].map((badge, i) => {
            const schemes = ['teal', 'green', 'indigo', 'blue'];
            const scheme = getScheme(schemes[i]);
            
            return (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg"
                style={{
                  border: `1px solid ${scheme.light}`,
                  boxShadow: `0 5px 15px ${scheme.shadow}`
                }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <i className="fas fa-shield-alt text-xs" style={{ color: scheme.primary }} />
                </motion.div>
                <span className="text-xs font-medium" style={{ color: scheme.dark }}>
                  {badge}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* MODAL */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;