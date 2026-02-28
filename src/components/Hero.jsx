import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ElephantCanvas from './ElephantCanvas'
import { useInView } from 'react-intersection-observer'

// Comprehensive HSL Color Architecture
const heroArchitecture = {
  // Primary Brand Colors
  primary: {
    emerald: {
      base: 'hsl(160, 85%, 40%)',
      light: 'hsl(160, 85%, 55%)',
      dark: 'hsl(160, 85%, 25%)',
      muted: 'hsl(160, 70%, 85%)',
      gradient: 'linear-gradient(135deg, hsl(160, 85%, 40%) 0%, hsl(160, 85%, 55%) 100%)'
    },
    teal: {
      base: 'hsl(175, 85%, 40%)',
      light: 'hsl(175, 85%, 55%)',
      dark: 'hsl(175, 85%, 25%)',
      muted: 'hsl(175, 70%, 85%)',
      gradient: 'linear-gradient(135deg, hsl(175, 85%, 40%) 0%, hsl(175, 85%, 55%) 100%)'
    },
    forest: {
      base: 'hsl(145, 70%, 42%)',
      light: 'hsl(145, 70%, 57%)',
      dark: 'hsl(145, 70%, 27%)',
      muted: 'hsl(145, 60%, 85%)',
      gradient: 'linear-gradient(135deg, hsl(145, 70%, 42%) 0%, hsl(145, 70%, 57%) 100%)'
    },
    mint: {
      base: 'hsl(150, 80%, 65%)',
      light: 'hsl(150, 80%, 75%)',
      dark: 'hsl(150, 80%, 35%)',
      muted: 'hsl(150, 70%, 90%)',
      gradient: 'linear-gradient(135deg, hsl(150, 80%, 65%) 0%, hsl(150, 80%, 75%) 100%)'
    }
  },

  // Healthcare-specific colors
  healthcare: {
    heartbeat: 'hsl(350, 85%, 60%)',
    ecg: 'hsl(145, 70%, 45%)',
    mri: 'hsl(205, 90%, 50%)',
    dna: 'hsl(265, 80%, 55%)',
    patient: 'hsl(40, 95%, 55%)',
    emergency: 'hsl(0, 85%, 60%)'
  },

  // Accent Colors
  accent: {
    gold: 'hsl(45, 95%, 55%)',
    amber: 'hsl(40, 95%, 55%)',
    rose: 'hsl(350, 85%, 60%)',
    purple: 'hsl(265, 80%, 55%)'
  },

  // Neutral Colors
  neutral: {
    white: 'hsl(0, 0%, 100%)',
    offWhite: 'hsl(0, 0%, 98%)',
    light: 'hsl(0, 0%, 96%)',
    medium: 'hsl(0, 0%, 90%)',
    dark: 'hsl(0, 0%, 20%)',
    black: 'hsl(0, 0%, 10%)'
  }
}

// Healthcare Algorithm Nodes
const healthcareNodes = [
  // Patient Journey Nodes
  { id: 'registration', x: 15, y: 30, label: 'Patient Registration', icon: 'fa-user-plus', type: 'patient' },
  { id: 'triage', x: 30, y: 25, label: 'Triage', icon: 'fa-notes-medical', type: 'assessment' },
  { id: 'consultation', x: 45, y: 35, label: 'Consultation', icon: 'fa-stethoscope', type: 'clinical' },
  { id: 'lab', x: 60, y: 20, label: 'Lab Tests', icon: 'fa-flask', type: 'diagnostic' },
  { id: 'imaging', x: 75, y: 30, label: 'Medical Imaging', icon: 'fa-x-ray', type: 'diagnostic' },
  { id: 'pharmacy', x: 85, y: 25, label: 'Pharmacy', icon: 'fa-pills', type: 'treatment' },
  
  // Clinical Nodes
  { id: 'doctor', x: 20, y: 60, label: 'Physician', icon: 'fa-user-md', type: 'clinical' },
  { id: 'nurse', x: 35, y: 70, label: 'Nursing Care', icon: 'fa-user-nurse', type: 'clinical' },
  { id: 'specialist', x: 50, y: 65, label: 'Specialist', icon: 'fa-brain', type: 'clinical' },
  { id: 'surgery', x: 65, y: 75, label: 'Surgery', icon: 'fa-scalpel', type: 'procedure' },
  { id: 'recovery', x: 80, y: 70, label: 'Recovery', icon: 'fa-heartbeat', type: 'monitoring' },
  
  // Administrative Nodes
  { id: 'billing', x: 25, y: 85, label: 'Billing', icon: 'fa-file-invoice', type: 'admin' },
  { id: 'insurance', x: 40, y: 90, label: 'Insurance', icon: 'fa-shield-alt', type: 'admin' },
  { id: 'records', x: 55, y: 80, label: 'Medical Records', icon: 'fa-folder-medical', type: 'data' },
  { id: 'reporting', x: 70, y: 85, label: 'Reporting', icon: 'fa-chart-line', type: 'analytics' }
]

