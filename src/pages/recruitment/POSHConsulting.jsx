import React from 'react'
import { motion } from 'framer-motion'

const POSHConsulting = () => {
  const services = [
    {
      title: 'POSH Policy Development',
      description: 'Comprehensive policy creation tailored to your organization\'s needs and industry requirements.',
      icon: '📋',
      features: ['Custom Policy Drafting', 'Legal Compliance Review', 'Industry-Specific Guidelines', 'Regular Updates']
    },
    {
      title: 'Internal Committee Formation',
      description: 'Expert guidance in setting up and training Internal Committees (IC) as per POSH Act requirements.',
      icon: '👥',
      features: ['Committee Structure', 'Member Selection', 'Training Programs', 'Process Documentation']
    },
    {
      title: 'POSH Training & Awareness',
      description: 'Comprehensive training programs for employees and management on POSH compliance.',
      icon: '🎓',
      features: ['Employee Workshops', 'Management Training', 'Awareness Campaigns', 'Regular Refreshers']
    },
    {
      title: 'Complaint Handling Support',
      description: 'Professional support in managing and resolving POSH complaints with sensitivity and compliance.',
      icon: '🛡️',
      features: ['Investigation Support', 'Documentation Assistance', 'Legal Guidance', 'Resolution Process']
    }
  ]

  const benefits = [
    { title: 'Legal Compliance', description: 'Ensure full compliance with POSH Act 2013', icon: '⚖️' },
    { title: 'Safe Workplace', description: 'Create a harassment-free work environment', icon: '🏢' },
    { title: 'Risk Mitigation', description: 'Reduce legal and reputational risks', icon: '🛡️' },
    { title: 'Employee Confidence', description: 'Build trust and confidence among employees', icon: '💪' }
  ]

  const requirements = [
    { size: '10+ Employees', description: 'Organizations with 10 or more employees must comply with POSH Act' },
    { committee: 'Internal Committee', description: 'Mandatory formation of Internal Committee for complaint handling' },
    { training: 'Regular Training', description: 'Periodic awareness and training programs for all employees' },
    { reporting: 'Annual Reporting', description: 'Submit annual reports to appropriate government authorities' }
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
              POSH Consulting Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Prevention of Sexual Harassment (POSH) compliance and training services to create safe, 
              respectful workplaces. Ensure legal compliance while fostering a culture of dignity and respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get POSH Consultation
              </a>
              <a href="/recruitment/payroll-management" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Payroll Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POSH Requirements */}
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
              POSH Act Compliance Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the mandatory requirements under the Sexual Harassment of Women at Workplace Act, 2013.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.size || req.committee || req.training || req.reporting}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center bg-gradient-to-br from-accent-blue/5 to-accent-purple/5"
              >
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {req.size || req.committee || req.training || req.reporting}
                </h3>
                <p className="text-gray-600">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our POSH Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive POSH compliance solutions to help you create and maintain a safe workplace environment.
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
              Benefits of POSH Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating a safe workplace environment benefits everyone - employees, management, and the organization.
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

      {/* Implementation Process */}
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
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing POSH compliance in your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Evaluate current policies and identify gaps' },
              { step: '02', title: 'Policy Development', description: 'Create comprehensive POSH policies' },
              { step: '03', title: 'Training & Setup', description: 'Conduct training and set up committees' },
              { step: '04', title: 'Ongoing Support', description: 'Provide continuous compliance support' }
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
              Ensure POSH Compliance Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't wait for compliance issues. Protect your organization and create a safe workplace 
              environment with our expert POSH consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get POSH Consultation
              </a>
              <a href="/recruitment/background-verification" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Background Verification
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default POSHConsulting
