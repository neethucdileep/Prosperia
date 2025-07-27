import React from 'react'
import { motion } from 'framer-motion'
import { MagneticElement, Card3D, FloatingElement } from './ScrollSystem'

// Ultra-Modern Glass Card
export const GlassCard = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "glass-card",
    hero: "glass-card bg-gradient-to-br from-white/20 to-white/5 border-white/30",
    service: "glass-card hover:bg-gradient-to-br hover:from-accent-blue/20 hover:to-accent-purple/10",
    testimonial: "glass-card bg-gradient-to-br from-accent-green/10 to-accent-blue/5"
  }

  return (
    <Card3D className={`${variants[variant]} ${className}`}>
      {children}
    </Card3D>
  )
}

// Modern Button with Advanced Effects
export const ModernButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  onClick,
  ...props 
}) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-accent-blue/60"
  }

  const sizes = {
    sm: "py-3 px-6 text-sm",
    md: "py-4 px-8 text-base",
    lg: "py-5 px-10 text-lg"
  }

  return (
    <MagneticElement strength={0.2}>
      <motion.button
        className={`${variants[variant]} ${sizes[size]} ${className} relative overflow-hidden group`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green opacity-0 group-hover:opacity-20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    </MagneticElement>
  )
}

// Animated Counter
export const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ textContent: 0 }}
        whileInView={{ textContent: value }}
        transition={{ duration, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      {suffix}
    </motion.span>
  )
}

// Modern Service Card
export const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <GlassCard variant="service" className="h-full">
        <div className="relative">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Icon */}
          <FloatingElement delay={index * 0.5}>
            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
          </FloatingElement>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-accent-blue transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              {service.description}
            </p>
            
            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center text-white/70"
                >
                  <motion.span 
                    className="text-accent-green mr-3 text-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <ModernButton 
              variant="primary" 
              className="w-full group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent-blue"
            >
              Explore Service
            </ModernButton>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

// Modern Testimonial Card
export const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard variant="testimonial" className="h-full">
        {/* Rating Stars */}
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index * 0.1) + (i * 0.1) }}
              viewport={{ once: true }}
              className="text-yellow-400 text-xl mr-1"
            >
              ★
            </motion.span>
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-white/90 mb-6 italic leading-relaxed text-lg">
          "{testimonial.content}"
        </blockquote>
        
        {/* Author Info */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
              <div className="text-white/60 text-sm">{testimonial.company}</div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

// Modern Industry Card
export const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-accent-blue/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div 
            className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {industry.icon}
          </motion.div>
          <h3 className="font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 text-sm">
            {industry.name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

// Modern Stats Counter
export const StatsCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="relative p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md group hover:bg-white/15 transition-all duration-500">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <motion.div 
            className="text-4xl font-bold text-accent-green mb-2"
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </motion.div>
          <div className="text-white/80 text-sm">{stat.label}</div>
        </div>
      </div>
    </motion.div>
  )
}

// Modern Form Input
export const ModernInput = ({ type = "text", placeholder, className = "", ...props }) => {
  return (
    <div className="relative group">
      <input
        type={type}
        placeholder={placeholder}
        className={`modern-input ${className}`}
        {...props}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

// Modern Textarea
export const ModernTextarea = ({ placeholder, rows = 4, className = "", ...props }) => {
  return (
    <div className="relative group">
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`modern-input resize-none ${className}`}
        {...props}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

// Modern Select
export const ModernSelect = ({ options, placeholder, className = "", ...props }) => {
  return (
    <div className="relative group">
      <select className={`modern-input ${className}`} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-dark-200 text-white">
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
