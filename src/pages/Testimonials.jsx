import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'Prospera helped us build our entire HR framework from scratch. Their recruitment process is exceptional and they found us the perfect candidates for our technical roles.',
      rating: 5,
      service: 'HR & Recruitment'
    },
    {
      name: 'Priya Sharma',
      company: 'HealthCare Plus',
      role: 'Founder',
      content: 'The legal team guided us through company registration and compliance. Highly professional service with clear communication throughout the process.',
      rating: 5,
      service: 'Legal Services'
    },
    {
      name: 'Amit Patel',
      company: 'E-Shop India',
      role: 'CTO',
      content: 'Their tech team delivered our MVP on time and within budget. Great communication throughout and excellent post-launch support.',
      rating: 5,
      service: 'Tech Services'
    },
    {
      name: 'Sneha Gupta',
      company: 'EduTech Innovations',
      role: 'HR Director',
      content: 'Outstanding payroll management services. They streamlined our entire payroll process and ensured complete compliance.',
      rating: 5,
      service: 'Payroll Management'
    },
    {
      name: 'Vikram Singh',
      company: 'Manufacturing Pro',
      role: 'Operations Head',
      content: 'Excellent POSH consulting services. They helped us establish proper policies and conducted comprehensive training sessions.',
      rating: 5,
      service: 'POSH Consulting'
    },
    {
      name: 'Anita Reddy',
      company: 'StartupHub',
      role: 'Co-founder',
      content: 'Complete legal support for our startup registration and MSME certification. Professional, efficient, and cost-effective.',
      rating: 5,
      service: 'Legal Services'
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
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Hear from businesses that have transformed with our expert HR, Legal, and Tech consulting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                  <div className="text-xs text-accent-blue mt-2 font-medium">{testimonial.service}</div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let us help you achieve similar results. Contact our experts today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="/about" className="btn-secondary">
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
