import React from 'react'
import { motion } from 'framer-motion'

const MSMEStartup = () => {
  const services = [
    {
      title: 'MSME Registration (Udyam)',
      description: 'Micro, Small & Medium Enterprise registration for government benefits and subsidies.',
      icon: '🏭',
      features: ['Udyam Certificate', 'Government Subsidies', 'Easy Loans', 'Tax Benefits'],
      timeline: '7-10 days',
      price: 'Starting ₹2,999'
    },
    {
      title: 'Startup India Registration',
      description: 'Official Startup India recognition for funding opportunities and tax exemptions.',
      icon: '🚀',
      features: ['DPIIT Recognition', 'Tax Exemptions', 'IPR Benefits', 'Funding Access'],
      timeline: '15-20 days',
      price: 'Starting ₹4,999'
    },
    {
      title: 'ISO Certification',
      description: 'International quality standards certification for business credibility.',
      icon: '🏆',
      features: ['ISO 9001:2015', 'Quality Management', 'Global Recognition', 'Business Growth'],
      timeline: '30-45 days',
      price: 'Starting ₹15,999'
    },
    {
      title: 'GeM Registration',
      description: 'Government e-Marketplace registration for government tender participation.',
      icon: '🏛️',
      features: ['GeM Portal Access', 'Government Tenders', 'Direct Sales', 'Payment Security'],
      timeline: '5-7 days',
      price: 'Starting ₹1,999'
    }
  ]

  const benefits = [
    { title: 'Government Benefits', description: 'Access exclusive government schemes and subsidies', icon: '🎯' },
    { title: 'Easy Funding', description: 'Priority lending and funding opportunities', icon: '💰' },
    { title: 'Tax Advantages', description: 'Significant tax exemptions and benefits', icon: '📊' },
    { title: 'Market Access', description: 'Access to government tenders and contracts', icon: '🌐' }
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
              MSME / Startup India Registration
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Government registration and certification services including MSME, Startup India, and Udyam certificates. 
              Unlock government benefits, funding opportunities, and tax advantages for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Registered Today
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
              Our Registration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete government registration services to help your business access benefits and opportunities.
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
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Registration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock exclusive benefits and opportunities with government registrations.
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

      {/* Eligibility Criteria */}
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
              Eligibility Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if your business qualifies for MSME and Startup India benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-accent-blue/5 to-accent-purple/5"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">MSME Criteria</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Micro Enterprise</h4>
                  <p className="text-gray-600 text-sm">Investment: Up to ₹1 Crore | Turnover: Up to ₹5 Crore</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Small Enterprise</h4>
                  <p className="text-gray-600 text-sm">Investment: Up to ₹10 Crore | Turnover: Up to ₹50 Crore</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Medium Enterprise</h4>
                  <p className="text-gray-600 text-sm">Investment: Up to ₹50 Crore | Turnover: Up to ₹250 Crore</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-accent-green/5 to-accent-blue/5"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Startup Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <span className="text-accent-green mr-2">✓</span>
                  <span className="text-sm">Incorporated within last 10 years</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-accent-green mr-2">✓</span>
                  <span className="text-sm">Annual turnover less than ₹100 Crore</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-accent-green mr-2">✓</span>
                  <span className="text-sm">Working on innovation/improvement</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-accent-green mr-2">✓</span>
                  <span className="text-sm">Not formed by splitting existing business</span>
                </div>
              </div>
            </motion.div>
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
              Ready to Unlock Government Benefits?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't miss out on government benefits and funding opportunities. 
              Get your MSME or Startup India registration today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Registration Process
              </a>
              <a href="/legal/drafting-vetting" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Legal Drafting
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MSMEStartup
