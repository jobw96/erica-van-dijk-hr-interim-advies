import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const iconBgVariants = {
  rest: { backgroundColor: 'rgb(249 250 251)' },
  hover: { backgroundColor: 'rgba(139, 30, 46, 0.1)'}
};
const contactTextVariants = {
  rest: { color: '#333333' },
  hover: { color: '#8B1E2E' }
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Bedankt voor uw bericht! Ik neem zo spoedig mogelijk contact op.');
  };

  return (
    <section id="contact" className="pt-8 md:pt-12 pb-20 md:pb-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Side: Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.96, y: 6 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(139, 30, 46, 0.12)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="section-label inline-flex items-center h-[42px] px-9 bg-[#fff5f8] text-[#8B1E2E] rounded-[50px] mb-4"
                    style={{ boxShadow: '0 4px 20px rgba(139, 30, 46, 0.08)' }}
                >
                    Contact
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-ginto-bold text-[#333333] mb-6 tracking-wide">
                    Laten we kennismaken
                </h2>
                <p className="text-lg text-[#666666] leading-relaxed mb-10 font-ginto-regular tracking-wide">
                    Heeft u vragen of wilt u vrijblijvend kennismaken? Neem gerust contact met mij op. Ik sta klaar om u te helpen.
                </p>

                <div className="space-y-6">
                     <motion.a 
                       href="mailto:info@ericavandijk.nl" 
                       className="flex items-center gap-3"
                       initial="rest"
                       whileHover="hover"
                     >
                        <motion.div 
                          variants={iconBgVariants}
                          className="p-2 bg-gray-50 rounded-full"
                        >
                            <Mail size={20} className="text-[#8B1E2E]" />
                        </motion.div>
                        <motion.span 
                          variants={contactTextVariants}
                          className="font-ginto-regular text-lg tracking-wide"
                        >
                          info@ericavandijk.nl
                        </motion.span>
                     </motion.a>
                     <motion.a 
                       href="tel:0625317680" 
                       className="flex items-center gap-3"
                       initial="rest"
                       whileHover="hover"
                     >
                        <motion.div 
                          variants={iconBgVariants}
                          className="p-2 bg-gray-50 rounded-full"
                        >
                            <Phone size={20} className="text-[#8B1E2E]" />
                        </motion.div>
                        <motion.span 
                          variants={contactTextVariants}
                          className="font-ginto-regular text-lg tracking-wide"
                        >
                          06 253 176 80
                        </motion.span>
                     </motion.a>
                     <motion.div 
                       className="flex items-center gap-3"
                       initial="rest"
                       whileHover="hover"
                     >
                        <motion.div 
                          variants={iconBgVariants}
                          className="p-2 bg-gray-50 rounded-full"
                        >
                            <MapPin size={20} className="text-[#8B1E2E]" />
                        </motion.div>
                        <motion.span 
                          variants={contactTextVariants}
                          className="font-ginto-regular text-lg tracking-wide"
                        >
                          Nederland
                        </motion.span>
                     </motion.div>
                </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl p-8 md:p-12"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-ginto-regular text-[#666666] ml-1 tracking-wide">Naam *</label>
                            <input 
                                type="text" 
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#333333] focus:border-[#8B1E2E] focus:ring-4 focus:ring-[#8B1E2E]/10 outline-none bg-white font-ginto-regular"
                                value={formState.name}
                                onChange={(e) => setFormState({...formState, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-ginto-regular text-[#666666] ml-1 tracking-wide">Telefoon</label>
                            <input 
                                type="tel" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#333333] focus:border-[#8B1E2E] focus:ring-4 focus:ring-[#8B1E2E]/10 outline-none bg-white font-ginto-regular"
                                value={formState.phone}
                                onChange={(e) => setFormState({...formState, phone: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-ginto-regular text-[#666666] ml-1 tracking-wide">E-mail *</label>
                        <input 
                            type="email" 
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#333333] focus:border-[#8B1E2E] focus:ring-4 focus:ring-[#8B1E2E]/10 outline-none bg-white font-ginto-regular"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-ginto-regular text-[#666666] ml-1 tracking-wide">Bericht *</label>
                        <textarea 
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[#333333] focus:border-[#8B1E2E] focus:ring-4 focus:ring-[#8B1E2E]/10 outline-none resize-none bg-white font-ginto-regular"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, backgroundColor: '#701209' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#8B1E2E] text-white font-ginto-bold text-lg py-4 rounded-lg shadow-lg tracking-wide"
                    >
                        Verstuur Bericht
                    </motion.button>
                </form>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