// Healthcare Connections (Algorithmic paths)
const healthcareConnections = [
  // Patient Flow
  { from: 'registration', to: 'triage', type: 'patient', weight: 1.0 },
  { from: 'triage', to: 'consultation', type: 'patient', weight: 0.9 },
  { from: 'consultation', to: 'lab', type: 'referral', weight: 0.7 },
  { from: 'consultation', to: 'imaging', type: 'referral', weight: 0.6 },
  { from: 'consultation', to: 'pharmacy', type: 'prescription', weight: 0.8 },
  { from: 'lab', to: 'consultation', type: 'result', weight: 0.9 },
  { from: 'imaging', to: 'consultation', type: 'result', weight: 0.9 },
  { from: 'consultation', to: 'specialist', type: 'referral', weight: 0.5 },
  { from: 'specialist', to: 'surgery', type: 'procedure', weight: 0.4 },
  { from: 'surgery', to: 'recovery', type: 'post-op', weight: 1.0 },
  
  // Clinical Team Flow
  { from: 'doctor', to: 'nurse', type: 'collaboration', weight: 0.8 },
  { from: 'doctor', to: 'consultation', type: 'oversight', weight: 0.9 },
  { from: 'nurse', to: 'recovery', type: 'care', weight: 0.8 },
  { from: 'specialist', to: 'surgery', type: 'procedure', weight: 0.7 },
  
  // Administrative Flow
  { from: 'consultation', to: 'billing', type: 'financial', weight: 0.6 },
  { from: 'billing', to: 'insurance', type: 'claim', weight: 0.7 },
  { from: 'pharmacy', to: 'billing', type: 'transaction', weight: 0.5 },
  { from: 'records', to: 'reporting', type: 'data', weight: 0.8 },
  { from: 'consultation', to: 'records', type: 'documentation', weight: 0.9 }
]

