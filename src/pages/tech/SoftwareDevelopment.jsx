import React from 'react'
import { motion } from 'framer-motion'

const SoftwareDevelopment = () => {
  const services = [
    {
      title: 'Custom ERP Systems',
      description: 'Tailored enterprise resource planning solutions to streamline your business operations.',
      icon: '🏭',
      features: ['Inventory Management', 'Financial Reporting', 'HR Management', 'Analytics Dashboard'],
      timeline: '3-6 months',
      price: 'Starting ₹5,00,000'
    },
    {
      title: 'SaaS Platforms',
      description: 'Scalable software-as-a-service platforms with multi-tenant architecture.',
      icon: '☁️',
      features: ['Multi-Tenant', 'Subscription Billing', 'API Integration', 'Cloud Hosting'],
      timeline: '4-8 months',
      price: 'Starting ₹8,00,000'
    },
    {
      title: 'Client Portals',
      description: 'Secure client portals for document sharing, communication, and project management.',
      icon: '🔐',
      features: ['Document Management', 'Secure Login', 'Communication Tools', 'Project Tracking'],
      timeline: '2-4 months',
      price: 'Starting ₹3,00,000'
    },
    {
      title: 'Desktop Applications',
      description: 'Cross-platform desktop applications for Windows, Mac, and Linux systems.',
      icon: '💻',
      features: ['Cross-Platform', 'Offline Capability', 'Native Performance', 'Auto Updates'],
      timeline: '3-5 months',
      price: 'Starting ₹4,00,000'
    }
  ]

  const technologies = [
    { name: 'Python/Django', category: 'Backend', icon: '🐍' },
    { name: 'Node.js/Express', category: 'Backend', icon: '🟢' },
    { name: 'React/Angular', category: 'Frontend', icon: '⚛️' },
    { name: 'PostgreSQL/MongoDB', category: 'Database', icon: '🗄️' },
    { name: 'Docker/Kubernetes', category: 'DevOps', icon: '🐳' },
    { name: 'AWS/Azure', category: 'Cloud', icon: '☁️' }
  ]

  const industries = [
    { name: 'Healthcare', description: 'HIPAA-compliant medical software solutions', icon: '🏥' },
    { name: 'Finance', description: 'Secure financial management and trading platforms', icon: '💰' },
    { name: 'Education', description: 'Learning management and student information systems', icon: '🎓' },
    { name: 'Manufacturing', description: 'Production planning and quality management systems', icon: '🏭' },
    { name: 'Retail', description: 'Inventory management and POS systems', icon: '🛍️' },
    { name: 'Logistics', description: 'Supply chain and fleet management solutions', icon: '🚚' }
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
              Software Development
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Custom software solutions including internal ERP, client portals, and SaaS platforms. 
              Built with cutting-edge technologies to solve complex business challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your Software Project
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
              Our Software Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise software to SaaS platforms, we build scalable solutions that transform businesses.
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
              Enterprise-grade technologies and frameworks for robust, scalable software development.
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

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions tailored to meet the unique needs of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
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
              Our Development Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agile methodology with continuous integration and deployment for faster, reliable software delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Analysis & Planning', description: 'Requirements gathering, system architecture, and project roadmap', icon: '📋' },
              { title: 'Agile Development', description: 'Iterative development with regular feedback and continuous improvement', icon: '🔄' },
              { title: 'Quality Assurance', description: 'Comprehensive testing including unit, integration, and user acceptance testing', icon: '✅' },
              { title: 'Deployment & Support', description: 'Cloud deployment, monitoring, and ongoing maintenance support', icon: '🚀' }
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600">{approach.description}</p>
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
              Why Choose Our Software Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver software that drives results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Scalable Architecture', description: 'Built to handle growth and increasing user demands', icon: '📈' },
              { title: 'Security First', description: 'Enterprise-grade security and data protection measures', icon: '🔒' },
              { title: 'Expert Team', description: 'Experienced developers with deep domain knowledge', icon: '👥' },
              { title: 'Agile Process', description: 'Flexible development process with regular updates', icon: '⚡' },
              { title: 'Quality Assurance', description: 'Rigorous testing and quality control processes', icon: '🎯' },
              { title: 'Ongoing Support', description: '24/7 support and maintenance services', icon: '🛠️' }
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
              Ready to Build Your Custom Software?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with custom software solutions that streamline operations and drive growth. 
              Let's discuss your requirements and build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your Software Project
              </a>
              <a href="/tech/mobile-app-development" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Mobile Development
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SoftwareDevelopment
