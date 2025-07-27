import React from 'react'
import { motion } from 'framer-motion'

const BackgroundVerification = () => {
  const services = [
    {
      title: 'Employment Verification',
      description: 'Verify previous employment history, job titles, and work experience.',
      icon: '💼',
      features: ['Employment History', 'Job Title Verification', 'Salary Verification', 'Performance Records']
    },
    {
      title: 'Educational Verification',
      description: 'Authenticate educational qualifications, degrees, and certifications.',
      icon: '🎓',
      features: ['Degree Verification', 'Institution Validation', 'Grade Confirmation', 'Certificate Authentication']
    },
    {
      title: 'Criminal Background Check',
      description: 'Comprehensive criminal history screening and legal record verification.',
      icon: '🔍',
      features: ['Criminal Records', 'Court Cases', 'Legal History', 'Police Verification']
    },
    {
      title: 'Identity Verification',
      description: 'Validate personal identity documents and address verification.',
      icon: '🆔',
      features: ['ID Verification', 'Address Proof', 'PAN Validation', 'Aadhaar Verification']
    },
    {
      title: 'Reference Checks',
      description: 'Professional and personal reference verification from previous employers.',
      icon: '📞',
      features: ['Professional References', 'Character References', 'Supervisor Feedback', 'Peer Reviews']
    },
    {
      title: 'Credit History Check',
      description: 'Financial background verification and credit score assessment.',
      icon: '💳',
      features: ['Credit Score', 'Loan History', 'Financial Standing', 'Debt Analysis']
    }
  ]

  const benefits = [
    { title: 'Risk Mitigation', description: 'Reduce hiring risks and protect your organization', icon: '🛡️' },
    { title: 'Compliance Assurance', description: 'Ensure regulatory compliance in hiring', icon: '✅' },
    { title: 'Quality Hiring', description: 'Make informed hiring decisions with verified data', icon: '⭐' },
    { title: 'Fast Turnaround', description: 'Quick verification process within 3-7 days', icon: '⚡' }
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
              Background Verification Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive background checks and verification services to ensure secure and reliable hiring. 
              Protect your organization with thorough candidate screening and due diligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Request Verification
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
              Our Verification Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive background verification solutions to help you make informed hiring decisions.
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
              Why Choose Our Verification Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by hundreds of companies for reliable and thorough background verification.
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
              Our Verification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic and thorough approach to background verification ensuring accuracy and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Information Collection', description: 'Gather candidate details and consent' },
              { step: '02', title: 'Verification Process', description: 'Conduct thorough background checks' },
              { step: '03', title: 'Report Generation', description: 'Compile comprehensive verification report' },
              { step: '04', title: 'Delivery & Support', description: 'Deliver report with ongoing support' }
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
              Secure Your Hiring Process
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't take chances with your hiring decisions. Get comprehensive background verification 
              services to protect your organization and ensure quality hires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Verification Process
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

export default BackgroundVerification
