import React from 'react'
import { motion } from 'framer-motion'

const LegalDrafting = () => {
  const services = [
    {
      title: 'Master Service Agreements (MSA)',
      description: 'Comprehensive MSAs that establish long-term business relationships and protect your interests.',
      icon: '📋',
      features: ['Risk Mitigation', 'Payment Terms', 'Liability Clauses', 'Termination Rights'],
      timeline: '3-5 days',
      price: 'Starting ₹15,000'
    },
    {
      title: 'Statement of Work (SOW)',
      description: 'Detailed SOWs defining project scope, deliverables, timelines, and payment schedules.',
      icon: '📝',
      features: ['Project Scope', 'Deliverables', 'Milestones', 'Payment Schedule'],
      timeline: '2-3 days',
      price: 'Starting ₹8,000'
    },
    {
      title: 'Non-Disclosure Agreements (NDA)',
      description: 'Robust NDAs to protect confidential information and trade secrets in business dealings.',
      icon: '🔒',
      features: ['Confidentiality Protection', 'Trade Secrets', 'Mutual/Unilateral', 'Enforcement Terms'],
      timeline: '1-2 days',
      price: 'Starting ₹5,000'
    },
    {
      title: 'Work Orders & Contracts',
      description: 'Customized work orders and service contracts tailored to your specific business needs.',
      icon: '📄',
      features: ['Custom Terms', 'Service Specifications', 'Legal Compliance', 'Dispute Resolution'],
      timeline: '2-4 days',
      price: 'Starting ₹10,000'
    }
  ]

  const documentTypes = [
    { name: 'Employment Contracts', description: 'Comprehensive employment agreements and offer letters', icon: '👥' },
    { name: 'Partnership Agreements', description: 'Business partnership and joint venture agreements', icon: '🤝' },
    { name: 'Vendor Agreements', description: 'Supplier and vendor service agreements', icon: '🏪' },
    { name: 'Licensing Agreements', description: 'Software and intellectual property licensing contracts', icon: '⚖️' },
    { name: 'Lease Agreements', description: 'Commercial and residential lease documents', icon: '🏢' },
    { name: 'Sales Contracts', description: 'Purchase and sales agreement documentation', icon: '💼' }
  ]

  const vettingServices = [
    { title: 'Contract Review', description: 'Thorough review of existing contracts for risks and compliance', icon: '🔍' },
    { title: 'Legal Risk Assessment', description: 'Identification and mitigation of potential legal risks', icon: '⚠️' },
    { title: 'Compliance Check', description: 'Ensuring documents meet regulatory and legal requirements', icon: '✅' },
    { title: 'Amendment Drafting', description: 'Professional amendments and addendums to existing contracts', icon: '📑' }
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
              Legal Drafting & Vetting
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Professional legal document preparation including MSA, SOW, NDA, and Work Orders. 
              Protect your business interests with expertly drafted and vetted legal documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Legal Documents
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
              Our Legal Drafting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional legal document preparation services to protect your business and ensure compliance.
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

      {/* Document Types */}
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
              Types of Documents We Draft
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in drafting various types of legal documents to meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentTypes.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{doc.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {doc.name}
                </h3>
                <p className="text-gray-600">{doc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Services */}
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
              Document Vetting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional review and vetting of existing legal documents to ensure compliance and risk mitigation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vettingServices.map((service, index) => (
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

      {/* Process */}
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
              Our Drafting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure your legal documents are comprehensive, compliant, and protective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirement Analysis', description: 'Understanding your specific needs and business context' },
              { step: '02', title: 'Legal Research', description: 'Researching applicable laws and regulatory requirements' },
              { step: '03', title: 'Document Drafting', description: 'Professional drafting with attention to detail and compliance' },
              { step: '04', title: 'Review & Finalization', description: 'Thorough review and client approval before finalization' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center relative"
              >
                <div className="text-6xl font-bold text-accent-blue/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
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
              Why Choose Our Legal Drafting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine legal expertise with business understanding to create documents that truly protect your interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Expert Legal Team', description: 'Experienced lawyers with deep domain knowledge', icon: '👨‍⚖️' },
              { title: 'Business Focus', description: 'Documents tailored to your specific business needs', icon: '🎯' },
              { title: 'Quick Turnaround', description: 'Fast delivery without compromising on quality', icon: '⚡' },
              { title: 'Compliance Assured', description: 'Full compliance with applicable laws and regulations', icon: '✅' },
              { title: 'Risk Mitigation', description: 'Comprehensive protection against legal risks', icon: '🛡️' },
              { title: 'Ongoing Support', description: 'Continued support for amendments and clarifications', icon: '🤝' }
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
              Need Professional Legal Documents?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Protect your business with expertly drafted legal documents. 
              From NDAs to complex MSAs, we ensure your interests are fully protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Get Legal Documents
              </a>
              <a href="/legal/practice-areas" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Practice Areas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LegalDrafting