// Cursor-Tracking Healthcare Network Component
const HealthcareNetwork = ({ mousePosition }) => {
  const [activeNodes, setActiveNodes] = useState([])
  const [dataPackets, setDataPackets] = useState([])
  
  useEffect(() => {
    // Find nodes near cursor
    if (mousePosition.x && mousePosition.y) {
      const nearNodes = healthcareNodes.filter(node => {
        const nodeX = (node.x / 100) * window.innerWidth
        const nodeY = (node.y / 100) * window.innerHeight
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - nodeX, 2) + 
          Math.pow(mousePosition.y - nodeY, 2)
        )
        return distance < 150
      })
      setActiveNodes(nearNodes.map(n => n.id))
      
      // Generate data packets along active connections
      const packets = []
      nearNodes.forEach(node => {
        healthcareConnections
          .filter(conn => conn.from === node.id || conn.to === node.id)
          .forEach(conn => {
            packets.push({
              id: `${conn.from}-${conn.to}-${Date.now()}`,
              from: conn.from,
              to: conn.to,
              progress: 0
            })
          })
      })
      
      if (packets.length > 0) {
        setDataPackets(prev => [...prev, ...packets].slice(-20))
      }
    }
  }, [mousePosition])
  
  useEffect(() => {
    // Animate data packets
    const interval = setInterval(() => {
      setDataPackets(prev => 
        prev
          .map(packet => ({
            ...packet,
            progress: packet.progress + 0.02
          }))
          .filter(packet => packet.progress < 1)
      )
    }, 50)
    
    return () => clearInterval(interval)
  }, [])
  
  const getNodeColor = (type) => {
    switch(type) {
      case 'patient': return heroArchitecture.healthcare.heartbeat
      case 'clinical': return heroArchitecture.primary.teal.base
      case 'diagnostic': return heroArchitecture.healthcare.mri
      case 'treatment': return heroArchitecture.healthcare.dna
      case 'procedure': return heroArchitecture.healthcare.emergency
      case 'admin': return heroArchitecture.accent.amber
      case 'data': return heroArchitecture.primary.forest.base
      default: return heroArchitecture.primary.emerald.base
    }
  }
  
  const getConnectionColor = (type) => {
    switch(type) {
      case 'patient': return heroArchitecture.healthcare.heartbeat
      case 'referral': return heroArchitecture.primary.teal.base
      case 'result': return heroArchitecture.healthcare.ecg
      case 'prescription': return heroArchitecture.healthcare.dna
      case 'procedure': return heroArchitecture.healthcare.emergency
      case 'financial': return heroArchitecture.accent.gold
      default: return heroArchitecture.primary.emerald.base
    }
  }
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
      {/* Connection Lines */}
      {healthcareConnections.map((conn, index) => {
        const fromNode = healthcareNodes.find(n => n.id === conn.from)
        const toNode = healthcareNodes.find(n => n.id === conn.to)
        if (!fromNode || !toNode) return null
        
        const isActive = activeNodes.includes(conn.from) || activeNodes.includes(conn.to)
        const color = getConnectionColor(conn.type)
        const strokeWidth = isActive ? 2 + conn.weight * 2 : 1
        
        return (
          <motion.line
            key={`conn-${index}`}
            x1={`${fromNode.x}%`}
            y1={`${fromNode.y}%`}
            x2={`${toNode.x}%`}
            y2={`${toNode.y}%`}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={isActive ? "none" : "5,5"}
            opacity={isActive ? 0.4 : 0.15}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.05 }}
          />
        )
      })}
      
      {/* Data Packets (Animated along connections) - NO UP/DOWN */}
      {dataPackets.map((packet, index) => {
        const fromNode = healthcareNodes.find(n => n.id === packet.from)
        const toNode = healthcareNodes.find(n => n.id === packet.to)
        if (!fromNode || !toNode) return null
        
        const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress
        const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress
        const connection = healthcareConnections.find(
          c => (c.from === packet.from && c.to === packet.to) ||
               (c.from === packet.to && c.to === packet.from)
        )
        const color = getConnectionColor(connection?.type || 'patient')
        
        return (
          <motion.circle
            key={`packet-${packet.id}-${index}`}
            cx={`${x}%`}
            cy={`${y}%`}
            r="4"
            fill={color}
            filter="url(#glow)"
            animate={{ r: [4, 6, 4] }} // Only size change, no scale array
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )
      })}
      
      {/* Healthcare Nodes - NO UP/DOWN */}
      {healthcareNodes.map((node) => {
        const isActive = activeNodes.includes(node.id)
        const color = getNodeColor(node.type)
        
        return (
          <g key={`node-${node.id}`}>
            {/* Node Glow when active - NO UP/DOWN */}
            {isActive && (
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="20"
                fill={color}
                opacity={0.1}
                animate={{
                  r: [20, 24, 20], // Pulse the radius instead of scale
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            
            {/* Node - NO UP/DOWN */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={isActive ? "8" : "6"}
              fill={color}
              filter="url(#glow)"
              animate={isActive ? {
                r: [8, 10, 8] // Pulse the radius instead of scale
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Node Label (shows on hover/active) - NO UP/DOWN */}
            {isActive && (
              <motion.text
                x={`${node.x}%`}
                y={`${node.y - 3}%`}
                textAnchor="middle"
                fill={color}
                fontSize="10"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} // Removed y animation
              >
                {node.label}
              </motion.text>
            )}
          </g>
        )
      })}
      
      {/* Glow Filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feMerge>
            <feMergeNode in="offsetblur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Gradient Definitions */}
        <linearGradient id="patientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={heroArchitecture.healthcare.heartbeat} stopOpacity="0.2" />
          <stop offset="50%" stopColor={heroArchitecture.healthcare.heartbeat} stopOpacity="0.8" />
          <stop offset="100%" stopColor={heroArchitecture.healthcare.heartbeat} stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ECG Heartbeat Line Component (Cursor follows)
const ECGLine = ({ mousePosition }) => {
  const [points, setPoints] = useState([])
  
  useEffect(() => {
    // Generate ECG pattern that responds to cursor
    if (mousePosition.x && mousePosition.y) {
      const time = Date.now() / 1000
      const newPoints = []
      
      for (let i = 0; i < 100; i++) {
        const x = i
        let y = 50 // Base line
        
        // ECG pattern - KEEP THIS AS IT'S THE ECG WAVE ITSELF
        if (i > 20 && i < 30) {
          y = 50 - Math.sin((i - 20) * Math.PI) * 30 // QRS complex
        } else if (i > 40 && i < 50) {
          y = 50 + Math.sin((i - 40) * Math.PI) * 20 // T wave
        } else {
          y = 50 + Math.sin(i * 0.5 + time) * 5 // Baseline variation
        }
        
        // Cursor influence
        const cursorInfluence = Math.exp(-Math.pow((i - (mousePosition.x / 10)), 2) / 100) * 10
        y += cursorInfluence * Math.sin(time * 5)
        
        newPoints.push({ x, y })
      }
      
      setPoints(newPoints)
    }
  }, [mousePosition])
  
  const pathData = points.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ')
  
  return (
    <svg className="absolute bottom-20 left-0 right-0 h-32 pointer-events-none" style={{ zIndex: 3, opacity: 0.3 }}>
      <motion.path
        d={pathData}
        stroke={heroArchitecture.healthcare.heartbeat}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  )
}

// Patient Data Flow Visualization - NO UP/DOWN
const PatientDataFlow = ({ mousePosition }) => {
  const [dataPoints, setDataPoints] = useState([])
  
  useEffect(() => {
    if (mousePosition.x && mousePosition.y) {
      // Generate data points around cursor
      const newPoints = []
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2
        const radius = 50
        newPoints.push({
          x: mousePosition.x / window.innerWidth * 100 + Math.cos(angle) * radius / 10,
          y: mousePosition.y / window.innerHeight * 100 + Math.sin(angle) * radius / 10,
          data: ['HR', 'BP', 'SpO2', 'Temp', 'RR'][i],
          value: Math.floor(Math.random() * 100) + 50
        })
      }
      setDataPoints(newPoints)
    }
  }, [mousePosition])
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 3 }}>
      {dataPoints.map((point, i) => (
        <g key={`data-${i}`}>
          <motion.circle
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="15"
            fill={heroArchitecture.healthcare.ecg}
            opacity={0.1}
            animate={{
              r: [15, 18, 15], // Pulse radius instead of scale
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
          <motion.text
            x={`${point.x}%`}
            y={`${point.y}%`}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={heroArchitecture.healthcare.ecg}
            fontSize="10"
            fontWeight="bold"
          >
            {point.data}: {point.value}
          </motion.text>
        </g>
      ))}
    </svg>
  )
}

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { 
      number: '50+', 
      label: 'Healthcare Partners', 
      scheme: 'emerald',
      icon: 'fa-hospital'
    },
    { 
      number: '100+', 
      label: 'Projects Delivered', 
      scheme: 'teal',
      icon: 'fa-rocket'
    },
    { 
      number: '25+', 
      label: 'Expert Engineers', 
      scheme: 'forest',
      icon: 'fa-users-gear'
    },
    { 
      number: '10+', 
      label: 'Years Experience', 
      scheme: 'mint',
      icon: 'fa-calendar'
    },
  ]

  const fullText = "Weaving Digital Excellence"
  const typingSpeed = 100 
  const [displayedText, setDisplayedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (!inView) return
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) {
        clearInterval(interval)
        const cursorInterval = setInterval(() => {
          setCursorVisible(prev => !prev)
        }, 500)
        return () => clearInterval(cursorInterval)
      }
    }, typingSpeed)
    return () => clearInterval(interval)
  }, [inView])

  const getColorScheme = (schemeName) => {
    const scheme = heroArchitecture.primary[schemeName] || heroArchitecture.primary.emerald
    return {
      ...scheme,
      base: scheme.base || scheme,
      light: scheme.light || scheme,
      dark: scheme.dark || scheme,
      muted: scheme.muted || `${scheme}80`,
      gradient: scheme.gradient || `linear-gradient(135deg, ${scheme.base} 0%, ${scheme.light} 100%)`
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${heroArchitecture.primary.emerald.muted} 0%, ${heroArchitecture.neutral.white} 50%, ${heroArchitecture.primary.teal.muted} 100%)`
      }}
    >
      {/* Healthcare Network Visualization */}
      <HealthcareNetwork mousePosition={mousePosition} />
      
      {/* Patient Data Flow */}
      <PatientDataFlow mousePosition={mousePosition} />
      
      {/* ECG Heartbeat Line */}
      <ECGLine mousePosition={mousePosition} />

      {/* Base Pattern Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, ${heroArchitecture.primary.emerald.base}08 1px, transparent 1px), 
                            linear-gradient(0deg, ${heroArchitecture.primary.emerald.base}08 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Elephant Canvas Layer */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <ElephantCanvas />
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Healthcare Badge with Pulse */}
          <motion.div 
            className="inline-block px-8 py-4 rounded-full mb-8 backdrop-blur-sm relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${heroArchitecture.primary.emerald.muted}, ${heroArchitecture.primary.teal.muted})`,
              border: `2px solid ${heroArchitecture.healthcare.heartbeat}`,
              boxShadow: `0 15px 35px -10px ${heroArchitecture.healthcare.heartbeat}`
            }}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <div className="relative z-10 flex items-center gap-3">
              <motion.i 
                className="fas fa-heartbeat"
                style={{ color: heroArchitecture.healthcare.heartbeat }}
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-semibold" style={{ color: heroArchitecture.primary.emerald.dark }}>
                Healthcare Technology Solutions
              </span>
              <motion.i 
                className="fas fa-star-of-life"
                style={{ color: heroArchitecture.healthcare.ecg }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span style={{ color: heroArchitecture.primary.emerald.dark }}>
              {displayedText}
            </span>
            
            <motion.span 
              className="inline-block w-[4px] h-[60px] ml-1 rounded-full relative"
              style={{
                background: heroArchitecture.healthcare.heartbeat,
                boxShadow: `0 0 20px ${heroArchitecture.healthcare.heartbeat}`
              }}
              animate={{
                opacity: cursorVisible ? 1 : 0
              }}
            />
            
            <br />
            
            <motion.span 
              className="relative inline-block"
              style={{
                backgroundImage: `linear-gradient(135deg, ${heroArchitecture.healthcare.heartbeat}, ${heroArchitecture.healthcare.ecg}, ${heroArchitecture.healthcare.mri}, ${heroArchitecture.healthcare.dna})`,
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Transforming Healthcare
              
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${heroArchitecture.healthcare.heartbeat}, ${heroArchitecture.healthcare.ecg}, ${heroArchitecture.healthcare.mri}, transparent)`
                }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-10"
            style={{ color: heroArchitecture.primary.emerald.dark }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Intelligent healthcare software solutions that connect every part of the patient journey,
            from registration to recovery, with real-time data flow and clinical decision support.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a 
              href="#services" 
              className="group relative px-10 py-4 rounded-xl font-bold text-white overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${heroArchitecture.healthcare.heartbeat}, ${heroArchitecture.healthcare.ecg})`,
                boxShadow: `0 15px 35px -10px ${heroArchitecture.healthcare.heartbeat}`
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, ${heroArchitecture.neutral.white}40, transparent)`
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
              
              <span className="relative z-10 flex items-center gap-3">
                Explore Healthcare Solutions
                <motion.i 
                  className="fas fa-arrow-right"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.a>

            <motion.a 
              href="#contact" 
              className="group relative px-10 py-4 rounded-xl font-bold overflow-hidden"
              style={{
                background: heroArchitecture.neutral.white,
                border: `2px solid ${heroArchitecture.healthcare.ecg}`,
                color: heroArchitecture.healthcare.ecg,
                boxShadow: `0 10px 25px -5px ${heroArchitecture.healthcare.ecg}40`
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${heroArchitecture.healthcare.ecg}10, transparent)`
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                Schedule Demo
                <motion.i 
                  className="fas fa-calendar-check"
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => {
            const scheme = getColorScheme(stat.scheme)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                className="group relative p-6 rounded-2xl bg-white overflow-hidden"
                style={{
                  border: `1px solid ${scheme.muted}`,
                  boxShadow: `0 15px 35px -15px ${scheme.base}40`
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Connection to cursor */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${scheme.base}10, transparent 70%)`
                  }}
                />
                
                {/* Medical Icon */}
                <motion.i 
                  className={`fas ${stat.icon} absolute top-3 right-3 text-3xl`}
                  style={{ color: `${scheme.base}20` }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Number with Vital Sign Animation */}
                <motion.div 
                  className="text-4xl font-bold mb-2 relative"
                  style={{ color: scheme.base }}
                >
                  {stat.number}
                  
                  <motion.div 
                    className="absolute -inset-2 rounded-full blur-xl"
                    style={{
                      background: scheme.base,
                      opacity: 0.2
                    }}
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </motion.div>
                
                {/* Label */}
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: scheme.dark }}>
                  {stat.label}
                </div>
                
                {/* ECG Line Animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${scheme.base}, transparent)`
                  }}
                  animate={{
                    scaleX: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Healthcare Data Flow Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`flow-${i}`}
              className="w-1 h-8 rounded-full"
              style={{
                background: heroArchitecture.healthcare[['heartbeat', 'ecg', 'mri', 'dna', 'patient'][i]]
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero