import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
                      contact@example.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800">New York, NY</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <motion.label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                  whileHover={{ x: 5 }}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </div>

              <div>
                <motion.label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                  whileHover={{ x: 5 }}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </div>

              <div>
                <motion.label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                  whileHover={{ x: 5 }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  whileFocus={{ scale: 1.01 }}
                  required
                ></motion.textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;