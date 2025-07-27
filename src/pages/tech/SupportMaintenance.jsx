import React from 'react'
import { motion } from 'framer-motion'

const SupportMaintenance = () => {
  const services = [
    {
      title: 'Website Hosting & Domain',
      description: 'Reliable web hosting with domain registration and SSL certificates for optimal performance.',
      icon: '🌐',
      features: ['99.9% Uptime', 'SSL Certificate', 'Domain Registration', 'CDN Integration'],
      timeline: 'Ongoing',
      price: 'Starting ₹5,000/year'
    },
    {
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC covering updates, backups, security patches, and technical support.',
      icon: '🔧',
      features: ['Regular Updates', 'Security Patches', 'Daily Backups', '24/7 Support'],
      timeline: 'Annual Contract',
      price: 'Starting ₹25,000/year'
    },
    {
      title: 'Security Monitoring',
      description: 'Advanced security monitoring with malware detection and vulnerability assessments.',
      icon: '🛡️',
      features: ['Malware Scanning', 'Firewall Protection', 'Security Audits', 'Threat Detection'],
      timeline: 'Continuous',
      price: 'Starting ₹15,000/year'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed optimization, database tuning, and performance monitoring for better user experience.',
      icon: '⚡',
      features: ['Speed Optimization', 'Database Tuning', 'Caching Setup', 'Performance Reports'],
      timeline: 'Quarterly',
      price: 'Starting ₹20,000/year'
    }
  ]

  const supportPlans = [
    {
      name: 'Basic Support',
      price: '₹10,000/year',
      features: [
        'Email Support',
        'Monthly Updates',
        'Basic Security Monitoring',
        'Backup & Restore',
        'Bug Fixes'
      ],
      popular: false
    },
    {
      name: 'Professional Support',
      price: '₹25,000/year',
      features: [
        'Priority Support',
        'Weekly Updates',
        'Advanced Security',
        'Performance Monitoring',
        'Content Updates',
        'SEO Maintenance'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: '₹50,000/year',
      features: [
        '24/7 Phone Support',
        'Real-time Updates',
        'Complete Security Suite',
        'Dedicated Account Manager',
        'Custom Development',
        'Analytics & Reporting'
      ],
      popular: false
    }
  ]

  const maintenanceTypes = [
    { name: 'Content Updates', description: 'Regular content updates and additions', icon: '📝' },
    { name: 'Security Updates', description: 'Security patches and vulnerability fixes', icon: '🔒' },
    { name: 'Performance Tuning', description: 'Speed optimization and performance improvements', icon: '🚀' },
    { name: 'Backup Management', description: 'Automated backups and disaster recovery', icon: '💾' },
    { name: 'Bug Fixes', description: 'Quick resolution of technical issues', icon: '🐛' },
    { name: 'Feature Enhancements', description: 'New features and functionality additions', icon: '✨' }
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
              Support & Maintenance
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive support services including hosting, domain setup, ongoing AMC, and security monitoring. 
              Keep your digital assets secure, updated, and performing at their best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Support Plan
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
              Our Support & Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hosting to ongoing maintenance, we provide comprehensive support to keep your digital presence running smoothly.
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
                      Duration: {service.timeline}
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

      {/* Support Plans */}
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
              Choose Your Support Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible support plans designed to meet your specific needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card relative ${plan.popular ? 'ring-2 ring-accent-green scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-accent-blue mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-500">per year</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="text-accent-green mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full btn-primary ${
                  plan.popular 
                    ? 'bg-accent-green hover:bg-green-600' 
                    : 'bg-primary hover:bg-blue-700'
                }`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Types */}
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
              Types of Maintenance We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep your digital assets secure, updated, and performing optimally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Support */}
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
              Why Choose Our Support Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide reliable, professional support services to ensure your digital presence remains strong and secure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '24/7 Monitoring', description: 'Round-the-clock monitoring and instant alerts', icon: '👁️' },
              { title: 'Quick Response', description: 'Fast response times and issue resolution', icon: '⚡' },
              { title: 'Expert Team', description: 'Experienced professionals handling your support', icon: '👥' },
              { title: 'Proactive Maintenance', description: 'Preventive measures to avoid issues', icon: '🔮' }
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
              Ready for Reliable Support?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't let technical issues slow down your business. 
              Get professional support and maintenance services that keep you running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Support Plan
              </a>
              <a href="/tech/mvp-development" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore MVP Development
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SupportMaintenance
