import React from 'react'
import { motion } from 'framer-motion'

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Comprehensive corporate legal services including mergers, acquisitions, and governance.',
      icon: '🏢',
      services: ['M&A Advisory', 'Corporate Governance', 'Due Diligence', 'Board Resolutions'],
      expertise: 'Expert'
    },
    {
      title: 'Employment Law',
      description: 'Complete employment law solutions covering hiring, policies, and dispute resolution.',
      icon: '👥',
      services: ['Employment Contracts', 'HR Policies', 'Labor Disputes', 'Termination Procedures'],
      expertise: 'Specialist'
    },
    {
      title: 'Intellectual Property',
      description: 'IP protection services including trademarks, copyrights, and patent applications.',
      icon: '💡',
      services: ['Trademark Registration', 'Copyright Protection', 'Patent Filing', 'IP Litigation'],
      expertise: 'Advanced'
    },
    {
      title: 'Real Estate Law',
      description: 'Real estate legal services for property transactions and development projects.',
      icon: '🏠',
      services: ['Property Transactions', 'Title Verification', 'Lease Agreements', 'RERA Compliance'],
      expertise: 'Expert'
    },
    {
      title: 'Contract Law',
      description: 'Contract drafting, review, and dispute resolution for all business agreements.',
      icon: '📜',
      services: ['Contract Drafting', 'Agreement Review', 'Breach Resolution', 'Negotiation Support'],
      expertise: 'Specialist'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Regulatory compliance services across various industries and jurisdictions.',
      icon: '⚖️',
      services: ['Compliance Audits', 'Regulatory Filings', 'Policy Development', 'Risk Assessment'],
      expertise: 'Advanced'
    }
  ]

  const industries = [
    { name: 'Technology', description: 'Software, IT services, and digital transformation companies', icon: '💻' },
    { name: 'Healthcare', description: 'Medical devices, pharmaceuticals, and healthcare services', icon: '🏥' },
    { name: 'Financial Services', description: 'Banking, insurance, and fintech organizations', icon: '💰' },
    { name: 'Manufacturing', description: 'Industrial manufacturing and production companies', icon: '🏭' },
    { name: 'Real Estate', description: 'Property development and real estate investment firms', icon: '🏢' },
    { name: 'Startups', description: 'Early-stage companies and emerging businesses', icon: '🚀' }
  ]

  const legalServices = [
    { title: 'Legal Advisory', description: 'Strategic legal counsel for business decisions', icon: '📊' },
    { title: 'Litigation Support', description: 'Court representation and dispute resolution', icon: '🏤' },
    { title: 'Regulatory Filings', description: 'Government submissions and compliance documentation', icon: '📄' },
    { title: 'Due Diligence', description: 'Comprehensive legal and financial investigations', icon: '🔍' }
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
              Legal Practice Areas
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive legal services across Corporate Law, Employment Law, IP, Real Estate, and more. 
              Our expert legal team provides specialized counsel across diverse practice areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Legal Consultation
              </a>
              <a href="/legal" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Legal Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Overview */}
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
              Our Legal Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized legal services across multiple practice areas to meet all your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {area.expertise}
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{area.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-center text-gray-600">
                      <span className="text-accent-green mr-2">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-primary group-hover:bg-accent-purple transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our legal expertise spans across various industries, providing specialized counsel for sector-specific challenges.
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

      {/* Legal Services */}
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
              Comprehensive legal support services to address all aspects of your business legal needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services */}
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
              Why Choose Our Legal Practice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep legal expertise with practical business understanding to deliver results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Legal Team', description: 'Experienced lawyers with specialized domain knowledge', icon: '👨‍⚖️' },
              { title: 'Business-Focused', description: 'Legal solutions aligned with your business objectives', icon: '🎯' },
              { title: 'Proven Track Record', description: 'Successful outcomes across diverse legal matters', icon: '🏆' },
              { title: 'Cost-Effective', description: 'Transparent pricing with value-driven legal services', icon: '💰' }
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
              Need Expert Legal Counsel?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Whether you need corporate legal advice, employment law guidance, or IP protection, 
              our expert legal team is ready to help you navigate complex legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Schedule Legal Consultation
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

export default PracticeAreas
