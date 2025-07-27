import React from 'react'
import { motion } from 'framer-motion'

const WebsiteDevelopment = () => {
  const services = [
    {
      title: 'Business Websites',
      description: 'Professional corporate websites that establish credibility and drive business growth.',
      icon: '🏢',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Professional Layout'],
      timeline: '2-4 weeks',
      price: 'Starting ₹25,000'
    },
    {
      title: 'E-commerce Stores',
      description: 'Full-featured online stores with payment integration and inventory management.',
      icon: '🛒',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      timeline: '4-8 weeks',
      price: 'Starting ₹75,000'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to maximize leads and conversions.',
      icon: '🎯',
      features: ['Conversion Focused', 'A/B Testing', 'Analytics Integration', 'Lead Capture'],
      timeline: '1-2 weeks',
      price: 'Starting ₹15,000'
    },
    {
      title: 'Web Applications',
      description: 'Custom web applications tailored to your specific business requirements.',
      icon: '⚙️',
      features: ['Custom Features', 'Database Integration', 'User Management', 'API Integration'],
      timeline: '6-12 weeks',
      price: 'Starting ₹1,50,000'
    }
  ]

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend', icon: '⚛️' },
    { name: 'WordPress', category: 'CMS', icon: '📝' },
    { name: 'Shopify', category: 'E-commerce', icon: '🛍️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'PHP/Laravel', category: 'Backend', icon: '🐘' },
    { name: 'MySQL/MongoDB', category: 'Database', icon: '🗄️' }
  ]

  const features = [
    { title: 'Responsive Design', description: 'Perfect display on all devices and screen sizes', icon: '📱' },
    { title: 'SEO Optimized', description: 'Built-in SEO best practices for better search rankings', icon: '🔍' },
    { title: 'Fast Loading', description: 'Optimized for speed and performance', icon: '⚡' },
    { title: 'Security', description: 'SSL certificates and security best practices', icon: '🔒' },
    { title: 'Analytics', description: 'Google Analytics and tracking integration', icon: '📊' },
    { title: 'Maintenance', description: 'Ongoing support and maintenance services', icon: '🔧' }
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
              Website Development
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Professional websites that drive business growth including business sites, landing pages, and e-commerce stores. 
              Built with modern technologies for optimal performance and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your Website Project
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
              Our Website Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple business websites to complex web applications, we deliver solutions that drive results.
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
              Modern technologies and frameworks for robust, scalable website development.
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

      {/* Features */}
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
              What Makes Our Websites Stand Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every website we build includes these essential features for optimal performance and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver high-quality websites on time and within budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements, goals, and target audience' },
              { step: '02', title: 'Design', description: 'Creating wireframes, mockups, and user experience design' },
              { step: '03', title: 'Development', description: 'Building your website with clean, efficient code' },
              { step: '04', title: 'Launch & Support', description: 'Testing, deployment, and ongoing maintenance' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center relative"
              >
                <div className="text-6xl font-bold text-accent-blue/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
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
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's create a professional website that represents your brand and drives business growth. 
              From concept to launch, we'll be with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your Website Project
              </a>
              <a href="/tech/software-development" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Software Development
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
