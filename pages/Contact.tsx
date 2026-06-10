import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { ContactFormState } from '../types';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. A member of Karish Law Firm will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-karish-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Start your consultation with Karish Law Firm today.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            variants={infoVariants}
            initial="hidden"
            animate="visible"
          >
             <h2 className="text-2xl font-serif font-bold text-karish-navy mb-6">Get In Touch</h2>
             <p className="text-slate-600 mb-8 leading-relaxed">
               Whether you are facing complex litigation, a business dispute, or require settlement negotiation strategies, our team is ready to advocate for you.
             </p>

             <div className="space-y-6">
               {[
                 { Icon: MapPin, title: "Office Location", lines: ["101 California Street, Suite 2050", "San Francisco, CA 94111"] },
                 { Icon: Phone, title: "Phone", lines: ["(555) 123-4567"], sub: "Mon-Fri: 9am - 6pm PST" },
                 { Icon: Mail, title: "Email", lines: ["info@karishlaw.com"] }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 + (idx * 0.1) }}
                   className="flex items-start"
                 >
                   <div className="bg-white p-3 shadow-sm rounded-full mr-4">
                     <item.Icon className="text-karish-gold" size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-karish-navy">{item.title}</h4>
                     {item.lines.map((l, i) => <p key={i} className="text-slate-600">{l}</p>)}
                     {item.sub && <p className="text-xs text-slate-400">{item.sub}</p>}
                   </div>
                 </motion.div>
               ))}
             </div>
             
             {/* Map Placeholder */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.8 }}
               className="mt-8 h-64 bg-slate-200 rounded-lg w-full flex items-center justify-center text-slate-400 shadow-inner"
             >
                [Interactive Google Map Component Placeholder]
             </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-karish-navy mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-karish-gold focus:outline-none transition-shadow"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-karish-gold focus:outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-karish-gold focus:outline-none transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Case Details / Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-karish-gold focus:outline-none transition-shadow"
                  placeholder="Please briefly describe your legal inquiry..."
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-karish-gold text-white py-3 rounded font-bold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;