import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ScrollIndicator, ParallaxContainer, HorizontalScrollSection, ScrollReveal, TextReveal } from '../components/ScrollSystem'
import { GlassCard, ModernButton, ServiceCard, TestimonialCard, IndustryCard, StatsCard, ModernInput, ModernTextarea, ModernSelect } from '../components/ModernComponents'

const Home = () => {
  const services = [
    {
      title: 'HR & Recruitment',
      description: 'Complete recruitment solutions for IT & Non-IT roles, payroll management, and POSH consulting.',
      icon: '👥',
      link: '/recruitment',
      features: ['Permanent Hiring', 'Contract Staffing', 'Payroll Management', 'Background Verification']
    },
    {
      title: 'Legal Consulting',
      description: 'Company registration, compliance, MSME registration, and comprehensive legal services.',
      icon: '⚖️',
      link: '/legal',
      features: ['Company Registration', 'Compliance & Licenses', 'MSME/Startup India', 'Legal Drafting']
    },
    {
      title: 'Tech Services',
      description: 'MVP development, custom software, mobile apps, and complete tech solutions.',
      icon: '💻',
      link: '/tech',
      features: ['MVP Development', 'Web Applications', 'Mobile Apps', 'Support & Maintenance']
    }
  ]

  const industries = [
    { name: 'Startups & Entrepreneurs', icon: '🚀' },
    { name: 'IT & Software', icon: '💻' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'BFSI', icon: '🏦' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Education', icon: '🎓' },
    { name: 'Logistics', icon: '🚛' }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'Prospera helped us build our entire HR framework from scratch. Their recruitment process is exceptional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'HealthCare Plus',
      role: 'Founder',
      content: 'The legal team guided us through company registration and compliance. Highly professional service.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'E-Shop India',
      role: 'CTO',
      content: 'Their tech team delivered our MVP on time and within budget. Great communication throughout.',
      rating: 5
    }
  ]

  const stats = [
    { value: 500, suffix: '+', label: 'Successful Placements' },
    { value: 200, suffix: '+', label: 'Companies Registered' },
    { value: 50, suffix: '+', label: 'Tech Projects' },
    { value: 5, suffix: '+', label: 'Years Experience' }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ScrollIndicator />
      
      {/* Ultra-Modern Hero Section */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white/80 text-sm font-medium"
                >
                  🚀 Transforming Businesses Since 2019
                </motion.div>
                
                <TextReveal 
                  text="HR, Legal & Recruitment Experts"
                  className="text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-white/80 leading-relaxed max-w-2xl"
                >
                  Professional consulting services for HR, Legal Compliance, and Tech Solutions. 
                  From recruitment to company registration to software development - we've got you covered.
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <ModernButton size="lg" className="bg-gradient-to-r from-accent-green to-accent-blue">
                  <Link to="/recruitment">Hire HR Team</Link>
                </ModernButton>
                <ModernButton variant="secondary" size="lg">
                  <Link to="/contact">Book Free HR Audit</Link>
                </ModernButton>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link 
                  to="/tech" 
                  className="inline-flex items-center text-accent-green hover:text-white transition-colors font-semibold group"
                >
                  <span>Explore Software & IT Services</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <GlassCard variant="hero" className="p-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <StatsCard key={stat.label} stat={stat} index={index} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Ultra-Modern Services Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green" />
        
        <div className="container-max relative z-10">
          <ScrollReveal className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block px-8 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white/80 text-sm font-medium mb-6"
            >
              ⚡ Our Core Expertise
            </motion.div>
            
            <TextReveal 
              text="Comprehensive Business Solutions"
              className="text-5xl lg:text-6xl font-heading font-bold text-white mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            >
              From hiring the right talent to legal compliance and cutting-edge technology development - 
              we provide integrated solutions that drive business growth.
            </motion.p>
          </ScrollReveal>

          <div className="modern-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Beautiful Industries Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Stunning Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-300 to-dark-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-blue rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent-green rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent-blue rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container-max relative z-10">
          {/* Beautiful Header */}
          <ScrollReveal className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white/80 text-sm font-medium mb-8"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🏢</span>
              </div>
              Industries We Serve
            </motion.div>
            
            <TextReveal 
              text="Industries We Transform"
              className="text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering businesses across diverse sectors with our comprehensive expertise, 
              innovative solutions, and unwavering commitment to excellence.
            </motion.p>
          </ScrollReveal>
          
          {/* Stunning Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Industry Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                      {industry.icon}
                    </div>
                  </div>
                  
                  {/* Industry Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-accent-green/10 to-accent-blue/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Beautiful CTA Section */}
          <ScrollReveal className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-green/10 opacity-50" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                  Ready to Transform Your Industry?
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses that have revolutionized their operations with our expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <ModernButton 
                    size="lg" 
                    className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green hover:shadow-glow"
                  >
                    <Link to="/industries" className="flex items-center gap-2">
                      <span>Explore All Industries</span>
                      <span className="text-lg">→</span>
                    </Link>
                  </ModernButton>
                  
                  <ModernButton 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Get Consultation</span>
                      <span className="text-lg">💬</span>
                    </Link>
                  </ModernButton>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container-max relative z-10">
          <ScrollReveal className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block px-8 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white/80 text-sm font-medium mb-6"
            >
              💬 Client Success Stories
            </motion.div>
            
            <TextReveal 
              text="What Our Clients Say"
              className="text-5xl lg:text-6xl font-heading font-bold text-white mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            >
              Don't just take our word for it - hear from businesses that have transformed with our services.
            </motion.p>
          </ScrollReveal>

          <div className="modern-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
          
          <ScrollReveal className="text-center mt-16">
            <ModernButton size="lg">
              <Link to="/testimonials">Read More Success Stories</Link>
            </ModernButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Ultra-Modern Contact Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-400 to-dark-500" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white/80 text-sm font-medium mb-6"
                  >
                    🚀 Ready to Get Started?
                  </motion.div>
                  
                  <TextReveal 
                    text="Transform Your Business Today"
                    className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
                  />
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-xl text-white/80 leading-relaxed"
                  >
                    Get started with a free consultation. Our experts will analyze your needs 
                    and provide tailored solutions for your business growth.
                  </motion.p>
                </div>
                
                {/* Benefits List */}
                <div className="space-y-4">
                  {[
                    { icon: '✨', text: 'Free initial consultation' },
                    { icon: '🎯', text: 'Customized solutions' },
                    { icon: '👨‍💼', text: 'Expert guidance' },
                    { icon: '⚡', text: '24/7 support available' }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.text}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center text-xl group-hover:bg-accent-blue/20 transition-colors duration-300">
                        {benefit.icon}
                      </div>
                      <span className="text-white/90 font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
            
            {/* Form Side */}
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-heading font-bold text-white mb-3">
                      Get Your Free Consultation
                    </h3>
                    <p className="text-white/70">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ModernInput
                        type="text"
                        placeholder="First Name"
                        required
                      />
                      <ModernInput
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    
                    <ModernInput
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    
                    <ModernInput
                      type="tel"
                      placeholder="Phone Number"
                      required
                    />
                    
                    <ModernSelect
                      placeholder="Select Service"
                      options={[
                        { value: 'hr', label: 'HR & Recruitment' },
                        { value: 'legal', label: 'Legal Consulting' },
                        { value: 'tech', label: 'Tech Services' },
                        { value: 'multiple', label: 'Multiple Services' }
                      ]}
                    />
                    
                    <ModernTextarea
                      placeholder="Tell us about your requirements"
                      rows={4}
                    />
                    
                    <ModernButton 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green hover:shadow-glow"
                    >
                      Get Free Consultation
                    </ModernButton>
                  </form>
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center space-x-6 text-white/60 text-sm">
                      <div className="flex items-center space-x-2">
                        <span>🔒</span>
                        <span>Secure & Confidential</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>⚡</span>
                        <span>Quick Response</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
