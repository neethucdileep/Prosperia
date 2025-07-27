import React from 'react'
import { motion } from 'framer-motion'

const Careers = () => {
  const openings = [
    {
      title: 'Senior HR Consultant',
      department: 'Human Resources',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead HR consulting projects and manage client relationships.'
    },
    {
      title: 'Legal Associate',
      department: 'Legal',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Handle corporate law matters and compliance requirements.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Technology',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Develop and maintain web applications and client projects.'
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Build your career with us and help businesses transform through expert consulting services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
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
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and be part of our growing team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <button className="btn-primary whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Resume */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Don't See a Perfect Match?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Submit your resume and we'll keep you in mind for future opportunities that match your skills and interests.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-accent-green">✓</span>
                  <span>We review all applications carefully</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-green">✓</span>
                  <span>Competitive compensation packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent-green">✓</span>
                  <span>Professional growth opportunities</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Submit Your Resume
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none"
                  required
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none">
                  <option value="">Select Department</option>
                  <option value="hr">Human Resources</option>
                  <option value="legal">Legal</option>
                  <option value="tech">Technology</option>
                  <option value="operations">Operations</option>
                </select>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">📄</div>
                  <p className="text-gray-600">Upload your resume (PDF, DOC, DOCX)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  <button type="button" className="btn-secondary mt-4">
                    Choose File
                  </button>
                </div>
                <textarea
                  placeholder="Cover letter or additional information"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
