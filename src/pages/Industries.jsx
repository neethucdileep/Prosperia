import React from 'react'
import { motion } from 'framer-motion'

const Industries = () => {
  const industries = [
    {
      name: 'Startups & Entrepreneurs',
      icon: '🚀',
      description: 'Complete business setup, HR framework, and legal compliance for new ventures.',
      services: ['Company Registration', 'HR Setup', 'Legal Compliance', 'Tech Solutions']
    },
    {
      name: 'IT & Software',
      icon: '💻',
      description: 'Specialized recruitment, compliance, and technology services for tech companies.',
      services: ['Technical Recruitment', 'Software Development', 'IT Compliance', 'Digital Transformation']
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Healthcare-specific HR, regulatory compliance, and technology solutions.',
      services: ['Medical Staff Recruitment', 'Healthcare Compliance', 'HIPAA Consulting', 'Health Tech Solutions']
    },
    {
      name: 'BFSI (Banking, Financial Services, Insurance)',
      icon: '🏦',
      description: 'Financial sector expertise in recruitment, compliance, and fintech solutions.',
      services: ['Financial Recruitment', 'Regulatory Compliance', 'Risk Management', 'Fintech Development']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Industrial HR solutions, safety compliance, and manufacturing technology.',
      services: ['Industrial Recruitment', 'Safety Compliance', 'Quality Management', 'Manufacturing Tech']
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'Digital commerce expertise in staffing, legal frameworks, and platform development.',
      services: ['E-commerce Recruitment', 'Digital Compliance', 'Platform Development', 'Payment Solutions']
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Educational sector HR, regulatory compliance, and EdTech solutions.',
      services: ['Academic Recruitment', 'Education Compliance', 'EdTech Development', 'Training Solutions']
    },
    {
      name: 'Logistics',
      icon: '🚛',
      description: 'Supply chain HR, transportation compliance, and logistics technology.',
      services: ['Logistics Recruitment', 'Transportation Compliance', 'Supply Chain Tech', 'Fleet Management']
    },
    {
      name: 'Consulting',
      icon: '💼',
      description: 'Professional services recruitment, business compliance, and consulting tools.',
      services: ['Consultant Recruitment', 'Professional Compliance', 'Business Tools', 'Client Management']
    },
    {
      name: 'Civil, Construction, Electrical & EEE',
      icon: '🏗️',
      description: 'Engineering sector recruitment, safety compliance, and technical solutions.',
      services: ['Engineering Recruitment', 'Safety Compliance', 'Project Management', 'Technical Solutions']
    }
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
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Specialized expertise across diverse industries with tailored HR, Legal, and Tech solutions 
              that understand your unique business challenges and requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary mb-3">Our Services:</h4>
                  {industry.services.map((service) => (
                    <div key={service} className="flex items-center text-gray-600">
                      <span className="text-accent-blue mr-2">•</span>
                      {service}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full btn-primary group-hover:bg-accent-purple transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss how we can 
              tailor our services to meet your specific industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Discuss Your Needs
              </a>
              <a href="/about" className="btn-secondary">
                Learn About Our Approach
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries
