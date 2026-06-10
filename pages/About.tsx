import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-serif font-bold text-karish-navy mb-4">About Karish Law Firm</h1>
            <p className="text-lg text-slate-600 max-w-2xl">Defending your rights with integrity and innovation.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Content */}
          <motion.div 
            className="space-y-8 text-slate-700 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-serif font-bold text-karish-navy mb-4">Our Firm Profile</h2>
              <p>
                Karish Law Firm is a distinguished California-based legal practice specializing in complex litigation and strategic settlements. Founded on the principles of unwavering advocacy and ethical practice, we serve individuals and businesses facing high-stakes legal challenges.
              </p>
              <p className="mt-4">
                Our team understands that the legal landscape is not static. From recent changes in the Private Attorneys General Act (PAGA) to the rise of complex pricing regulations (AB 325), we stay abreast of every legislative development to protect our clients' interests.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-serif font-bold text-karish-navy mb-4">Our Philosophy</h2>
              <p>
                We believe that successful outcomes are built on a foundation of <strong>client trust and integrity</strong>. Litigation can be daunting; our goal is to provide clarity and confidence.
              </p>
              <p className="mt-4">
                Our approach is twofold:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Aggressive Advocacy:</strong> We prepare every case as if it is going to trial, ensuring we are in the strongest possible position during settlement negotiations.</li>
                <li><strong>Innovative Strategy:</strong> We embrace technology. By utilizing advanced analytics for case management and discovery, we reduce costs and uncover insights that traditional methods might miss.</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-serif font-bold text-karish-navy mb-4">Adapting to the Modern Legal Era</h2>
              <p>
                California leads the nation in legal trends, including the rise of "nuclear verdicts" and novel liability theories like the "duty to innovate." Karish Law Firm is uniquely positioned to handle these modern challenges. Whether it is navigating the new Lemon Law updates (AB 1755) or defending against emerging employment bias claims, we are the modern firm for the modern client.
              </p>
            </motion.div>
          </motion.div>

          {/* Sidebar Visuals */}
          <div className="space-y-8">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://picsum.photos/800/600" 
              alt="Legal Library" 
              loading="lazy"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-karish-navy text-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-karish-gold">Our Commitment</h3>
              <p className="italic text-slate-300">
                "To secure favorable outcomes through aggressive advocacy and innovative legal strategies, while maintaining the highest standards of trust and integrity."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;