import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Services': [
      { name: 'Staff Recruitment (IT & Non-IT)', href: '/recruitment' },
      { name: 'Legal Consulting', href: '/tech' },
      { name: 'Tech Services', href: '/tech' },
      { name: 'Industries We Serve', href: '/industries' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' }
    ],
    'Legal': [
      { name: 'Drafting & Vetting Service Agreements', href: '/legal/drafting-vetting' },
      { name: 'Compliance', href: '/legal/compliance' },
      { name: 'MSME Registration', href: '/legal/msme-startup' },
      { name: 'Practice Areas', href: '/legal/practice-areas' },
      { name: 'Company Registration', href: '/legal/company-registration' }
    ],
    'Tech': [
      { name: 'MVP Development', href: '/tech/mvp-development' },
      { name: 'Website Development', href: '/tech/website-development' },
      { name: 'Mobile Apps', href: '/tech/mobile-app-development' },
      { name: 'Support & Maintenance', href: '/tech/support-maintenance' }
    ]
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-heading font-bold text-white">PROSPERIA INFOTECH</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional Staff Recruitment Services for IT & Non-IT, Technology Solutions and Legal Services. 
              Expert recruitment, software development and legal consulting solutions 
              for businesses of all sizes.
            </p>
            
            {/* Company Address */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">PROSPERIA INFOTECH PRIVATE LIMITED</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                18/417 A, Poolanthara, Pothencode,<br />
                Koliyacodu, Trivandrum 695589, Kerala
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-accent-blue">📧</span>
                <a href="mailto:sales@prosperiainfotech.com" className="text-gray-300 hover:text-white transition-colors">
                  sales@prosperiainfotech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent-green">📞</span>
                <a href="tel:+919809174291" className="text-gray-300 hover:text-white transition-colors">
                  +91 9809174291
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent-purple">💬</span>
                <a href="https://wa.me/919809174291" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-accent-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on HR compliance, legal changes, and tech trends.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-accent-blue focus:outline-none"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent-blue transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent-blue transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent-blue transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright & Legal Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <span>© {currentYear} PROSPERIA INFOTECH PRIVATE LIMITED. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
