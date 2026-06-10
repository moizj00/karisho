import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Scale, Cpu, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const testimonials = [
    {
      quote: "Karish Law Firm navigated my complex business dispute with incredible strategic foresight. Their ability to anticipate the opposition's moves was impressive.",
      author: "James Anderson",
      caseType: "Commercial Litigation"
    },
    {
      quote: "After my accident, I felt overwhelmed. The team at Karish Law not only fought for a settlement far beyond what I expected but treated me with genuine compassion.",
      author: "Sarah Jenkins",
      caseType: "Personal Injury"
    },
    {
      quote: "Their expertise in the new PAGA reforms saved our company from significant liability. Professional, knowledgeable, and efficient.",
      author: "Michael Chen",
      caseType: "Corporate Defense"
    }
  ];

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Karish Law Firm Office" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-karish-navy/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Strategic Litigation.<br />
              <span className="text-karish-gold">Favorable Settlements.</span>
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl font-light"
            >
              Navigating California's evolving legal landscape with expert representation in complex litigation and business disputes.
            </motion.p>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-karish-gold text-white px-8 py-3 rounded font-medium hover:bg-amber-700 transition-colors text-center"
                >
                  Request Consultation
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-karish-navy transition-colors text-center"
                >
                  Explore Practice Areas
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={fadeInUpVariant}
            >
              <h2 className="text-sm font-bold text-karish-gold uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-karish-navy mb-6">
                Client Trust. Integrity. Aggressive Advocacy.
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Karish Law Firm is a premier legal practice committed to providing clients with expert representation in various legal matters, including civil litigation, business disputes, and personal injury cases.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We differentiate ourselves by integrating traditional legal expertise with advanced strategic planning for enhanced case management, ensuring we stay ahead of California's rapidly changing legislative environment.
              </p>
              <Link to="/about" className="text-karish-navy font-bold border-b-2 border-karish-gold hover:text-karish-gold transition-colors inline-block pb-1">
                More About Our Firm
              </Link>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariant}
              className="bg-slate-100 p-8 rounded-lg border-l-4 border-karish-gold relative"
            >
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { Icon: ShieldCheck, title: "Complex Litigation", desc: "Specialized handling of high-stakes civil and business disputes." },
                    { Icon: Cpu, title: "Advanced Analytics", desc: "Leveraging modern technology for data analysis and efficient discovery." },
                    { Icon: Scale, title: "PAGA & Lemon Law", desc: "Expertise in AB 1755, AB 2288, and recent reforms." },
                    { Icon: TrendingUp, title: "Strategic Settlement", desc: "Securing favorable outcomes through negotiation." }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                      className="bg-white p-6 shadow-sm rounded"
                    >
                      <item.Icon className="text-karish-gold mb-3" size={32} />
                      <h4 className="font-bold text-karish-navy mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators / Stats */}
      <section className="py-20 bg-karish-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
              <h2 className="text-3xl font-serif font-bold mb-4">Why Choose Karish Law</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                In an era of "Nuclear Verdicts" and rapid legislative shifts, you need a firm that innovates.
              </p>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { val: "24/7", title: "Client Portal Access", desc: "Secure, real-time access to case files and communication." },
                { val: "Expert", title: "Enhanced Strategy", desc: "Data-driven insights for litigation financing and risk assessment." },
                { val: "100%", title: "Commitment", desc: "Dedicated to navigating the complexities of CA Law." }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="p-6 cursor-default"
                >
                   <motion.div 
                     initial={{ rotateX: 0 }}
                     whileHover={{ rotateX: 360, transition: { duration: 0.8 } }}
                     className="text-karish-gold font-bold text-5xl font-serif mb-2 inline-block"
                   >
                     {stat.val}
                   </motion.div>
                   <h4 className="text-xl font-bold mb-2">{stat.title}</h4>
                   <p className="text-slate-400 text-sm">{stat.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-karish-navy mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-karish-gold mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear from those we have successfully represented in high-stakes litigation and settlements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-karish-navy relative"
              >
                <div className="absolute top-4 right-4 opacity-10 text-karish-navy">
                  <Quote size={40} />
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-karish-navy">{t.author}</h4>
                  <p className="text-sm text-karish-gold uppercase tracking-wide font-bold mt-1">{t.caseType}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-karish-navy mb-6">Facing a Complex Legal Matter?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Don't navigate California's legal system alone. Secure expert representation today.
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-karish-gold text-white px-8 py-4 rounded font-bold hover:bg-amber-700 transition-colors shadow-lg"
              >
                Schedule Your Free Consultation <CheckCircle className="ml-2" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;