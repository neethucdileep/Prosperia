import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Essential HR Compliance Checklist for 2024',
      category: 'HR Compliance',
      date: 'January 15, 2024',
      excerpt: 'Stay compliant with the latest HR regulations and avoid costly penalties with our comprehensive checklist.',
      readTime: '5 min read'
    },
    {
      title: 'POSH Act: Complete Guide for Employers',
      category: 'POSH Awareness',
      date: 'January 10, 2024',
      excerpt: 'Everything you need to know about implementing POSH policies and creating a safe workplace.',
      readTime: '8 min read'
    },
    {
      title: 'MSME Registration Benefits and Process',
      category: 'Legal Templates',
      date: 'January 5, 2024',
      excerpt: 'Unlock government benefits and support for your small business with MSME registration.',
      readTime: '6 min read'
    },
    {
      title: 'Startup India Registration: Step-by-Step Guide',
      category: 'MSME/Startup News',
      date: 'December 28, 2023',
      excerpt: 'Navigate the Startup India registration process and access exclusive benefits and funding opportunities.',
      readTime: '7 min read'
    },
    {
      title: 'Effective Hiring Strategies for Tech Startups',
      category: 'Hiring Checklists',
      date: 'December 20, 2023',
      excerpt: 'Build your dream tech team with proven hiring strategies and best practices.',
      readTime: '10 min read'
    },
    {
      title: 'Legal Document Templates for Small Businesses',
      category: 'Legal Templates',
      date: 'December 15, 2023',
      excerpt: 'Essential legal documents every small business needs, including contracts and agreements.',
      readTime: '4 min read'
    }
  ]

  const categories = ['All', 'HR Compliance', 'POSH Awareness', 'Legal Templates', 'MSME/Startup News', 'Hiring Checklists']

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
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stay updated with the latest trends, compliance updates, and best practices in HR, Legal, and Technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-2xl group cursor-pointer"
              >
                <div className="w-full h-48 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-4xl text-white">📄</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-accent-blue font-medium bg-accent-blue/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-accent-blue font-medium group-hover:text-accent-purple transition-colors">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest updates on HR compliance, legal changes, and industry insights.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary bg-accent-green hover:bg-green-600 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
