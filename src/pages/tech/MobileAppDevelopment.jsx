import React from 'react'
import { motion } from 'framer-motion'

const MobileAppDevelopment = () => {
  const services = [
    {
      title: 'Native iOS Apps',
      description: 'High-performance native iOS applications built with Swift for optimal user experience.',
      icon: '🍎',
      features: ['Swift Development', 'App Store Optimization', 'iOS Guidelines', 'Performance Optimized'],
      timeline: '3-6 months',
      price: 'Starting ₹3,00,000'
    },
    {
      title: 'Native Android Apps',
      description: 'Feature-rich Android applications using Kotlin for seamless Android experience.',
      icon: '🤖',
      features: ['Kotlin Development', 'Material Design', 'Play Store Ready', 'Multi-Device Support'],
      timeline: '3-6 months',
      price: 'Starting ₹2,50,000'
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Cost-effective cross-platform solutions using React Native or Flutter.',
      icon: '🔄',
      features: ['Single Codebase', 'iOS & Android', 'Faster Development', 'Cost Effective'],
      timeline: '2-4 months',
      price: 'Starting ₹2,00,000'
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web applications that work like native apps with offline capabilities.',
      icon: '🌐',
      features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Cross-Platform'],
      timeline: '1-3 months',
      price: 'Starting ₹1,50,000'
    }
  ]

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform', icon: '⚛️' },
    { name: 'Flutter', category: 'Cross-Platform', icon: '🐦' },
    { name: 'Swift/iOS', category: 'Native', icon: '🍎' },
    { name: 'Kotlin/Android', category: 'Native', icon: '🤖' },
    { name: 'Firebase', category: 'Backend', icon: '🔥' },
    { name: 'AWS Mobile', category: 'Cloud', icon: '☁️' }
  ]

  const appTypes = [
    { name: 'E-commerce Apps', description: 'Shopping apps with payment integration and inventory management', icon: '🛍️' },
    { name: 'Social Media Apps', description: 'Community platforms with chat, media sharing, and social features', icon: '📱' },
    { name: 'Business Apps', description: 'Enterprise solutions for productivity and business management', icon: '💼' },
    { name: 'Healthcare Apps', description: 'Medical apps with appointment booking and health tracking', icon: '🏥' },
    { name: 'Education Apps', description: 'Learning platforms with interactive content and progress tracking', icon: '🎓' },
    { name: 'Food Delivery Apps', description: 'Restaurant and delivery apps with real-time tracking', icon: '🍔' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent-blue text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Native and cross-platform mobile applications for iOS and Android with modern UI/UX. 
              From concept to app store, we build mobile solutions that engage users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your App Project
              </a>
              <a href="/tech" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Tech Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Our Mobile App Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users love.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="text-sm text-accent-blue font-semibold mb-4">
                      Timeline: {service.timeline}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="text-accent-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-primary group-hover:bg-accent-purple transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge mobile development technologies for robust, scalable app development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-primary mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in developing various types of mobile applications across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {app.name}
                </h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-gradient-to-br from-accent-blue/5 to-accent-purple/5">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Our App Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive process from ideation to app store launch and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Strategy & Planning', description: 'Market research, feature planning, and technical architecture' },
              { step: '02', title: 'UI/UX Design', description: 'User-centered design with wireframes and interactive prototypes' },
              { step: '03', title: 'Development', description: 'Agile development with regular testing and quality assurance' },
              { step: '04', title: 'Testing & QA', description: 'Comprehensive testing across devices and operating systems' },
              { step: '05', title: 'Launch & Support', description: 'App store submission, marketing, and ongoing maintenance' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center relative"
              >
                <div className="text-4xl font-bold text-accent-blue/30 mb-4">{phase.step}</div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Why Choose Our Mobile App Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with user experience design to create apps that succeed in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'User-Centric Design', description: 'Focus on user experience and intuitive interface design', icon: '🎯' },
              { title: 'Performance Optimized', description: 'Fast, responsive apps with smooth animations and interactions', icon: '⚡' },
              { title: 'Cross-Platform Expertise', description: 'Native and cross-platform development capabilities', icon: '🔄' },
              { title: 'App Store Success', description: 'Proven track record of successful app store launches', icon: '🏆' },
              { title: 'Ongoing Support', description: 'Post-launch support, updates, and feature enhancements', icon: '🔧' },
              { title: 'Security First', description: 'Robust security measures and data protection protocols', icon: '🔒' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business idea into a successful mobile application. 
              From iOS to Android, we'll help you reach your audience wherever they are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your App Project
              </a>
              <a href="/tech/support-maintenance" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Support Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MobileAppDevelopment
