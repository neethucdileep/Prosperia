import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to transform your business? Contact our experts for personalized solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
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
                  <option value="">Select Service</option>
                  <option value="hr">HR & Recruitment</option>
                  <option value="legal">Legal Consulting</option>
                  <option value="tech">Tech Services</option>
                  <option value="multiple">Multiple Services</option>
                </select>
                <textarea
                  placeholder="Tell us about your requirements"
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent-blue focus:outline-none resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're here to help you succeed. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">info@prospera-consulting.com</p>
                    <p className="text-gray-600">careers@prospera-consulting.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-600">+91 12345 67890</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-purple rounded-xl flex items-center justify-center text-white text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                    <a href="https://wa.me/911234567890" className="text-accent-blue hover:underline">
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Business District,<br />
                      Tech Park, Bangalore - 560001<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-gray-50">
                <h3 className="font-heading font-bold text-primary mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office for in-person consultations and meetings.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Google Map Integration</p>
                <p className="text-sm">Map will be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
