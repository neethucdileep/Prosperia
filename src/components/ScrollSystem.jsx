import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// Smooth Scroll Indicator
export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="scroll-indicator"
      style={{ scaleX }}
    />
  )
}

// Parallax Container
export const ParallaxContainer = ({ children, speed = 0.5, className = "" }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

// Horizontal Scroll Section - New CSS-based approach
export const HorizontalScrollSection = ({ children, className = "" }) => {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    const scrollContainer = scrollRef.current
    
    if (!container || !scrollContainer) return
    
    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const scrollWidth = scrollContainer.scrollWidth - scrollContainer.offsetWidth
      
      // Calculate scroll progress based on container position
      const scrollProgress = Math.max(0, Math.min(1, 
        (window.innerHeight - rect.top) / (containerHeight + window.innerHeight)
      ))
      
      // Apply horizontal scroll
      scrollContainer.scrollLeft = scrollProgress * scrollWidth
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={containerRef} 
      className={`relative py-20 ${className}`}
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden w-full px-8"
          style={{ 
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

// Scroll Reveal Animation
export const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Magnetic Effect Component
export const MagneticElement = ({ children, strength = 0.3 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return (
    <div ref={ref} className="magnetic transition-transform duration-300 ease-out">
      {children}
    </div>
  )
}

// Text Reveal Animation
export const TextReveal = ({ text, className = "" }) => {
  const words = text.split(' ')
  
  return (
    <div className={`text-reveal ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Floating Elements
export const FloatingElement = ({ children, delay = 0, duration = 6 }) => {
  return (
    <motion.div
      animate={{
        y: [-20, 20, -20],
        rotate: [-2, 2, -2]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className="floating"
    >
      {children}
    </motion.div>
  )
}

// 3D Card Effect
export const Card3D = ({ children, className = "" }) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
