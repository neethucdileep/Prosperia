import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Recruitment = () => {
  const services = [
    {
      title: 'Permanent Hiring',
      description: 'End-to-end recruitment for permanent positions across IT and Non-IT domains.',
      icon: '👥',
      features: ['Technical Screening', 'Cultural Fit Assessment', 'Background Verification', 'Onboarding Support'],
      link: '/contact'
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for project-based and temporary requirements.',
      icon: '📋',
      features: ['Quick Deployment', 'Skill-based Matching', 'Compliance Management', 'Performance Tracking'],
      link: '/contact'
    },
    {
      title: 'Project-Based Hiring',
      description: 'Specialized teams for specific projects with defined timelines and deliverables.',
      icon: '🎯',
      features: ['Team Assembly', 'Project Management', 'Milestone Tracking', 'Quality Assurance'],
      link: '/contact'
    }
  ]

  const industries = [
    { name: 'Information Technology', roles: ['Software Developers', 'Data Scientists', 'DevOps Engineers', 'Product Managers'] },
    { name: 'Healthcare', roles: ['Medical Professionals', 'Healthcare Administrators', 'Research Scientists', 'Compliance Officers'] },
    { name: 'Finance & Banking', roles: ['Financial Analysts', 'Risk Managers', 'Compliance Officers', 'Investment Advisors'] },
    { name: 'Manufacturing', roles: ['Production Managers', 'Quality Engineers', 'Supply Chain Specialists', 'Safety Officers'] },
    { name: 'Education', roles: ['Academic Professionals', 'Administrative Staff', 'Research Associates', 'Training Specialists'] },
    { name: 'Retail & E-commerce', roles: ['Store Managers', 'Digital Marketing Specialists', 'Customer Service Representatives', 'Logistics Coordinators'] }
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
              IT & Non-IT Recruitment Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Connect with top talent across industries. Our comprehensive recruitment solutions 
              help you find the right candidates for permanent, contract, and project-based roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Hire Now
              </Link>
              <Link to="/recruitment/payroll-management" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Payroll Services
              </Link>
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
              Our Recruitment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to your business needs and industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Roles */}
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
              Industries & Roles We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in recruiting for diverse industries and roles, ensuring the perfect match for your requirements.
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
                className="card hover:shadow-xl"
              >
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {industry.name}
                </h3>
                <ul className="space-y-2">
                  {industry.roles.map((role) => (
                    <li key={role} className="flex items-center text-gray-600">
                      <span className="text-accent-blue mr-2">•</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Recruitment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined, efficient process that ensures quality hires and faster time-to-fill.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirement Analysis', description: 'Understanding your specific needs and job requirements' },
              { step: '02', title: 'Candidate Sourcing', description: 'Leveraging our network and databases to find qualified candidates' },
              { step: '03', title: 'Screening & Assessment', description: 'Comprehensive evaluation including technical and cultural fit' },
              { step: '04', title: 'Final Selection', description: 'Presenting top candidates and supporting the selection process' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl font-heading font-bold mb-6">
                Complete HR Solutions
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Beyond recruitment, we offer comprehensive HR services including payroll management, 
                POSH consulting, and background verification to support your complete HR needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/recruitment/payroll-management" className="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <div className="font-semibold">Payroll Management</div>
                </Link>
                <Link to="/recruitment/posh-consulting" className="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center">
                  <div className="text-4xl mb-3">🛡️</div>
                  <div className="font-semibold">POSH Consulting</div>
                </Link>
                <Link to="/recruitment/background-verification" className="card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-center">
                  <div className="text-4xl mb-3">🔍</div>
                  <div className="font-semibold">Background Verification</div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-gray-900"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Start Hiring Today
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none">
                  <option value="">Select Hiring Type</option>
                  <option value="permanent">Permanent Hiring</option>
                  <option value="contract">Contract Staffing</option>
                  <option value="project">Project-Based</option>
                </select>
                <textarea
                  placeholder="Job Requirements"
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-primary bg-accent-blue hover:bg-blue-700"
                >
                  Submit Requirement
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recruitment
