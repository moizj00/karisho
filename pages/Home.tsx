import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Briefcase, TrendingUp, Clock, Calendar, DollarSign, Users, Award, Briefcase as BoutiqueIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center overflow-hidden bg-karish-navy">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=2000" 
            alt="Underwater Fish" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-karish-navy via-karish-navy/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
              }}
            >
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6"
              >
                <span className="text-karish-gold">✨</span>
                <span className="text-white text-sm font-medium">California's Trusted Legal Advocates</span>
              </motion.div>

              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
              >
                Karish Law Firm
              </motion.h1>

              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-xl text-slate-200 mb-10 max-w-xl leading-relaxed"
              >
                Resolving disputes through <span className="text-karish-gold font-bold">strategic negotiation</span> — efficient resolution, minimized costs, and results that protect your bottom line.
              </motion.p>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/contact">
                  <button className="w-full sm:w-auto bg-karish-gold text-white px-10 py-4 rounded font-bold hover:bg-amber-700 transition-all shadow-lg hover:scale-105 active:scale-95">
                    Request Consultation
                  </button>
                </Link>
                <Link to="/services">
                  <button className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded font-bold hover:bg-white hover:text-karish-navy transition-all hover:scale-105 active:scale-95">
                    Explore Practice Areas
                  </button>
                </Link>
              </motion.div>

              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { text: "Boutique Firm" },
                  { text: "1800+ Consultation Cases" },
                  { text: "98% Client Satisfaction" }
                ].map((badge, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg text-white/80 text-sm">
                    {badge.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-karish-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">Signature Advocacy</h3>
                    <h2 className="text-white text-3xl font-serif font-bold">Karish Law Firm</h2>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Shield className="text-white/60" size={24} />
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: Shield, title: "Civil Litigation", desc: "Precision planning across high-value civil matters." },
                    { icon: FileText, title: "Family Law", desc: "Divorce, child custody, and family dispute resolution." },
                    { icon: Briefcase, title: "Business & Corp", desc: "Entity formation, contracts, and ongoing counsel for businesses." },
                    { icon: TrendingUp, title: "Real Estate Planning", desc: "Trusts, wills, and asset protection." }
                  ].map((service, i) => (
                    <div key={i} className="flex gap-4 group cursor-default">
                      <div className="mt-1 bg-karish-gold/10 p-2 rounded-lg group-hover:bg-karish-gold/20 transition-colors">
                        <service.icon className="text-karish-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{service.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                  {[
                    { icon: Clock, val: "24/7", label: "CLIENT ACCESS" },
                    { icon: Calendar, val: "12+", label: "YEARS IN CA" },
                    { icon: DollarSign, val: "$10M+", label: "SETTLEMENTS" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="mx-auto text-karish-gold mb-2" size={20} />
                      <div className="text-white font-bold text-xl">{stat.val}</div>
                      <div className="text-[10px] text-slate-500 font-bold tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Rest of the sections remain same or can be styled to match */}
      {/* ... (Keeping original sections but ensuring they fit the theme) */}
      
      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUpVariant}
            >
              <h2 className="text-sm font-bold text-karish-gold uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-4xl font-serif font-bold text-karish-navy mb-8 leading-tight">
                Client Trust. Integrity.<br />Aggressive Advocacy.
              </h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Karish Law Firm is a premier legal practice committed to providing clients with expert representation in various legal matters, including civil litigation, business disputes, and personal injury cases.
              </p>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                We differentiate ourselves by integrating traditional legal expertise with advanced strategic planning for enhanced case management, ensuring we stay ahead of California's rapidly changing legislative environment.
              </p>
              <Link to="/about" className="group text-karish-navy font-bold text-lg inline-flex items-center">
                <span className="border-b-2 border-karish-gold pb-1 group-hover:text-karish-gold transition-colors">More About Our Firm</span>
                <TrendingUp className="ml-2 text-karish-gold group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
              className="relative"
            >
               <div className="absolute -inset-4 bg-karish-gold/5 rounded-3xl -z-10"></div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Shield, title: "Complex Litigation", desc: "Specialized handling of high-stakes civil and business disputes." },
                    { icon: Users, title: "Client Centric", desc: "Leveraging modern technology for data analysis and efficient discovery." },
                    { icon: Award, title: "PAGA & Lemon Law", desc: "Expertise in AB 1755, AB 2288, and recent reforms." },
                    { icon: BoutiqueIcon, title: "Strategic Settlement", desc: "Securing favorable outcomes through negotiation." }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100"
                    >
                      <item.icon className="text-karish-gold mb-4" size={32} />
                      <h4 className="font-bold text-karish-navy text-xl mb-3">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-karish-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-karish-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-karish-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-8">Facing a Complex Legal Matter?</h2>
            <p className="text-slate-300 mb-12 text-xl leading-relaxed">
              Don't navigate California's legal system alone. Secure expert representation today.
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-karish-gold text-white px-12 py-5 rounded-full font-bold hover:bg-amber-700 transition-all shadow-2xl"
              >
                Schedule Your Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
