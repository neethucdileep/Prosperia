import React from 'react'
import { motion } from 'framer-motion'

const MVPDevelopment = () => {
  const services = [
    {
      title: 'MVP Development',
      description: 'Rapid development of minimum viable products to validate your business idea with real users.',
      icon: '🚀',
      features: ['Quick Time-to-Market', 'User Validation', 'Cost-Effective', 'Scalable Architecture'],
      timeline: '4-8 weeks',
      price: 'Starting ₹2,50,000'
    },
    {
      title: 'Prototype Development',
      description: 'Interactive prototypes to visualize and test your product concept before full development.',
      icon: '🎯',
      features: ['Interactive Design', 'User Testing', 'Concept Validation', 'Investor Demos'],
      timeline: '2-4 weeks',
      price: 'Starting ₹75,000'
    },
    {
      title: 'Product Strategy',
      description: 'Comprehensive product strategy and roadmap development for successful market entry.',
      icon: '📊',
      features: ['Market Research', 'Feature Prioritization', 'Go-to-Market Strategy', 'Competitive Analysis'],
      timeline: '1-2 weeks',
      price: 'Starting ₹50,000'
    },
    {
      title: 'Technical Consulting',
      description: 'Expert technical guidance on architecture, technology stack, and development best practices.',
      icon: '⚙️',
      features: ['Architecture Design', 'Tech Stack Selection', 'Code Reviews', 'Performance Optimization'],
      timeline: 'Ongoing',
      price: 'Starting ₹25,000/month'
    }
  ]

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js/Express', category: 'Backend', icon: '🟢' },
    { name: 'Python/Django', category: 'Backend', icon: '🐍' },
    { name: 'MongoDB/PostgreSQL', category: 'Database', icon: '🗄️' },
    { name: 'AWS/Azure', category: 'Cloud', icon: '☁️' },
    { name: 'React Native/Flutter', category: 'Mobile', icon: '📱' }
  ]

  const process = [
    { step: 1, title: 'Discovery & Planning', description: 'Understanding your vision, market research, and feature prioritization', duration: '1 week' },
    { step: 2, title: 'Design & Prototyping', description: 'UI/UX design, wireframes, and interactive prototypes', duration: '1-2 weeks' },
    { step: 3, title: 'MVP Development', description: 'Core feature development with agile methodology', duration: '3-6 weeks' },
    { step: 4, title: 'Testing & Launch', description: 'Quality assurance, user testing, and market launch', duration: '1 week' },
    { step: 5, title: 'Iteration & Scale', description: 'User feedback integration and feature enhancement', duration: 'Ongoing' }
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
              MVP & Application Development
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Rapid prototyping and development of minimum viable products for startups and enterprises. 
              Validate your business idea, enter the market quickly, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your MVP Journey
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
              Our MVP Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to market-ready product, we help you build and launch successful MVPs.
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

      {/* Technologies */}
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
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks for robust, scalable MVP development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-primary mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Our MVP Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 5-step process to take your idea from concept to market-ready MVP.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1 card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-heading font-bold text-primary">
                      {step.title}
                    </h3>
                    <span className="bg-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our MVP Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver MVPs that succeed in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Rapid Development', description: 'Get to market 3x faster with our agile development approach', icon: '⚡' },
              { title: 'User-Centric Design', description: 'Focus on user experience and validation from day one', icon: '👥' },
              { title: 'Scalable Architecture', description: 'Built to scale as your user base and features grow', icon: '📈' },
              { title: 'Cost-Effective', description: 'Minimize development costs while maximizing value', icon: '💰' },
              { title: 'Expert Team', description: 'Experienced developers, designers, and product strategists', icon: '🏆' },
              { title: 'Post-Launch Support', description: 'Ongoing support and iteration based on user feedback', icon: '🔧' }
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
              Ready to Build Your MVP?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your innovative idea into a market-ready product. 
              Let's build an MVP that validates your concept and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-accent-green hover:bg-green-600">
                Start Your MVP Project
              </a>
              <a href="/tech/website-development" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Explore Website Development
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MVPDevelopment
