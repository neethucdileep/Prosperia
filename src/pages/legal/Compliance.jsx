import React from 'react'
import { motion } from 'framer-motion'

const Compliance = () => {
  const services = [
    {
      title: 'PF & ESI Registration',
      description: 'Provident Fund and Employee State Insurance registration and compliance.',
      icon: '🏛️',
      features: ['PF Registration', 'ESI Registration', 'Monthly Returns', 'Compliance Management']
    },
    {
      title: 'Labour Licenses',
      description: 'All types of labour licenses including Contract Labour, Shops & Establishment.',
      icon: '📋',
      features: ['Contract Labour License', 'Shops & Establishment', 'Factory License', 'Trade License']
    },
    {
      title: 'GST Registration & Returns',
      description: 'Complete GST registration and monthly/quarterly return filing services.',
      icon: '📊',
      features: ['GST Registration', 'Monthly Returns', 'Quarterly Returns', 'Annual Returns']
    },
    {
      title: 'Professional Tax',
      description: 'Professional tax registration and compliance across all states.',
      icon: '💼',
      features: ['PT Registration', 'Monthly Payments', 'Annual Returns', 'Multi-state Compliance']
    },
    {
      title: 'Income Tax Compliance',
      description: 'Complete income tax compliance including TDS, advance tax, and returns.',
      icon: '📈',
      features: ['TDS Compliance', 'Advance Tax', 'Income Tax Returns', 'Tax Planning']
    },
    {
      title: 'ROC Compliance',
      description: 'Registrar of Companies compliance including annual filings and board resolutions.',
      icon: '🏢',
      features: ['Annual Filings', 'Board Resolutions', 'DIN/DSC', 'ROC Returns']
    }
  ]

  const benefits = [
    { title: 'Legal Protection', description: 'Stay protected from legal penalties and notices', icon: '🛡️' },
    { title: 'Expert Support', description: 'Professional guidance from compliance experts', icon: '👨‍💼' },
    { title: 'Timely Filing', description: 'Never miss compliance deadlines', icon: '⏰' },
    { title: 'Cost Effective', description: 'Affordable compliance solutions', icon: '💰' }
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
              Compliance & Licenses
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive compliance management including PF/ESI, Labour licenses, GST registration, and more. 
              Stay compliant with all regulatory requirements and avoid penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Compliance Support
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
              Our Compliance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete compliance solutions to keep your business legally compliant and penalty-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="text-accent-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our Compliance Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional compliance management to keep your business safe and legally compliant.
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

      {/* Compliance Calendar */}
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
              Key Compliance Deadlines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important compliance deadlines you need to track throughout the year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { deadline: '10th of Month', task: 'PF & ESI Returns', type: 'Monthly' },
              { deadline: '20th of Month', task: 'GST Returns (GSTR-1)', type: 'Monthly' },
              { deadline: '15th of Quarter', task: 'Advance Tax Payment', type: 'Quarterly' },
              { deadline: '30th September', task: 'Annual ROC Filings', type: 'Annual' }
            ].map((item, index) => (
              <motion.div
                key={item.deadline}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center bg-gradient-to-br from-accent-blue/5 to-accent-purple/5"
              >
                <div className="text-sm text-accent-blue font-semibold mb-2">{item.type}</div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {item.deadline}
                </h3>
                <p className="text-gray-600 text-sm">{item.task}</p>
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
              Stay Compliant, Stay Protected
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't risk penalties and legal issues. Get comprehensive compliance support 
              from our experts and focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Compliance Audit
              </a>
              <a href="/legal/msme-startup" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore MSME Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Compliance
