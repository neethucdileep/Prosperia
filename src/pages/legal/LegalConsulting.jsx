import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LegalConsulting = () => {
  const services = [
    {
      title: 'Company Registration',
      description: 'Complete company incorporation services for Private Limited, LLP, and OPC.',
      icon: '🏢',
      link: '/legal/company-registration',
      features: ['Pvt Ltd Registration', 'LLP Formation', 'OPC Setup', 'Name Approval']
    },
    {
      title: 'Compliance & Licenses',
      description: 'Comprehensive compliance management and licensing support.',
      icon: '📋',
      link: '/legal/compliance',
      features: ['PF/ESI Registration', 'Labour Licenses', 'GST Registration', 'Trade Licenses']
    },
    {
      title: 'MSME / Startup India',
      description: 'Government registration and certification services for small businesses.',
      icon: '🚀',
      link: '/legal/msme-startup',
      features: ['MSME Registration', 'Startup India', 'Udyam Certificate', 'Government Benefits']
    },
    {
      title: 'Legal Drafting & Vetting',
      description: 'Professional legal document preparation and review services.',
      icon: '📝',
      link: '/legal/drafting-vetting',
      features: ['MSA Drafting', 'SOW Preparation', 'NDA Creation', 'Work Orders']
    }
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
              Legal Consulting Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive legal solutions for businesses of all sizes. From company registration 
              to compliance management, we ensure your business operates within legal frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/legal/company-registration" className="btn-primary bg-accent-green hover:bg-green-600">
                Register Your Company
              </Link>
              <Link to="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Free Legal Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert legal guidance to help your business navigate complex regulations and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
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
                
                <Link
                  to={service.link}
                  className="block w-full btn-primary text-center group-hover:bg-accent-purple transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Legal Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise, transparent processes, and dedicated support for all your legal needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Legal Team', description: 'Qualified lawyers with industry expertise', icon: '⚖️' },
              { title: 'Fast Processing', description: 'Quick turnaround times for all services', icon: '⚡' },
              { title: 'Complete Support', description: 'End-to-end assistance and follow-up', icon: '🤝' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
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
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get expert legal guidance for your business. Schedule a consultation with our legal experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Schedule Consultation
              </Link>
              <Link to="/legal/practice-areas" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                View All Practice Areas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LegalConsulting
