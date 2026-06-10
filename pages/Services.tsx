import React from 'react';
import { Gavel, Briefcase, Users, Car, AlertTriangle, ShieldAlert } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'litigation',
      title: 'Civil Litigation',
      description: 'Handling complex civil matters including breach of contract, property disputes, and torts. We navigate the full lifecycle of litigation from pleadings to trial.',
      icon: Gavel
    },
    {
      id: 'business',
      title: 'Business Disputes',
      description: 'Representing corporations and partnerships in internal disputes, trade secret theft, and unfair competition claims, including defense against pricing regulation (AB 325) claims.',
      icon: Briefcase
    },
    {
      id: 'injury',
      title: 'Personal Injury',
      description: 'Advocating for victims in an era of "Nuclear Verdicts." We fight for maximum compensation in wrongful death and catastrophic injury cases.',
      icon: AlertTriangle
    },
    {
      id: 'paga',
      title: 'PAGA Defense & Litigation',
      description: 'Expertise in the 2024 PAGA reforms (AB 2288/SB 92). We help employers demonstrate "reasonable efforts to comply" to cap penalties and manage representative claims.',
      icon: Users
    },
    {
      id: 'lemon',
      title: 'Lemon Law (AB 1755)',
      description: 'Navigating the new statute of limitations and mandatory pre-suit notice requirements effective 2025. We handle standardized settlement procedures and mandatory mediation.',
      icon: Car
    },
    {
      id: 'ip-law',
      title: 'Intellectual Property & Privacy',
      description: 'Advising on complex IP disputes, copyright challenges, and employment bias risks. We protect your creative assets and corporate reputation.',
      icon: ShieldAlert
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-karish-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-serif font-bold mb-4">Our Practice Areas</h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Comprehensive legal solutions tailored to the complexities of California Law.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-karish-gold cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <service.icon className="text-karish-navy w-12 h-12 mb-6" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-karish-navy mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Deep Dive Section based on provided text */}
        <div className="mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-karish-navy mb-8 text-center"
          >
            Specialized Expertise
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-karish-navy mb-4">Litigation & Settlement Strategy</h3>
            <p className="text-slate-700 mb-4">
              California has the highest number of "nuclear verdicts" in the U.S., with awards over $10 million becoming increasingly common. 
              Our firm specializes in mitigating these risks through early case assessment and aggressive defense strategies.
            </p>
            <p className="text-slate-700">
              We also leverage the new Tax Settlement Procedures (AB 2366) to expedite settlements in civil sales and use tax matters, 
              taking advantage of the reduced approval times to resolve disputes efficiently.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;