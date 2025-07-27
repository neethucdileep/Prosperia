import React from 'react'
import { motion } from 'framer-motion'

const TechCareers = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-primary to-accent-blue text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">
              Tech Careers
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Join our technology team and work on exciting projects with cutting-edge technologies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TechCareers
