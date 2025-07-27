import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
      bio: "Visionary leader with 18+ years of experience in HR consulting, legal compliance, and technology solutions. Former VP at Fortune 500 companies.",
      expertise: ["Strategic Planning", "Business Development", "Client Relations"]
    },
    {
      name: "Priya Sharma",
      role: "Legal Director & Compliance Head",
      image: "/api/placeholder/300/300",
      bio: "Senior advocate with 15+ years specializing in corporate law, MSME registration, and regulatory compliance. LLM from National Law University.",
      expertise: ["Corporate Law", "MSME Registration", "Compliance Management"]
    },
    {
      name: "Arjun Patel",
      role: "Technology Director",
      image: "/api/placeholder/300/300",
      bio: "Full-stack architect with 14+ years building enterprise solutions. Expert in modern web technologies, mobile apps, and cloud infrastructure.",
      expertise: ["Web Development", "Mobile Apps", "Cloud Solutions"]
    },
    {
      name: "Sneha Reddy",
      role: "HR & Recruitment Head",
      image: "/api/placeholder/300/300",
      bio: "HR specialist with 12+ years in talent acquisition, payroll management, and POSH compliance. MBA in Human Resources from IIM.",
      expertise: ["Talent Acquisition", "Payroll Management", "POSH Compliance"]
    },
    {
      name: "Vikram Singh",
      role: "Operations Manager",
      image: "/api/placeholder/300/300",
      bio: "Operations expert with 10+ years optimizing business processes and ensuring service delivery excellence across multiple verticals.",
      expertise: ["Process Optimization", "Quality Assurance", "Client Success"]
    },
    {
      name: "Kavya Nair",
      role: "Business Development Manager",
      image: "/api/placeholder/300/300",
      bio: "Growth strategist with 8+ years driving business expansion and building strategic partnerships across industries.",
      expertise: ["Business Growth", "Strategic Partnerships", "Market Analysis"]
    }
  ]

  const values = [
    {
      title: "Excellence",
      description: "We deliver exceptional quality in every project, exceeding client expectations through meticulous attention to detail and continuous improvement.",
      icon: "⭐",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Integrity",
      description: "We conduct business with unwavering honesty, transparency, and ethical practices, building trust through consistent actions.",
      icon: "🤝",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative methodologies to provide forward-thinking solutions that drive success.",
      icon: "💡",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Partnership",
      description: "We forge lasting relationships with our clients, becoming trusted advisors who understand and support their long-term goals.",
      icon: "🤝",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Agility",
      description: "We adapt quickly to changing market conditions and client needs, ensuring responsive and flexible service delivery.",
      icon: "⚡",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Impact",
      description: "We focus on creating meaningful, measurable results that transform businesses and contribute to sustainable growth.",
      icon: "🎯",
      color: "from-red-400 to-red-600"
    }
  ]

  const achievements = [
    {
      number: "500+",
      label: "Clients Served",
      description: "Across diverse industries"
    },
    {
      number: "1000+",
      label: "Successful Placements",
      description: "IT & Non-IT positions"
    },
    {
      number: "200+",
      label: "Companies Registered",
      description: "Including MSME & Startups"
    },
    {
      number: "50+",
      label: "Tech Projects",
      description: "Web & Mobile Applications"
    }
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to provide comprehensive business solutions"
    },
    {
      year: "2019",
      title: "Legal Division Launch",
      description: "Expanded services to include corporate law and compliance"
    },
    {
      year: "2020",
      title: "Tech Services Added",
      description: "Introduced web development and mobile app services"
    },
    {
      year: "2021",
      title: "100+ Clients Milestone",
      description: "Reached significant client base across multiple industries"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 25+ professionals across all service verticals"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded 'Best Consulting Firm' by Business Excellence Awards"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Ultra-Modern Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-300 to-dark-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-blue rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent-green rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white/80 text-sm font-medium mb-8"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🏢</span>
              </div>
              About Our Company
            </motion.div>
            
            <h1 className="text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              About Prospera Consulting
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
            >
              We are a dynamic team of industry experts providing comprehensive HR, Legal, and Technology consulting services. 
              Our mission is to empower businesses with innovative solutions, strategic talent acquisition, legal compliance, 
              and cutting-edge technology that drives sustainable growth and success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to client success and business transformation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-accent-blue mb-3">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <div className="text-gray-600">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300" />
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                <p>
                  Founded in 2018, Prospera Consulting emerged from a vision to revolutionize how businesses 
                  approach their operational challenges. What began as a specialized HR consulting firm has 
                  evolved into a comprehensive solution provider covering HR, Legal, and Technology domains.
                </p>
                <p>
                  Our journey began when our founders recognized the critical challenges faced by startups and 
                  growing businesses in managing their human resources, legal compliance, and technology 
                  requirements. Today, we proudly serve over 500+ clients across diverse industries, from 
                  emerging startups to established enterprises.
                </p>
                <p>
                  We believe that every business deserves access to world-class professional services that can 
                  accelerate their growth, ensure regulatory compliance, and leverage cutting-edge technology. 
                  Our integrated approach combines deep industry expertise with innovative solutions, ensuring 
                  our clients receive holistic, tailored services that drive measurable results.
                </p>
                <p>
                  What sets us apart is our commitment to building long-term partnerships. We don't just 
                  provide services; we become an extension of your team, understanding your unique challenges 
                  and goals to deliver solutions that create lasting impact.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Journey Timeline</h3>
                <div className="space-y-4">
                  {milestones.slice(0, 4).map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {milestone.year}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{milestone.title}</h4>
                        <p className="text-white/70 text-sm">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and define our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300" />
        </div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  🎯
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed text-center text-lg">
                To be the most trusted and innovative partner for businesses seeking comprehensive HR, Legal, and 
                Technology solutions. We envision a future where every business, regardless of size or industry, 
                has seamless access to world-class professional services that enable sustainable growth, 
                regulatory compliance, and technological advancement.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-accent-blue rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  🚀
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed text-center text-lg">
                To empower businesses by providing exceptional HR, Legal, and Technology consulting 
                services that drive measurable results. We are committed to delivering innovative solutions, 
                maintaining the highest standards of professionalism, and building long-term partnerships 
                that contribute to our clients' sustainable success and growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals with deep expertise across HR, Legal, and Technology domains, 
              committed to delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-accent-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="text-accent-blue font-semibold mb-4">
                    {member.role}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Expertise
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative p-12 bg-white rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Ready to Work with Our Expert Team?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive expertise can help transform your business operations and drive sustainable growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green text-white rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/careers" 
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-accent-blue hover:text-accent-blue transition-all duration-300 font-semibold"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
