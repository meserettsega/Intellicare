import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Stethoscope, Microscope, Receipt, Database, 
  Zap, Users, ArrowRight, CheckCircle2, Activity,
  LineChart, Search, ClipboardList, ShieldCheck, 
  Settings, FileText, BarChart3, Truck, Building2,
  HeartPulse, Syringe, Pill, Thermometer, Bone,
  Brain, Heart, Scissors, Eye, Ear
} from 'lucide-react';

// Assets (Assuming these paths are correct in your project)
import intellicareImg from '../assets/images/intelli.png';
import IntelliCareLogo from '../assets/images/intellilogo.png'; 
import HallelujahLogo from '../assets/images/haleluya.png';
import Betasaida from '../assets/images/bete.webp';
import EthiotebibLogo from '../assets/images/tebib.png';
import StPeterlogo from '../assets/images/haleluya.png';

// HSL Color Schemes for Healthcare
const healthcareColors = {
  primary: {
    teal: 'hsl(175, 85%, 40%)',      // Medical Teal
    blue: 'hsl(205, 90%, 50%)',       // Clinical Blue
    green: 'hsl(145, 70%, 45%)',       // Health Green
    purple: 'hsl(265, 80%, 55%)',      // Care Purple
    rose: 'hsl(350, 85%, 60%)',        // Vital Rose
    amber: 'hsl(40, 95%, 55%)',        // Alert Amber
    indigo: 'hsl(235, 85%, 60%)',      // Diagnostic Indigo
    emerald: 'hsl(160, 85%, 45%)'      // Wellness Emerald
  },
  secondary: {
    teal: 'hsl(175, 80%, 65%)',
    blue: 'hsl(205, 85%, 70%)',
    green: 'hsl(145, 65%, 65%)',
    purple: 'hsl(265, 75%, 70%)',
    rose: 'hsl(350, 80%, 75%)',
    amber: 'hsl(40, 90%, 70%)',
    indigo: 'hsl(235, 80%, 75%)',
    emerald: 'hsl(160, 80%, 65%)'
  },
  light: {
    teal: 'hsl(175, 85%, 95%)',
    blue: 'hsl(205, 90%, 95%)',
    green: 'hsl(145, 70%, 95%)',
    purple: 'hsl(265, 80%, 95%)',
    rose: 'hsl(350, 85%, 95%)',
    amber: 'hsl(40, 95%, 95%)',
    indigo: 'hsl(235, 85%, 95%)',
    emerald: 'hsl(160, 85%, 95%)'
  },
  dark: {
    teal: 'hsl(175, 85%, 25%)',
    blue: 'hsl(205, 90%, 30%)',
    green: 'hsl(145, 70%, 25%)',
    purple: 'hsl(265, 80%, 35%)',
    rose: 'hsl(350, 85%, 35%)',
    amber: 'hsl(40, 95%, 35%)',
    indigo: 'hsl(235, 85%, 35%)',
    emerald: 'hsl(160, 85%, 25%)'
  },
  accent: {
    teal: 'hsl(185, 85%, 45%)',
    blue: 'hsl(215, 90%, 55%)',
    green: 'hsl(155, 75%, 50%)',
    purple: 'hsl(275, 85%, 60%)',
    rose: 'hsl(360, 90%, 65%)',
    amber: 'hsl(50, 95%, 60%)',
    indigo: 'hsl(245, 90%, 65%)',
    emerald: 'hsl(170, 90%, 50%)'
  }
};

