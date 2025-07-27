import React from 'react'
import { motion } from 'framer-motion'

const PayrollManagement = () => {
  const services = [
    {
      title: 'Complete Payroll Processing',
      description: 'End-to-end payroll management from salary calculation to disbursement.',
      icon: '💰',
      features: ['Salary Calculation', 'Tax Deductions', 'Statutory Compliance', 'Direct Bank Transfer']
    },
    {
      title: 'Statutory Compliance',
      description: 'Ensure full compliance with PF, ESI, TDS, and other statutory requirements.',
      icon: '📋',
      features: ['PF Management', 'ESI Processing', 'TDS Calculation', 'Labour Law Compliance']
    },
    {
      title: 'Payroll Reports & Analytics',
      description: 'Detailed payroll reports and analytics for better financial planning.',
      icon: '📊',
      features: ['Monthly Reports', 'Tax Reports', 'Cost Analysis', 'Compliance Reports']
    },
    {
      title: 'Employee Self-Service Portal',
      description: 'Digital platform for employees to access payslips and tax documents.',
      icon: '🖥️',
      features: ['Digital Payslips', 'Tax Documents', 'Leave Management', 'Expense Claims']
    }
  ]

  const benefits = [
    { title: 'Cost Effective', description: 'Reduce payroll processing costs by up to 40%', icon: '💵' },
    { title: 'Error-Free Processing', description: '99.9% accuracy in payroll calculations', icon: '✅' },
    { title: 'Timely Processing', description: 'Always on-time salary disbursement', icon: '⏰' },
    { title: 'Full Compliance', description: 'Stay compliant with all statutory requirements', icon: '🛡️' }
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
              Payroll Management Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive payroll solutions ensuring accurate, timely, and compliant salary processing 
              for your organization. Focus on your business while we handle your payroll complexities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Payroll Quote
              </a>
              <a href="/recruitment" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore HR Services
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
              Our Payroll Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete payroll management solutions designed to streamline your HR operations and ensure compliance.
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
              Why Choose Our Payroll Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of professional payroll management with our proven expertise.
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
              Our Payroll Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined, transparent process that ensures accuracy and compliance at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Data Collection', description: 'Gather employee data, attendance, and variable inputs' },
              { step: '02', title: 'Processing', description: 'Calculate salaries, taxes, and statutory deductions' },
              { step: '03', title: 'Verification', description: 'Quality check and approval process' },
              { step: '04', title: 'Disbursement', description: 'Salary transfer and report generation' }
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
              Ready to Streamline Your Payroll?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let us handle your payroll complexities while you focus on growing your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Free Consultation
              </a>
              <a href="/recruitment/posh-consulting" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore POSH Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PayrollManagement
