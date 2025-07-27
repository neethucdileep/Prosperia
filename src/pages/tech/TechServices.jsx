import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TechServices = () => {
  const services = [
    {
      title: 'MVP & Application Development',
      description: 'Rapid prototyping and development of minimum viable products for startups and enterprises.',
      icon: '🚀',
      link: '/tech/mvp-development',
      features: ['Web Apps', 'SaaS MVPs', 'Startup Tech Consulting', 'Rapid Prototyping']
    },
    {
      title: 'Website Development',
      description: 'Professional websites that drive business growth and enhance your online presence.',
      icon: '🌐',
      link: '/tech/website-development',
      features: ['Business Websites', 'Landing Pages', 'E-commerce Stores', 'CMS Solutions']
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements.',
      icon: '💻',
      link: '/tech/software-development',
      features: ['Custom Tools', 'Internal ERP', 'Client Portals', 'SaaS Platforms']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      link: '/tech/mobile-app-development',
      features: ['iOS Apps', 'Android Apps', 'Cross-platform', 'App Store Deployment']
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
              Software & IT Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Transform your business with cutting-edge technology solutions. From MVP development 
              to enterprise software, we deliver scalable and innovative tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tech/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Request Tech Quote
              </Link>
              <Link to="/tech/mvp-development" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore MVP Services
              </Link>
            </div>
          </motion.div>
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
              Why Choose Our Tech Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', description: 'Experienced developers and architects', icon: '👨‍💻' },
              { title: 'Agile Process', description: 'Fast delivery with iterative development', icon: '⚡' },
              { title: 'Scalable Solutions', description: 'Built for growth and future expansion', icon: '📈' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
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
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="text-accent-blue mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="block w-full btn-primary text-center group-hover:bg-accent-purple transition-colors"
                >
                  Learn More
                </Link>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create a technology solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tech/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your Project
              </Link>
              <Link to="/tech/support-maintenance" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Support Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TechServices