const mainFeatures = [
  {
    title: "MOH Smart Chart",
    desc: "Beautiful electronic version of standard paper charts. Chronological listing with smart filters and automated behind-the-scenes order routing.",
    icon: <ClipboardList />,
    scheme: 'teal',
    medicalIcon: HeartPulse,
    pattern: 'grid'
  },
  {
    title: "Lab Machine Integration",
    desc: "Direct protocol communication with lab devices. Reduces TAT and eliminates transcription errors by feeding results directly to physicians.",
    icon: <Microscope />,
    scheme: 'blue',
    medicalIcon: Syringe,
    pattern: 'dna'
  },
  {
    title: "Complex Pricing Engine",
    desc: "Handles intricate insurance schemes (e.g., 80% outpatient vs 100% emergency) effortlessly, relieving your finance team from tedious tasks.",
    icon: <Receipt />,
    scheme: 'rose',
    medicalIcon: Pill,
    pattern: 'cells'
  },
  {
    title: "Barcode Patient Tracking",
    desc: "Identify patients instantly with unique barcode scanning. Facilitates reception and verifies authenticity of paid services for a better CX.",
    icon: <Zap />,
    scheme: 'amber',
    medicalIcon: Thermometer,
    pattern: 'heartbeat'
  },
  {
    title: "Medical Inventory Core",
    desc: "Strict stock management and item allocation. Pharmacy transactions are logged in detail to eliminate revenue leaks and enhance visibility.",
    icon: <Database />,
    scheme: 'purple',
    medicalIcon: Bone,
    pattern: 'grid'
  },
  {
    title: "Automated Commissions",
    desc: "Calculate performance-based doctor commissions in seconds rather than weeks based on real-time activity logs.",
    icon: <Users />,
    scheme: 'indigo',
    medicalIcon: Brain,
    pattern: 'dna'
  },
  {
    title: "Extensive Reporting",
    desc: "Monitor revenue, track trends (new vs revisiting patients), and identify weak links or fast-moving drugs with on-demand reports.",
    icon: <LineChart />,
    scheme: 'emerald',
    medicalIcon: Heart,
    pattern: 'cells'
  },
  {
    title: "MOH Tally Sheets",
    desc: "Automated generation of mandatory Ministry of Health monthly reports and tally sheets at the click of a button.",
    icon: <FileText />,
    scheme: 'green',
    medicalIcon: Building2,
    pattern: 'heartbeat'
  }
];

const medicalStats = [
  { label: 'Patients Processed', value: '50K+', icon: Users, scheme: 'teal' },
  { label: 'Lab Integrations', value: '100+', icon: Microscope, scheme: 'blue' },
  { label: 'Daily Transactions', value: '10K+', icon: Receipt, scheme: 'purple' },
  { label: 'Data Security', value: '99.9%', icon: ShieldCheck, scheme: 'emerald' }
];

const IntelliCare = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const partners = [
    { name: "Hallelujah Hospital", logo: HallelujahLogo, scheme: 'teal' },
    { name: "Betasaida", logo: Betasaida, scheme: 'blue' },
    { name: "Ethiotebib general hospital", logo: EthiotebibLogo, scheme: 'purple' },
    { name: "Hallelujah Hospital", logo: StPeterlogo, scheme: 'rose' },
  ];

  const getScheme = (schemeName) => ({
    primary: healthcareColors.primary[schemeName],
    secondary: healthcareColors.secondary[schemeName],
    light: healthcareColors.light[schemeName],
    dark: healthcareColors.dark[schemeName],
    accent: healthcareColors.accent[schemeName],
    gradient: `linear-gradient(135deg, ${healthcareColors.primary[schemeName]} 0%, ${healthcareColors.secondary[schemeName]} 100%)`,
    shadow: `hsla(${schemeName === 'teal' ? '175, 85%, 40%' : 
            schemeName === 'blue' ? '205, 90%, 50%' :
            schemeName === 'green' ? '145, 70%, 45%' :
            schemeName === 'purple' ? '265, 80%, 55%' :
            schemeName === 'rose' ? '350, 85%, 60%' :
            schemeName === 'amber' ? '40, 95%, 55%' :
            schemeName === 'indigo' ? '235, 85%, 60%' :
            '160, 85%, 45%'}, 0.2)`
  });

  return (
    <section id="intellicare" ref={ref} className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Medical Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${healthcareColors.primary.teal} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${healthcareColors.primary.blue}10 0px, ${healthcareColors.primary.blue}10 2px, transparent 2px, transparent 20px)`
        }} />
      </div>

      {/* Animated Medical Icons Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const icons = [Heart, Brain, Activity, Stethoscope, Microscope];
          const Icon = icons[i % 5];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.03
              }}
              animate={{
                y: [0, 30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Icon size={40} color={healthcareColors.primary.teal} />
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HERO SECTION with HSL --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
              style={{
                background: healthcareColors.light.teal,
                border: `1px solid ${healthcareColors.primary.teal}`,
                boxShadow: `0 2px 8px ${healthcareColors.primary.teal}20`
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Activity size={14} style={{ color: healthcareColors.primary.teal }} />
              <span className="font-bold uppercase tracking-widest text-[10px]" style={{ color: healthcareColors.dark.teal }}>
                Enterprise Healthcare ERP
              </span>
            </motion.div>
            
            <div className="flex items-center gap-4 lg:gap-6 mb-6">
              <motion.img 
                src={IntelliCareLogo} 
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-2xl"
                initial={{ scale: 0, rotate: -20 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                style={{
                  boxShadow: `0 10px 30px -10px ${healthcareColors.primary.teal}`
                }}
              />
              <h2 className="text-6xl lg:text-7xl font-black tracking-tight">
                <span style={{ color: healthcareColors.dark.teal }}>Intelli</span>
                <span style={{ 
                  background: `linear-gradient(135deg, ${healthcareColors.primary.teal}, ${healthcareColors.secondary.teal})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Care</span>
              </h2>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed" style={{ color: healthcareColors.dark.teal }}>
              When a hospital grows, management becomes cumbersome. <span className="font-semibold" style={{ color: healthcareColors.primary.teal }}>IntelliCare</span> provides critical real-time insights with a design that makes complicated tasks look easy.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "One-click search & patient collaboration",
                "Seamless equipment integration",
                "Revenue monitoring & leakage prevention"
              ].map((text, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  key={i} 
                  className="flex items-center gap-3"
                >
                  <motion.div 
                    className="p-1 rounded-full"
                    style={{ background: healthcareColors.primary.teal }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 size={14} className="text-white" />
                  </motion.div>
                  <span className="font-medium" style={{ color: healthcareColors.dark.teal }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div 
              className="relative z-10 p-2 bg-white rounded-[2.5rem] border"
              style={{
                boxShadow: `0 30px 60px -20px ${healthcareColors.primary.teal}`,
                borderColor: healthcareColors.light.teal
              }}
            >
              <img src={intellicareImg} alt="Interface" className="rounded-[2rem] w-full shadow-inner" />
              
              {/* Floating medical icons */}
              <motion.div 
                className="absolute -top-4 -right-4 p-3 rounded-full bg-white"
                style={{
                  border: `2px solid ${healthcareColors.primary.blue}`,
                  boxShadow: `0 5px 15px ${healthcareColors.primary.blue}40`
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Stethoscope size={24} style={{ color: healthcareColors.primary.blue }} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -left-4 p-3 rounded-full bg-white"
                style={{
                  border: `2px solid ${healthcareColors.primary.green}`,
                  boxShadow: `0 5px 15px ${healthcareColors.primary.green}40`
                }}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Activity size={24} style={{ color: healthcareColors.primary.green }} />
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-[80px] -z-10"
              style={{
                background: `radial-gradient(circle, ${healthcareColors.primary.teal}30, transparent)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Medical Stats Strip */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {medicalStats.map((stat, index) => {
            const Icon = stat.icon;
            const scheme = getScheme(stat.scheme);
            return (
              <motion.div
                key={index}
                className="relative p-4 rounded-xl bg-white overflow-hidden"
                style={{
                  border: `1px solid ${scheme.light}`,
                  boxShadow: `0 5px 20px ${scheme.shadow}`
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Medical pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${scheme.primary} 0px, ${scheme.primary} 2px, transparent 2px, transparent 10px)`
                  }}
                />
                
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div 
                    className="p-2 rounded-lg"
                    style={{ background: scheme.light }}
                    whileHover={{ rotate: 360 }}
                  >
                    <Icon size={20} style={{ color: scheme.primary }} />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-2xl font-bold"
                      style={{ color: scheme.dark }}
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs" style={{ color: scheme.primary }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- PARTNERS SLIDER with HSL --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-sm font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: healthcareColors.primary.teal }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              A Proven Success Story
            </motion.h3>
            <motion.p 
              className="max-w-2xl mx-auto mb-8"
              style={{ color: healthcareColors.dark.teal }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
                Tailor-made from scratch to conform to the healthcare industry. Now running reliably for years in top-tier institutions.
            </motion.p>
            <motion.div 
              className="h-1 w-24 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, ${healthcareColors.primary.teal}, ${healthcareColors.secondary.teal})`
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: '6rem' } : {}}
              transition={{ delay: 0.4 }}
            />
          </div>
          
          <div className="relative flex overflow-x-hidden border-y py-16" style={{
            background: `linear-gradient(90deg, ${healthcareColors.light.teal}, ${healthcareColors.light.blue})`,
            borderColor: healthcareColors.primary.teal
          }}>
            <motion.div 
              className="flex whitespace-nowrap items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners, ...partners].map((partner, i) => {
                const scheme = getScheme(partner.scheme || 'teal');
                return (
                  <motion.div 
                    key={i} 
                    className="flex items-center justify-center px-10 group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center overflow-hidden p-6 transition-all duration-300"
                      style={{
                        boxShadow: `0 10px 30px -10px ${scheme.shadow}`,
                        border: `2px solid ${scheme.light}`
                      }}
                      whileHover={{
                        boxShadow: `0 20px 40px -10px ${scheme.primary}`,
                        borderColor: scheme.primary
                      }}
                    >
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    </motion.div>
                    
                    {/* Tooltip */}
                    <motion.div 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs whitespace-nowrap opacity-0 group-hover:opacity-100"
                      style={{
                        background: scheme.primary,
                        color: 'white'
                      }}
                    >
                      {partner.name}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>

        {/* --- FEATURE BENTO GRID with HSL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {mainFeatures.map((f, i) => {
            const scheme = getScheme(f.scheme);
            const MedicalIcon = f.medicalIcon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group bg-white rounded-[2.5rem] flex flex-col items-start overflow-hidden cursor-pointer transition-all duration-500"
                style={{
                  boxShadow: `0 10px 30px -5px ${scheme.shadow}, 0 0 0 1px ${scheme.light}`,
                  border: `1px solid ${scheme.light}`
                }}
              >
                {/* Medical Pattern Background */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: f.pattern === 'grid' ? 
                      `linear-gradient(90deg, ${scheme.primary}10 1px, transparent 1px), linear-gradient(0deg, ${scheme.primary}10 1px, transparent 1px)` :
                      f.pattern === 'dna' ?
                      `repeating-linear-gradient(45deg, ${scheme.primary}15 0px, ${scheme.primary}15 2px, transparent 2px, transparent 8px)` :
                      f.pattern === 'cells' ?
                      `radial-gradient(circle at 30% 30%, ${scheme.primary}15 2px, transparent 2px), radial-gradient(circle at 70% 70%, ${scheme.primary}15 2px, transparent 2px)` :
                      `repeating-linear-gradient(90deg, ${scheme.primary}20 0px, ${scheme.primary}20 4px, transparent 4px, transparent 12px)`,
                    backgroundSize: f.pattern === 'grid' ? '20px 20px' : '40px 40px'
                  }}
                />

                {/* Animated Border with Medical Theme */}
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
                    opacity: [0, 0.5, 0.8, 0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                />

                {/* Medical Corner Decorations */}
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

                {/* Medical Icon Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <MedicalIcon size={40} style={{ color: scheme.primary }} />
                </motion.div>

                <div className="h-full w-full p-8 relative flex flex-col items-start">
                  {/* Icon Container with Medical Theme */}
                  <motion.div 
                    className="mb-8 p-5 rounded-2xl relative z-10 transition-all duration-500 group-hover:shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${scheme.light} 0%, white 100%)`,
                      border: `2px solid ${scheme.primary}`,
                      boxShadow: `0 5px 15px ${scheme.shadow}`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${scheme.primary}`,
                        `0 0 20px ${scheme.primary}`,
                        `0 0 0px ${scheme.primary}`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Pulsing Ring */}
                    <motion.div 
                      className="absolute -inset-1 rounded-2xl"
                      style={{
                        border: `2px solid ${scheme.primary}`,
                        opacity: 0.3
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {React.cloneElement(f.icon, { 
                      className: `w-7 h-7 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`,
                      style: { color: scheme.primary }
                    })}
                    
                    {/* Medical Dots */}
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
                    className="text-xl font-bold mb-4 tracking-tight relative z-10 transition-all duration-300"
                    style={{ color: scheme.dark }}
                    whileHover={{ x: 5 }}
                  >
                    {f.title}
                  </motion.h3>
                  
                  <p className="leading-relaxed text-sm relative z-10 flex-grow" style={{ color: healthcareColors.dark.teal }}>
                    {f.desc}
                  </p>

                  {/* Action Indicator with Medical Pulse */}
                  <motion.div 
                    className="mt-6 flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    style={{ color: scheme.primary }}
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0.5
                    }}
                  >
                    Explore Module <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>

                  {/* Medical Heartbeat Line */}
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
        </div>

        {/* --- PERFORMANCE IMPACT BOX with HSL --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${healthcareColors.dark.teal}, ${healthcareColors.dark.blue})`
          }}
        >
          {/* Medical Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Floating Medical Icons */}
          <motion.div 
            className="absolute top-10 right-10"
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={60} className="text-white/10" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Activity size={80} className="text-white/10" />
          </motion.div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">The result? A 100% paperless modern hospital.</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                IntelliCare has processed <span className="text-teal-300 font-bold">tens of thousands</span> of patients and managed <span className="text-teal-300 font-bold">millions of Birrs</span> with outstanding accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  className="px-6 py-4 rounded-2xl border"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,255,255,0.2)'
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }}
                >
                  <p className="text-2xl font-bold text-teal-300">100%</p>
                  <p className="text-xs text-white/60">Accuracy</p>
                </motion.div>
                <motion.div 
                  className="px-6 py-4 rounded-2xl border"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,255,255,0.2)'
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }}
                >
                  <p className="text-2xl font-bold text-teal-300">MOH</p>
                  <p className="text-xs text-white/60">Compliant</p>
                </motion.div>
              </div>
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <motion.button 
                className="w-full py-5 rounded-2xl font-bold text-slate-900 transition-all flex items-center justify-center gap-3 group"
                style={{
                  background: 'white',
                  boxShadow: `0 10px 30px -5px ${healthcareColors.primary.teal}`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Transform Your Hospital 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
              <p className="text-white/60 text-sm italic">"A happy patient will always come back!"</p>
            </div>
          </div>
          
          <motion.div 
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[100px]"
            style={{
              background: `radial-gradient(circle, ${healthcareColors.primary.teal}40, transparent)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Medical Innovation Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-xl"
            style={{
              border: `1px solid ${healthcareColors.light.teal}`
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
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
              <Brain size={20} style={{ color: healthcareColors.primary.teal }} />
            </motion.div>
            <span className="text-sm font-medium" style={{ color: healthcareColors.dark.teal }}>
              ISO 13485 Certified • HIPAA Compliant • FDA Registered
            </span>
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <HeartPulse size={20} style={{ color: healthcareColors.primary.rose }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntelliCare;