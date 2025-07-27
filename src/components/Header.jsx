import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/'
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Recruitment', 
      href: '/recruitment',
      submenu: [
        { name: 'IT & Non-IT Recruitment', href: '/recruitment' },
        { name: 'Payroll Management', href: '/recruitment/payroll-management' },
        { name: 'POSH Consulting', href: '/recruitment/posh-consulting' },
        { name: 'Background Verification', href: '/recruitment/background-verification' }
      ]
    },
    { 
      name: 'Legal', 
      href: '/legal',
      submenu: [
        { name: 'Company Registration', href: '/legal/company-registration' },
        { name: 'Compliance & Licenses', href: '/legal/compliance' },
        { name: 'MSME / Startup India', href: '/legal/msme-startup' },
        { name: 'Drafting & Vetting', href: '/legal/drafting-vetting' },
        { name: 'Practice Areas', href: '/legal/practice-areas' }
      ]
    },
    { 
      name: 'Tech', 
      href: '/tech',
      submenu: [
        { name: 'MVP Development', href: '/tech/mvp-development' },
        { name: 'Website Development', href: '/tech/website-development' },
        { name: 'Software Development', href: '/tech/software-development' },
        { name: 'Mobile App Development', href: '/tech/mobile-app-development' },
        { name: 'Support & Maintenance', href: '/tech/support-maintenance' }
      ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-dark-100/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className="container-max" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          {/* Ultra-Modern Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-12 h-12 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xl">P</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </motion.div>
            <span className={`text-2xl font-heading font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-white' : 'text-white'
            }`}>Prospera</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent-blue ${
                    location.pathname === item.href 
                      ? 'text-accent-blue' 
                      : isScrolled || !isHomePage
                        ? 'text-white/90 hover:text-white' 
                        : 'text-white hover:text-accent-blue'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Modern Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-dark-100/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Modern CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className={`px-6 py-2 rounded-2xl border transition-all duration-300 text-sm font-medium ${
                isScrolled || !isHomePage
                  ? 'border-white/20 text-white/90 hover:bg-white/10 hover:text-white' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              Get Quote
            </Link>
            <Link 
              to="/tech" 
              className="px-6 py-2 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-2xl hover:shadow-glow transition-all duration-300 text-sm font-medium"
            >
              Explore IT Services
            </Link>
          </div>

          {/* Modern Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-white/90' : 'bg-white/90'
              } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-white/90' : 'bg-white/90'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-white/90' : 'bg-white/90'
              } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Modern Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-dark-100/95 backdrop-blur-xl border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl mx-4 transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="px-6 pt-6 space-y-3 border-t border-white/10 mt-4">
                  <Link 
                    to="/contact" 
                    className="block w-full px-6 py-3 border border-white/20 text-white/90 hover:bg-white/10 hover:text-white rounded-2xl text-center text-sm font-medium transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Get Quote
                  </Link>
                  <Link 
                    to="/tech" 
                    className="block w-full px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-2xl text-center text-sm font-medium hover:shadow-glow transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Explore IT Services
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
