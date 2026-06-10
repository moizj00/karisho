import React, { useState } from 'react';
import { Lock, FileText, Download, ChevronDown, ChevronUp, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'trends'>('login');
  const [expandedSection, setExpandedSection] = useState<string | null>('legislative');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-karish-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold mb-4"
          >
            Client Resources
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-300"
          >
            Secure access and legal insights.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-8 space-x-4">
           <button 
             onClick={() => setActiveTab('login')}
             className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'login' ? 'bg-karish-gold text-white shadow-md transform scale-105' : 'bg-white text-karish-slate border hover:bg-slate-50'}`}
           >
             Client Portal Login
           </button>
           <button 
             onClick={() => setActiveTab('trends')}
             className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'trends' ? 'bg-karish-gold text-white shadow-md transform scale-105' : 'bg-white text-karish-slate border hover:bg-slate-50'}`}
           >
             Legal Trends & Reports
           </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'login' && (
            <motion.div 
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-karish-gold"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Lock className="text-karish-navy w-8 h-8" />
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold text-center text-karish-navy mb-6">Secure Client Access</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Case ID or Email</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-karish-gold focus:outline-none transition-shadow" placeholder="Enter your Case ID" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <input type="password" className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-karish-gold focus:outline-none transition-shadow" placeholder="••••••••" />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-karish-navy text-white py-3 rounded font-bold hover:bg-slate-800 transition-colors"
                >
                  Access Portal
                </motion.button>
              </form>
              <div className="mt-6 text-center text-sm text-slate-500">
                <p>Forget your credentials? Contact your case manager.</p>
                <div className="mt-4 flex flex-col gap-2">
                   <button className="flex items-center justify-center gap-2 text-karish-gold hover:underline"><Download size={14}/> Download Standard Retainer Agreement</button>
                   <button className="flex items-center justify-center gap-2 text-karish-gold hover:underline"><Download size={14}/> Download Intake Form</button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'trends' && (
            <motion.div 
              key="trends"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="p-8 border-b border-gray-100">
                 <h2 className="text-3xl font-serif font-bold text-karish-navy mb-2">Current Significant Legal Trends</h2>
                 <p className="text-slate-500">A comprehensive summary of California Litigation and Settlement Practices.</p>
              </div>

              {/* Accordion Items */}
              {[
                { 
                  id: 'legislative', 
                  title: 'I. Legislative Changes Impacting Litigation', 
                  icon: FileText,
                  content: (
                    <>
                      <h4 className="font-bold text-karish-gold">Litigation Financing (Failed & Pending)</h4>
                      <p>Efforts to regulate third-party litigation financing (TPLF) have stalled. SB 581 failed to pass, and AB 743 faces opposition. This leaves litigation finance largely unchecked, potentially driving up claim values and increasing defense costs.</p>
                      
                      <h4 className="font-bold text-karish-gold">PAGA Reforms (2024)</h4>
                      <p>Amendments to PAGA (AB 2288 and SB 92) allow employers to cure violations and cap penalties at 15% if "reasonable efforts to comply" are demonstrated. Despite reforms, 2025 saw a record 10,126 notices.</p>

                      <h4 className="font-bold text-karish-gold">Lemon Law Updates (AB 1755)</h4>
                      <p>Effective 2025, this bill streamlines the process with mandatory pre-suit notices (30 days prior), standardized settlement releases, and mandatory mediation within 150 days of an answer.</p>

                      <h4 className="font-bold text-karish-gold">Algorithmic Pricing (AB 325)</h4>
                      <p>Prohibits using "common pricing algorithms" that leverage competitor data. It also eases the pleading standard for antitrust claims under the Cartwright Act.</p>
                    </>
                  )
                },
                { 
                  id: 'judicial', 
                  title: 'II. Judicial Trends & Appellate Decisions', 
                  icon: Scale,
                  content: (
                    <>
                       <h4 className="font-bold text-karish-gold">"Nuclear Verdicts"</h4>
                       <p>California leads the U.S. in verdicts over $10 million. A new "duty to innovate" theory (Gilead Tenofovir Cases) suggests liability for delaying safer products, even if the current product isn't defective.</p>
                       
                       <h4 className="font-bold text-karish-gold">Arbitration & PAGA</h4>
                       <p>The Supreme Court is reviewing cases like <em>Leeper v. Shipt</em> ("Headless PAGA") and <em>Adolph v. Uber</em> to determine how arbitration agreements interact with representative PAGA claims.</p>
                    </>
                  )
                }
              ].map((item) => (
                <div key={item.id} className="border-b border-gray-100 last:border-0">
                  <button 
                    onClick={() => toggleSection(item.id)}
                    className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                  >
                    <span className="text-xl font-bold text-karish-navy flex items-center gap-2"><item.icon size={20}/> {item.title}</span>
                    <motion.div
                      animate={{ rotate: expandedSection === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={expandedSection === item.id ? "text-karish-gold" : "text-slate-400"}/>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {expandedSection === item.id && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-6 text-slate-700 space-y-4 leading-relaxed border-t border-gray-100">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Resources;