import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap, Clock, Users, BarChart, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  const faqItems = [
    { question: "How does BlogBoost work with my existing workflow?", answer: "BlogBoost seamlessly integrates with your blog's RSS feed, requiring no changes to your current writing process." },
    { question: "Is my content safe with AI repurposing?", answer: "Absolutely. Our AI maintains the essence of your message while optimizing for each platform's unique requirements." },
    { question: "Can I customize the posts before they go live?", answer: "Yes! You have full control to review and edit AI-generated content before it's shared." },
    { question: "How does BlogBoost improve my SEO?", answer: "By distributing your content across multiple platforms with backlinks, you increase your online presence and improve search engine rankings." },
    { question: "What if I need help setting up?", answer: "Our dedicated support team is always ready to assist you. Plus, we offer comprehensive video tutorials for easy onboarding." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-600"
          >
            BlogBoost
          </motion.h1>
          <nav className="hidden md:flex space-x-4">
            <motion.a 
              href="#features" 
              className="text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#why-choose" 
              className="text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Why Choose Us
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#faq" 
              className="text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              FAQ
            </motion.a>
          </nav>
          <motion.button 
            onClick={toggleMenu} 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <a href="#features" className="block py-2 px-4 text-sm hover:bg-gray-100">Features</a>
            <a href="#why-choose" className="block py-2 px-4 text-sm hover:bg-gray-100">Why Choose Us</a>
            <a href="#testimonials" className="block py-2 px-4 text-sm hover:bg-gray-100">Testimonials</a>
            <a href="#pricing" className="block py-2 px-4 text-sm hover:bg-gray-100">Pricing</a>
            <a href="#faq" className="block py-2 px-4 text-sm hover:bg-gray-100">FAQ</a>
          </motion.div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Amplify Your Blog's Reach: One-Click Multi-Platform Promotion</h2>
          <p className="text-xl mb-8">Tired of manually sharing your blog posts across social media? Meet BlogBoost – your AI-powered content distribution powerhouse.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Your Free Trial Now
          </motion.button>
        </motion.section>

        <section id="features" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">🚀 Skyrocket Your Blog Traffic in 3 Simple Steps</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Rocket className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Connect Your Blog</h4>
              <p>Seamlessly integrate with your RSS feed</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">AI Magic</h4>
              <p>Watch as we repurpose your content for each platform</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Instant Distribution</h4>
              <p>Hit 'Go' and conquer 5 major platforms simultaneously</p>
            </motion.div>
          </div>
        </section>

        <section id="why-choose" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">🎯 Why Choose BlogBoost?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Save Hours of Time</h4>
              <p>Automate your content distribution workflow</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Reach Wider Audiences</h4>
              <p>Tap into Reddit, Twitter, LinkedIn, Threads, and Medium</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <BarChart className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Boost SEO</h4>
              <p>Generate quality backlinks to your original posts</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Zap className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Optimize for Each Platform</h4>
              <p>AI-crafted summaries tailored for maximum engagement</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Track Performance</h4>
              <p>Monitor your cross-posting success with built-in analytics</p>
            </motion.div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">💡 Features That Set Us Apart</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>One-Click Posting</strong> – Share to all platforms with a single action</li>
            <li><strong>AI-Powered Summaries</strong> – Unique, platform-specific content for each post</li>
            <li><strong>Smart Scheduling</strong> – Optimize posting times for peak engagement</li>
            <li><strong>Customizable Templates</strong> – Maintain your unique voice across platforms</li>
            <li><strong>Link Tracking</strong> – Measure the impact of your cross-posting efforts</li>
          </ul>
        </motion.section>

        <section id="testimonials" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">🗣️ What Our Users Are Saying</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.blockquote 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md italic"
            >
              "BlogBoost doubled my blog traffic in just one month!"
              <footer className="mt-2 font-semibold">- Sarah T., Tech Blogger</footer>
            </motion.blockquote>
            <motion.blockquote 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md italic"
            >
              "I used to spend hours sharing my posts. Now it takes seconds."
              <footer className="mt-2 font-semibold">- Mark R., Finance Writer</footer>
            </motion.blockquote>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">🔒 Risk-Free 14-Day Trial</h3>
          <p className="mb-6">Experience the power of automated, AI-enhanced content distribution. No credit card required.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Your Free Trial Now
          </motion.button>
        </motion.section>

        <section id="pricing" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">📈 Pricing Plans to Fit Your Needs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">Hobby Blogger</h4>
              <p className="text-3xl font-bold mb-4">$9<span className="text-sm font-normal">/month</span></p>
              <p>Perfect for growing your audience</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Choose Plan
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600"
            >
              <h4 className="text-xl font-semibold mb-2">Pro Creator</h4>
              <p className="text-3xl font-bold mb-4">$29<span className="text-sm font-normal">/month</span></p>
              <p>Ideal for serious content marketers</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Choose Plan
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">Agency</h4>
              <p className="text-3xl font-bold mb-4">$99<span className="text-sm font-normal">/month</span></p>
              <p>Manage multiple blogs with ease</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          </div>
          <p className="text-center mt-4">All plans include our core features. Upgrade or downgrade anytime.</p>
        </section>

        <section id="faq" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">❓ Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-lg font-semibold">{item.question}</h4>
                  {openFAQ === index ? <ChevronUp className="flex-shrink-0" /> : <ChevronDown className="flex-shrink-0" />}
                </button>
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openFAQ === index ? 'auto' : 0, opacity: openFAQ === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 overflow-hidden"
                >
                  <p className="pb-4">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">🌟 Ready to Amplify Your Blog's Impact?</h3>
          <p className="mb-8">Don't let your brilliant content go unnoticed. Join thousands of successful bloggers who are saving time and reaching wider audiences with BlogBoost.</p>
          <div className="space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              See How It Works
            </motion.button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center mb-2">BlogBoost: Your Content, Amplified Across the Web</p>
          <p className="text-center">© 2024 BlogBoost. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;