import React from 'react'
import { motion } from 'framer-motion'

const CompanyRegistration = () => {
  const services = [
    {
      title: 'Private Limited Company',
      description: 'Most popular business structure with limited liability and separate legal entity.',
      icon: '🏢',
      features: ['Limited Liability', 'Separate Legal Entity', 'Easy Fund Raising', 'Perpetual Succession'],
      timeline: '15-20 days',
      price: 'Starting ₹9,999'
    },
    {
      title: 'Limited Liability Partnership (LLP)',
      description: 'Hybrid structure combining benefits of partnership and company.',
      icon: '🤝',
      features: ['Limited Liability', 'Flexible Management', 'Tax Benefits', 'Easy Compliance'],
      timeline: '10-15 days',
      price: 'Starting ₹7,999'
    },
    {
      title: 'One Person Company (OPC)',
      description: 'Perfect for single entrepreneurs wanting corporate benefits.',
      icon: '👤',
      features: ['Single Member', 'Limited Liability', 'Corporate Benefits', 'Easy Conversion'],
      timeline: '12-18 days',
      price: 'Starting ₹8,999'
    },
    {
      title: 'Partnership Firm',
      description: 'Traditional business structure for multiple partners.',
      icon: '👥',
      features: ['Easy Formation', 'Shared Responsibility', 'Tax Pass-through', 'Flexible Operations'],
      timeline: '5-7 days',
      price: 'Starting ₹5,999'
    }
  ]

  const documents = [
    { name: 'PAN Card', description: 'All directors/partners PAN cards' },
    { name: 'Aadhaar Card', description: 'Identity proof of all directors/partners' },
    { name: 'Address Proof', description: 'Registered office address proof' },
    { name: 'Passport Photo', description: 'Recent photographs of directors/partners' },
    { name: 'Bank Statement', description: 'Latest bank statements' },
    { name: 'Utility Bills', description: 'Electricity/water bills for address proof' }
  ]

  const benefits = [
    { title: 'Expert Guidance', description: 'Professional assistance throughout the process', icon: '🎓' },
    { title: 'Fast Processing', description: 'Quick turnaround with government approvals', icon: '⚡' },
    { title: 'Complete Support', description: 'End-to-end service with post-registration support', icon: '🔧' },
    { title: 'Affordable Pricing', description: 'Competitive pricing with transparent costs', icon: '💰' }
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
              Company Registration Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Complete company incorporation services for Private Limited, LLP, and OPC with expert guidance. 
              Start your business journey with proper legal foundation and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Register Your Company
              </a>
              <a href="/legal" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Legal Services
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
              Company Registration Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right business structure for your venture with our expert guidance and support.
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
                  Choose This Option
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
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
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential documents needed for company registration process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center bg-white border-l-4 border-accent-blue"
              >
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {doc.name}
                </h3>
                <p className="text-gray-600 text-sm">{doc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Registration Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional company registration services with complete support and guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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

      {/* Process Section */}
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
              Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and streamlined process to get your company registered quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your requirements and choose structure' },
              { step: '02', title: 'Documentation', description: 'Prepare and submit required documents' },
              { step: '03', title: 'Government Filing', description: 'File applications with ROC and other authorities' },
              { step: '04', title: 'Completion', description: 'Receive incorporation certificate and documents' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Register Your Company?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Start your business journey with proper legal foundation. Get expert guidance 
              and complete support for your company registration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Registration Process
              </a>
              <a href="/legal/compliance" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Compliance Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CompanyRegistration
