import React from 'react';
import { Mail, Globe, Linkedin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ResponsiveAcademicContact = () => {
  // Global serif stack for Times New Roman aesthetic
  const serifStyle = { fontFamily: '"Times New Roman", Times, serif' };

  return (
    <section className="w-full bg-[#FFFFFF] py-12 md:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT COLUMN: Height-matched to Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Responsive Heading: Small on mobile, 42px on large desktop */}
              <h2
                style={serifStyle}
                className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0B3C5D] leading-tight"
              >
                Get in Touch
              </h2>
              
              <p
                style={serifStyle}
                className="text-base md:text-lg lg:text-[18px] text-[#6B7280] max-w-[450px] leading-relaxed italic"
              >
                Reach out for queries, academic collaborations, or event-related information.
                Our team typically responds within two business days.
              </p>
              
              <div className="pt-4">
                <div className="group flex items-center gap-4 cursor-pointer w-fit">
                  <div className="text-[#0B3C5D] group-hover:text-[#D97706] transition-colors">
                    <Mail size={22} />
                  </div>
                  <a
                    href="mailto:contact@university.edu"
                    style={serifStyle}
                    className="text-lg md:text-xl text-[#6B7280] group-hover:text-[#0B3C5D] transition-colors underline underline-offset-4"
                  >
                    contact@university.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Anchored Bottom Section - Matches Form Depth */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-gray-100">
              <p style={serifStyle} className="text-[#0B3C5D] font-bold mb-4 uppercase tracking-[0.2em] text-xs">
                Digital Presence
              </p>
              <div className="flex items-center gap-6">
                {[
                  { icon: <Globe size={22} />, label: "Web" },
                  { icon: <Linkedin size={22} />, label: "LinkedIn" },
                  { icon: <MessageCircle size={22} />, label: "WhatsApp" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.15, color: "#D97706" }}
                    className="text-[#0B3C5D] transition-colors p-1"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white border-[1.5px] border-[#0B3C5D] rounded-[12px] p-6 md:p-10 shadow-sm">
              <form className="space-y-6">
                
                {/* Responsive Inputs: Stack on mobile, Side-by-side on tablet+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label style={serifStyle} className="text-sm md:text-base font-bold text-[#0B3C5D]">First Name</label>
                    <input
                      type="text"
                      style={serifStyle}
                      className="h-[46px] px-4 border border-[#6B7280] rounded-[4px] focus:border-[#0B3C5D] focus:ring-1 focus:ring-[#0B3C5D] outline-none transition-all text-base"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label style={serifStyle} className="text-sm md:text-base font-bold text-[#0B3C5D]">Last Name</label>
                    <input
                      type="text"
                      style={serifStyle}
                      className="h-[46px] px-4 border border-[#6B7280] rounded-[4px] focus:border-[#0B3C5D] focus:ring-1 focus:ring-[#0B3C5D] outline-none transition-all text-base"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label style={serifStyle} className="text-sm md:text-base font-bold text-[#0B3C5D]">Email Address</label>
                  <input
                    type="email"
                    style={serifStyle}
                    className="h-[46px] px-4 border border-[#6B7280] rounded-[4px] focus:border-[#0B3C5D] focus:ring-1 focus:ring-[#0B3C5D] outline-none transition-all text-base"
                    placeholder="j.smith@institution.edu"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label style={serifStyle} className="text-sm md:text-base font-bold text-[#0B3C5D]">Message / Inquiry</label>
                  <textarea
                    rows={5}
                    style={serifStyle}
                    className="min-h-[120px] md:min-h-[150px] p-4 border border-[#6B7280] rounded-[4px] focus:border-[#0B3C5D] focus:ring-1 focus:ring-[#0B3C5D] outline-none transition-all resize-none text-base"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ y: -2, backgroundColor: "#B45309" }}
                  whileTap={{ y: 0 }}
                  style={serifStyle}
                  className="w-full md:w-auto px-10 h-[50px] bg-[#D97706] text-white font-bold rounded-[4px] flex items-center justify-center gap-3 uppercase tracking-widest text-xs md:text-sm transition-colors"
                >
                  <span>Submit Correspondence</span>
                  <Send size={16} />
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ResponsiveAcademicContact;
